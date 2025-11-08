// ---- TYPEWRITER HERO SUBTITLE ----
document.addEventListener("DOMContentLoaded", () => {
  const typedElement = document.querySelector(".typed-text");
  const text =
    "Artificial Intelligence & Data Science Engineering Student at Centrale.";
  let index = 0;

  function typeLetter() {
    if (!typedElement) return;
    if (index <= text.length) {
      typedElement.textContent = text.slice(0, index);
      index++;
      setTimeout(typeLetter, 40);
    }
  }

  typeLetter();
});

// ---- SMOOTH SCROLL & ACTIVE NAV ----
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("main .section");

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    const href = link.getAttribute("href") || "";
    if (href.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: "smooth",
        });
      }
    }
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        navLinks.forEach((link) => {
          const section = link.dataset.section;
          if (section === id) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        });
      }
    });
  },
  { threshold: 0.45 }
);

sections.forEach((section) => observer.observe(section));
