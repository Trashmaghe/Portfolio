// Smooth scroll para links internos
document.addEventListener("click", (e) => {
  const a = e.target.closest('a[href^="#"]');
  if (!a) return;
  const id = a.getAttribute("href");
  const target = document.querySelector(id);
  if (!target) return;
  e.preventDefault();
  target.scrollIntoView({ behavior: "smooth", block: "start" });
});

// Intersection Observer para revelar seções
const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("reveal");
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".observe").forEach(el => io.observe(el));

// Modal do CV
const modal = document.getElementById("cv-modal");
function openCV() {
  modal?.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}
function closeCV() {
  modal?.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}
document.getElementById("open-cv")?.addEventListener("click", openCV);
document.getElementById("open-cv-2")?.addEventListener("click", openCV);
modal?.addEventListener("click", (e) => {
  if (e.target.hasAttribute("data-close")) closeCV();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeCV();
});
