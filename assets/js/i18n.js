<script>
// ===== Simple i18n for static sites (Trashmaghe.dev) =====
const I18N = {
  pt: {
    hero_hi: "👋 Olá, eu sou <span class='highlight'>Trashmaghe</span>",
    hero_role: "Developer & Tech Support",
    hero_desc: "Crio automações, dashboards e integrações que tornam processos mais rápidos, inteligentes e confiáveis.",
    btn_projects: "Ver Projetos",
    btn_github: "GitHub",
    btn_linkedin: "LinkedIn",
    skills_title: "🧠 Skills Principais",
    skill_python: "Python",
    skill_sqlite: "SQLite / SQL",
    skill_fastapi: "FastAPI",
    skill_linux: "Linux",
    skill_windows: "Windows",
    skill_github: "GitHub",
    skill_html: "HTML5",
    skill_css: "CSS3",
    footer_text: "© 2025 Trashmaghe.dev • Built with ❤️ using HTML, CSS & Python",

    // Projects page:
    projects_title: "💻 Projetos",
    projects_sub: "Uma coleção de projetos que unem automação, desenvolvimento e suporte técnico.",
    card1_title: "🧰 System Monitor & Auto Repair",
    card1_desc: "Ferramenta em Python que monitora CPU/RAM e reinicia processos automaticamente.",
    card2_title: "🖥️ Help Desk Manager",
    card2_desc: "Dashboard web para registrar, priorizar e resolver tickets de suporte técnico.",
    card3_title: "🔗 Integration API",
    card3_desc: "API FastAPI que conecta sistemas e automatiza o envio de dados.",
    btn_details: "Ver detalhes",
    btn_back: "← Voltar",

    // Project detail pages:
    p1_title: "🧰 System Monitor & Auto Repair",
    p1_desc: "Utilitário em Python que monitora CPU, RAM e processos críticos; reinicia serviços travados e registra logs.",
    p2_title: "🖥️ Help Desk Manager",
    p2_desc: "Mini-sistema web para CRUD de tickets: prioridade, status, responsável e dashboard de progresso.",
    p3_title: "🔗 Integration API (FastAPI)",
    p3_desc: "API que integra serviços externos (ex.: Asana/Clicksign), valida dados e retorna logs em JSON.",
    btn_code: "Ver Código no GitHub",
  },
  en: {
    hero_hi: "👋 Hi, I'm <span class='highlight'>Trashmaghe</span>",
    hero_role: "Developer & Tech Support",
    hero_desc: "I build automations, dashboards, and integrations that make workflows faster, smarter, and more reliable.",
    btn_projects: "View Projects",
    btn_github: "GitHub",
    btn_linkedin: "LinkedIn",
    skills_title: "🧠 Core Skills",
    skill_python: "Python",
    skill_sqlite: "SQLite / SQL",
    skill_fastapi: "FastAPI",
    skill_linux: "Linux",
    skill_windows: "Windows",
    skill_github: "GitHub",
    skill_html: "HTML5",
    skill_css: "CSS3",
    footer_text: "© 2025 Trashmaghe.dev • Built with ❤️ using HTML, CSS & Python",

    projects_title: "💻 Projects",
    projects_sub: "A collection of work combining automation, development, and technical support.",
    card1_title: "🧰 System Monitor & Auto Repair",
    card1_desc: "Python tool that monitors CPU/RAM and automatically restarts stuck processes.",
    card2_title: "🖥️ Help Desk Manager",
    card2_desc: "Web dashboard to create, prioritize, and resolve support tickets.",
    card3_title: "🔗 Integration API",
    card3_desc: "FastAPI service connecting systems and automating data exchange.",
    btn_details: "View details",
    btn_back: "← Back",

    p1_title: "🧰 System Monitor & Auto Repair",
    p1_desc: "Python utility that monitors CPU, RAM and critical processes; restarts services on failure and logs actions.",
    p2_title: "🖥️ Help Desk Manager",
    p2_desc: "Web mini-system for ticket CRUD: priority, status, assignee and a simple progress dashboard.",
    p3_title: "🔗 Integration API (FastAPI)",
    p3_desc: "API that integrates external services (e.g., Asana/Clicksign), validates data and returns JSON logs.",
    btn_code: "View Code on GitHub",
  }
};

// Read/Save preferred language
function getInitialLang() {
  const saved = localStorage.getItem("lang");
  if (saved) return saved;
  const browser = (navigator.language || "en").slice(0,2).toLowerCase();
  return browser === "pt" ? "pt" : "en";
}

function setLang(lang) {
  const dict = I18N[lang] || I18N.en;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (!key) return;
    const val = dict[key];
    if (val == null) return;
    // allow HTML (for <span class="highlight">)
    if (el.hasAttribute("data-i18n-html")) el.innerHTML = val;
    else el.textContent = val;
  });
  // attributes: e.g., placeholder/title via data-i18n-attr="placeholder"
  document.querySelectorAll("[data-i18n-attr]").forEach(el => {
    const attr = el.getAttribute("data-i18n-attr"); // "placeholder,title"
    attr.split(",").forEach(a => {
      const key = el.getAttribute(`data-i18n-${a}`);
      if (key && dict[key]) el.setAttribute(a.trim(), dict[key]);
    });
  });

  // toggle button active state
  document.querySelectorAll("[data-lang-btn]").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-lang-btn") === lang);
  });

  document.documentElement.setAttribute("lang", lang);
  localStorage.setItem("lang", lang);
}

document.addEventListener("DOMContentLoaded", () => {
  const lang = getInitialLang();
  setLang(lang);

  // attach click handlers
  document.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-lang-btn]");
    if (!btn) return;
    setLang(btn.getAttribute("data-lang-btn"));
  });
});
</script>

