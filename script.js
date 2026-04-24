const weddingDate = new Date(2026, 7, 25, 18, 0, 0);
const whatsappNumber = "77000000000";
const mapLink = "https://2gis.kz/astana";
const musicFile = "https://www.chosic.com/wp-content/uploads/2026/03/Roa-Beloved(chosic.com).mp3";

const countdownValues = {
  days: document.querySelector('[data-unit="days"]'),
  hours: document.querySelector('[data-unit="hours"]'),
  minutes: document.querySelector('[data-unit="minutes"]'),
  seconds: document.querySelector('[data-unit="seconds"]')
};

const revealItems = document.querySelectorAll(".reveal");
const progressBar = document.getElementById("scroll-progress");
const musicButton = document.querySelector(".music-button");
const musicIcon = document.querySelector(".music-button__icon");
const audio = document.getElementById("wedding-audio");
const rsvpForm = document.getElementById("rsvp-form");
const toast = document.getElementById("toast");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const mapLinkElement = document.querySelector('#details .text-link');

let toastTimer = 0;
let scrollFrame = 0;
let fadeFrame = 0;

if (mapLinkElement) {
  mapLinkElement.href = mapLink;
}

function showToast(message) {
  clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("is-visible");

  toastTimer = window.setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 2200);
}

function updateCountdown() {
  const now = Date.now();
  const diff = weddingDate.getTime() - now;

  if (diff <= 0) {
    Object.values(countdownValues).forEach((item) => {
      item.textContent = "0";
    });
    return;
  }

  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  countdownValues.days.textContent = String(days);
  countdownValues.hours.textContent = String(hours).padStart(2, "0");
  countdownValues.minutes.textContent = String(minutes).padStart(2, "0");
  countdownValues.seconds.textContent = String(seconds).padStart(2, "0");
}

function setupReveal() {
  if (reduceMotion.matches || !("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.16,
      rootMargin: "0px 0px -8% 0px"
    }
  );

  revealItems.forEach((item) => observer.observe(item));
}

function updateProgress() {
  const scrollTop = window.scrollY;
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const progress = maxScroll > 0 ? Math.min(scrollTop / maxScroll, 1) : 0;

  progressBar.style.width = `${progress * 100}%`;
  scrollFrame = 0;
}

function onScroll() {
  if (!scrollFrame) {
    scrollFrame = window.requestAnimationFrame(updateProgress);
  }
}

function stopFade() {
  if (fadeFrame) {
    window.cancelAnimationFrame(fadeFrame);
    fadeFrame = 0;
  }
}

function fadeInAudio(targetVolume, duration) {
  stopFade();

  const start = performance.now();
  const initial = audio.volume;

  function step(now) {
    const progress = Math.min((now - start) / duration, 1);
    audio.volume = initial + (targetVolume - initial) * progress;

    if (progress < 1) {
      fadeFrame = window.requestAnimationFrame(step);
      return;
    }

    fadeFrame = 0;
  }

  fadeFrame = window.requestAnimationFrame(step);
}

function setupMusic() {
  audio.src = musicFile;
  audio.preload = "metadata";
  audio.volume = 0.27;

  audio.addEventListener("error", () => {
    audio.removeAttribute("src");
  });

  musicButton.addEventListener("click", async () => {
    if (!audio.getAttribute("src")) {
      showToast("Музыка сейчас недоступна");
      return;
    }

    if (audio.paused) {
      try {
        audio.volume = 0;
        await audio.play();
        fadeInAudio(0.27, 700);
        musicButton.classList.add("is-playing");
        musicButton.setAttribute("aria-pressed", "true");
        musicButton.setAttribute("aria-label", "Пауза музыки");
        musicIcon.textContent = "❚❚";
      } catch (error) {
        showToast("Не удалось включить музыку");
      }
      return;
    }

    stopFade();
    audio.pause();
    audio.volume = 0.27;
    musicButton.classList.remove("is-playing");
    musicButton.setAttribute("aria-pressed", "false");
    musicButton.setAttribute("aria-label", "Включить музыку");
    musicIcon.textContent = "▶";
  });
}

function setupRsvp() {
  rsvpForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(rsvpForm);
    const guestName = String(formData.get("guestName") || "").trim();
    const attendance = String(formData.get("attendance") || "").trim();
    const comment = String(formData.get("comment") || "").trim();

    const messageLines = [
      "Здравствуйте! Отправляю ответ на свадебное приглашение.",
      `Имя: ${guestName}`,
      `Ответ: ${attendance}`
    ];

    if (comment) {
      messageLines.push(`Комментарий: ${comment}`);
    }

    const message = encodeURIComponent(messageLines.join("\n"));
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank", "noopener");
  });
}

updateCountdown();
window.setInterval(updateCountdown, 1000);
setupReveal();
setupMusic();
setupRsvp();
updateProgress();
window.addEventListener("scroll", onScroll, { passive: true });
window.addEventListener("resize", onScroll, { passive: true });
