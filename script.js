const weddingDate = new Date("2026-08-25T18:00:00+05:00");
const whatsappNumber = "77000000000";
const mapLink = "https://2gis.kz/astana";
const musicFile = "./assets/music.mp3";

const countdownValues = {
  days: document.querySelector('[data-unit="days"]'),
  hours: document.querySelector('[data-unit="hours"]'),
  minutes: document.querySelector('[data-unit="minutes"]'),
  seconds: document.querySelector('[data-unit="seconds"]')
};

const revealItems = document.querySelectorAll(".reveal");
const parallaxItems = document.querySelectorAll("[data-parallax]");
const musicToggle = document.querySelector(".music-toggle");
const audio = document.getElementById("wedding-audio");
const rsvpForm = document.getElementById("rsvp-form");
const toast = document.getElementById("toast");
const mapLinkElement = document.querySelector('#details .text-link');

let toastTimer = null;
let ticking = false;

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
  const now = new Date();
  const diff = weddingDate.getTime() - now.getTime();

  if (diff <= 0) {
    Object.values(countdownValues).forEach((item) => {
      item.textContent = "0";
    });
    return;
  }

  const seconds = Math.floor(diff / 1000);
  const days = Math.floor(seconds / (60 * 60 * 24));
  const hours = Math.floor((seconds % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((seconds % (60 * 60)) / 60);
  const secs = seconds % 60;

  countdownValues.days.textContent = String(days);
  countdownValues.hours.textContent = String(hours).padStart(2, "0");
  countdownValues.minutes.textContent = String(minutes).padStart(2, "0");
  countdownValues.seconds.textContent = String(secs).padStart(2, "0");
}

function setupRevealAnimation() {
  if (!("IntersectionObserver" in window)) {
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

function applyParallax() {
  const offset = window.scrollY;

  parallaxItems.forEach((item) => {
    const speed = Number(item.dataset.parallax) || 0;
    item.style.transform = `translate3d(0, ${offset * speed}px, 0)`;
  });

  ticking = false;
}

function onScroll() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  if (!ticking) {
    window.requestAnimationFrame(applyParallax);
    ticking = true;
  }
}

function setupMusic() {
  audio.src = musicFile;

  musicToggle.addEventListener("click", async () => {
    if (!audio.getAttribute("src")) {
      showToast("Добавьте файл assets/music.mp3 для фоновой музыки");
      return;
    }

    if (audio.paused) {
      try {
        await audio.play();
        musicToggle.classList.add("is-playing");
        musicToggle.setAttribute("aria-pressed", "true");
        musicToggle.setAttribute("aria-label", "Пауза музыки");
      } catch (error) {
        showToast("Не удалось включить музыку. Проверьте файл assets/music.mp3");
      }
      return;
    }

    audio.pause();
    musicToggle.classList.remove("is-playing");
    musicToggle.setAttribute("aria-pressed", "false");
    musicToggle.setAttribute("aria-label", "Включить музыку");
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
      "Здравствуйте! Подтверждаю ответ на свадебное приглашение.",
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
window.addEventListener("scroll", onScroll, { passive: true });
window.addEventListener("load", applyParallax);
