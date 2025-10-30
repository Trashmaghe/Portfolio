// ===== Simple i18n for static sites (Trashmaghe.dev) =====
const I18N = {
  pt: {
    nav_projects: "Projetos",
    nav_about: "Sobre",
    nav_experience: "Experiência",
    nav_contact: "Contato",
    nav_cv: "CV",

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

    projects_title: "Projetos",
    projects_hint: "Veja os destaques abaixo ou a lista completa:",
    btn_open_projects: "Abrir página de projetos",

    about_title: "👤 Sobre mim",
    about_body:
      "Sou desenvolvedor com foco em automação e suporte técnico. Gosto de resolver problemas do mundo real: monitoramento, integrações e pequenas ferramentas que tornam o dia a dia mais eficiente. Trabalho com Python/FastAPI, banco de dados e boas práticas de troubleshooting (Windows e Linux).",

    exp_title: "🧰 Experiência",
    exp_1_when: "2024–2025",
    exp_1_role: "Tech Support • Automação",
    exp_1_desc: "Criação de scripts em Python para diagnóstico, monitoramento (CPU/RAM/processos) e automações de rotina.",
    exp_2_when: "2023–2024",
    exp_2_role: "Dev Freelance • Integrações",
    exp_2_desc: "Integrações REST (ex.: FastAPI) e pequenos dashboards para controle de fluxo e tickets.",

    contact_title: "📬 Contato",
    contact_body: "Aberto a oportunidades remotas (PT/EN). Pode chamar por e-mail ou LinkedIn:",
    btn_email: "Enviar e-mail",
    btn_cv: "Ver CV",

    cv_title: "Currículo (PDF)",
    cv_fallback: "Seu navegador não conseguiu abrir o PDF embutido. ",

    footer_text: "© 2025 Trashmaghe.dev • Built with ❤️ using HTML, CSS & Python",

    // projects.html / project detail fallback keys:
    projects_sub: "Uma coleção de projetos que unem automação, desenvolvimento e suporte técnico.",
    card1_title: "🧰 System Monitor & Auto Repair",
    card1_desc: "Ferramenta em Python que monitora CPU/RAM e reinicia processos automaticamente, gerando logs.",
    card2_title: "🖥️ Help Desk Manager",
    card2_desc: "Dashboard web para registrar, priorizar e resolver tickets de suporte técnico.",
    card3_title: "🔗 Integration API",
    card3_desc: "API FastAPI que conecta sistemas e automatiza o envio de dados.",
    btn_details: "Ver detalhes",
    btn_back: "← Voltar",
    p1_title: "🧰 System Monitor & Auto Repair",
    p1_desc: "Utilitário em Python que monitora CPU, RAM e processos críticos; reinicia serviços travados e registra logs.",
    p2_title: "🖥️ Help Desk Manager",
    p2_desc: "Mini-sistema web para CRUD de tickets: prioridade, status, responsável e dashboard de progresso.",
    p3_title: "🔗 Integration API (FastAPI)",
    p3_desc: "API que integra serviços externos (ex.: Asana/Clicksign), valida dados e retorna logs em JSON.",
    btn_code: "Ver Código no GitHub",
  },
  en: {
    nav_projects: "Projects",
    nav_about: "About",
    nav_experience: "Experience",
    nav_contact: "Contact",
    nav_cv: "CV",

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

    projects_title: "Projects",
    projects_hint: "See highlights below or the full list:",
    btn_open_projects: "Open projects page",

    about_title: "👤 About me",
    about_body:
      "I'm a developer focused on automation and technical support. I like solving real-world problems: monitoring, integrations and small tools that make daily work more efficient. I work with Python/FastAPI, databases and troubleshooting best practices (Windows & Linux).",

    exp_title: "🧰 Experience",
    exp_1_when: "2024–2025",
    exp_1_role: "Tech Support • Automation",
    exp_1_desc: "Python scripts for diagnostics, monitoring (CPU/RAM/processes) and routine automations.",
    exp_2_when: "2023–2024",
    exp_2_role: "Freelance Dev • Integrations",
    exp_2_desc: "REST integrations (e.g., FastAPI) and small dashboards to control flows and tickets.",

    contact_title: "📬 Contact",
    contact_body: "Open to remote opportunities (PT/EN). Reach me by e-mail or LinkedIn:",
    btn_email: "Send e-mail",
    btn_cv: "View CV",

    cv_title: "Resume (PDF)",
    cv_fallback: "Your browser could not display the embedded PDF. ",

    footer_text: "© 2025 Trashmaghe.dev • Built with ❤️ using HTML, CSS & Python",

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
    const val = dict[key];
    if (val == null) return;
    if (el.hasAttribute("data-i18n-html")) el.innerHTML = val;
    else el.textContent = val;
  });

  document.querySelectorAll("[data-i18n-attr]").forEach(el => {
    const attrList = el.getAttribute("data-i18n-attr");
    attrList.split(",").forEach(a => {
      const key = el.getAttribute(`data-i18n-${a}`);
      if (key && dict[key]) el.setAttribute(a.trim(), dict[key]);
    });
  });

  document.querySelectorAll("[data-lang-btn]").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-lang-btn") === lang);
  });

  document.documentElement.setAttribute("lang", lang);
  localStorage.setItem("lang", lang);
}

document.addEventListener("DOMContentLoaded", () => {
  const lang = getInitialLang();
  setLang(lang);

  document.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-lang-btn]");
    if (!btn) return;
    setLang(btn.getAttribute("data-lang-btn"));
  });
});
