const weddingDate = new Date(2026, 7, 25, 18, 0, 0);
const whatsappNumber = "77000000000";
const mapLink = "https://2gis.kz/astana";
const musicFile = "https://www.chosic.com/wp-content/uploads/2022/10/scott-buckley-moonlight(chosic.com).mp3";

const countdownValues = {
  days: document.querySelector('[data-unit="days"]'),
  hours: document.querySelector('[data-unit="hours"]'),
  minutes: document.querySelector('[data-unit="minutes"]'),
  seconds: document.querySelector('[data-unit="seconds"]')
};

const revealItems = document.querySelectorAll(".reveal");
const musicToggle = document.querySelector(".music-toggle");
const audio = document.getElementById("wedding-audio");
const rsvpForm = document.getElementById("rsvp-form");
const toast = document.getElementById("toast");
const progressBar = document.getElementById("scroll-progress");
const mapLinkElement = document.querySelector('#details .text-link');
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const musicIcon = document.querySelector(".music-toggle__icon");

let toastTimer = null;
let isTicking = false;
let musicFadeFrame = 0;

if (mapLinkElement) {
  mapLinkElement.href = mapLink;
}

function showToast(message) {
  clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("is-visible");

  toastTimer = window.setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 2400);
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

function setupRevealAnimation() {
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
      threshold: 0.18,
      rootMargin: "0px 0px -8% 0px"
    }
  );

  revealItems.forEach((item) => observer.observe(item));
}

function updateScrollProgress() {
  const scrollTop = window.scrollY;
  const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollableHeight > 0 ? Math.min(scrollTop / scrollableHeight, 1) : 0;
  progressBar.style.width = `${progress * 100}%`;
  isTicking = false;
}

function onScroll() {
  if (!isTicking) {
    window.requestAnimationFrame(updateScrollProgress);
    isTicking = true;
  }
}

function stopMusicFade() {
  if (musicFadeFrame) {
    window.cancelAnimationFrame(musicFadeFrame);
    musicFadeFrame = 0;
  }
}

function fadeInMusic(targetVolume, duration) {
  stopMusicFade();

  const startVolume = audio.volume;
  const startTime = performance.now();

  function step(now) {
    const progress = Math.min((now - startTime) / duration, 1);
    audio.volume = startVolume + (targetVolume - startVolume) * progress;

    if (progress < 1) {
      musicFadeFrame = window.requestAnimationFrame(step);
      return;
    }

    musicFadeFrame = 0;
  }

  musicFadeFrame = window.requestAnimationFrame(step);
}

function setupMusic() {
  audio.src = musicFile;
  audio.preload = "metadata";
  audio.volume = 0.28;

  audio.addEventListener("error", () => {
    audio.removeAttribute("src");
  });

  audio.addEventListener("ended", () => {
    musicToggle.classList.remove("is-playing");
    musicToggle.setAttribute("aria-pressed", "false");
    musicToggle.setAttribute("aria-label", "Включить музыку");
    musicIcon.textContent = "▶";
  });

  musicToggle.addEventListener("click", async () => {
    if (!audio.getAttribute("src")) {
      showToast("Музыкальный файл пока недоступен");
      return;
    }

    if (audio.paused) {
      try {
        audio.volume = 0;
        await audio.play();
        fadeInMusic(0.28, 800);
        musicToggle.classList.add("is-playing");
        musicToggle.setAttribute("aria-pressed", "true");
        musicToggle.setAttribute("aria-label", "Пауза музыки");
        musicIcon.textContent = "❚❚";
      } catch (error) {
        showToast("Не удалось включить музыку");
      }
      return;
    }

    stopMusicFade();
    audio.pause();
    audio.volume = 0.28;
    musicToggle.classList.remove("is-playing");
    musicToggle.setAttribute("aria-pressed", "false");
    musicToggle.setAttribute("aria-label", "Включить музыку");
    musicIcon.textContent = "▶";
  });
}

function setupRsvpForm() {
  rsvpForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(rsvpForm);
    const guestName = (formData.get("guestName") || "").toString().trim();
    const attendance = (formData.get("attendance") || "").toString().trim();
    const comment = (formData.get("comment") || "").toString().trim();

    const messageParts = [
      "Здравствуйте! Отправляю ответ на свадебное приглашение.",
      `Имя: ${guestName}`,
      `Ответ: ${attendance}`
    ];

    if (comment) {
      messageParts.push(`Комментарий: ${comment}`);
    }

    const message = encodeURIComponent(messageParts.join("\n"));
    const url = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(url, "_blank", "noopener");
  });
}

updateCountdown();
window.setInterval(updateCountdown, 1000);
setupRevealAnimation();
setupMusic();
setupRsvpForm();
updateScrollProgress();
window.addEventListener("scroll", onScroll, { passive: true });
window.addEventListener("resize", onScroll, { passive: true });
