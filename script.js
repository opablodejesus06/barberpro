"use strict";

/* ========================================
   BARBERPRO
   ======================================== */

const DEFAULT_CONFIG = {
  name: "BARBERPRO",
  whatsapp: "",
  address: "",
  logo: ""
};

const DEFAULT_SERVICES = [
  {
    id: "corte",
    name: "Corte de cabelo",
    description: "Corte na máquina ou tesoura",
    price: 40,
    duration: 30,
    icon: "✂"
  },
  {
    id: "degrade",
    name: "Corte degradê / Fade",
    description: "Degradê baixo, médio ou alto",
    price: 45,
    duration: 40,
    icon: "✂"
  },
  {
    id: "tesoura",
    name: "Corte na tesoura",
    description: "Corte detalhado na tesoura",
    price: 50,
    duration: 45,
    icon: "✂"
  },
  {
    id: "social",
    name: "Corte social",
    description: "Corte clássico e alinhado",
    price: 40,
    duration: 30,
    icon: "✂"
  },
  {
    id: "militar",
    name: "Corte militar",
    description: "Corte curto tradicional",
    price: 35,
    duration: 25,
    icon: "✂"
  },
  {
    id: "infantil",
    name: "Corte infantil",
    description: "Corte para crianças",
    price: 35,
    duration: 30,
    icon: "✂"
  },
  {
    id: "pezinho",
    name: "Pezinho / acabamento",
    description: "Contorno e acabamento do corte",
    price: 15,
    duration: 15,
    icon: "✦"
  },
  {
    id: "barba",
    name: "Barba completa",
    description: "Modelagem e acabamento da barba",
    price: 25,
    duration: 30,
    icon: "▤"
  },
  {
    id: "barba-toalha",
    name: "Barba com toalha quente",
    description: "Barba com toalha quente e acabamento",
    price: 35,
    duration: 40,
    icon: "▤"
  },
  {
    id: "barba-maquina",
    name: "Barba na máquina",
    description: "Aparar e alinhar a barba",
    price: 20,
    duration: 20,
    icon: "▤"
  },
  {
    id: "bigode",
    name: "Bigode",
    description: "Aparar e alinhar o bigode",
    price: 10,
    duration: 10,
    icon: "✦"
  },
  {
    id: "pigmentacao-capilar",
    name: "Pigmentação capilar",
    description: "Realce visual e definição do corte",
    price: 30,
    duration: 25,
    icon: "◉"
  },
  {
    id: "pigmentacao-barba",
    name: "Pigmentação de barba",
    description: "Realce da cor e contorno da barba",
    price: 25,
    duration: 25,
    icon: "◉"
  },
  {
    id: "disfarce-branco",
    name: "Disfarce de fios brancos",
    description: "Camuflagem de fios brancos",
    price: 45,
    duration: 30,
    icon: "◈"
  },
  {
    id: "sobrancelha",
    name: "Sobrancelha",
    description: "Design e acabamento masculino",
    price: 15,
    duration: 15,
    icon: "◉"
  },
  {
    id: "depilacao-nariz-orelha",
    name: "Depilação de nariz e orelha",
    description: "Remoção de pelos aparentes",
    price: 15,
    duration: 15,
    icon: "✦"
  },
  {
    id: "depilacao-facial",
    name: "Depilação facial",
    description: "Remoção de pelos faciais",
    price: 25,
    duration: 20,
    icon: "✦"
  },
  {
    id: "lavagem",
    name: "Lavagem capilar",
    description: "Lavagem e finalização dos fios",
    price: 15,
    duration: 15,
    icon: "♨"
  },
  {
    id: "hidratacao",
    name: "Hidratação capilar",
    description: "Tratamento hidratante para os fios",
    price: 35,
    duration: 30,
    icon: "♧"
  },
  {
    id: "reconstrucao",
    name: "Reconstrução capilar",
    description: "Tratamento de reconstrução dos fios",
    price: 50,
    duration: 40,
    icon: "♧"
  },
  {
    id: "relaxamento",
    name: "Relaxamento capilar",
    description: "Tratamento para controle dos fios",
    price: 60,
    duration: 45,
    icon: "〰"
  },
  {
    id: "progressiva",
    name: "Progressiva masculina",
    description: "Redução de volume e alinhamento",
    price: 100,
    duration: 90,
    icon: "〰"
  },
  {
    id: "coloracao",
    name: "Coloração capilar",
    description: "Aplicação de cor nos cabelos",
    price: 80,
    duration: 60,
    icon: "◈"
  },
  {
    id: "luzes",
    name: "Luzes / mechas",
    description: "Iluminação e mechas nos fios",
    price: 100,
    duration: 90,
    icon: "✧"
  },
  {
    id: "platinado",
    name: "Platinado / descoloração",
    description: "Descoloração e tonalização",
    price: 150,
    duration: 120,
    icon: "✧"
  },
  {
    id: "limpeza-facial",
    name: "Limpeza facial",
    description: "Limpeza e cuidado básico da pele",
    price: 40,
    duration: 30,
    icon: "✧"
  },
  {
    id: "completo",
    name: "Corte + barba",
    description: "Corte de cabelo e barba completa",
    price: 60,
    duration: 60,
    icon: "✂"
  },
  {
    id: "corte-sobrancelha",
    name: "Corte + sobrancelha",
    description: "Corte com design de sobrancelha",
    price: 50,
    duration: 45,
    icon: "✂"
  },
  {
    id: "combo-premium",
    name: "Combo premium",
    description: "Cabelo, barba e sobrancelha",
    price: 75,
    duration: 75,
    icon: "★"
  },
  {
    id: "combo-completo",
    name: "Combo completo",
    description: "Cabelo, barba, sobrancelha e lavagem",
    price: 90,
    duration: 90,
    icon: "★"
  }
];

const OPEN_HOUR = 9;
const CLOSE_HOUR = 19;
const SLOT_INTERVAL = 15;
const DAYS_OFF = [0];
const MAX_DAYS_AHEAD = 60;

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

/* ARMAZENAMENTO */

function readStorage(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}

function writeStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch {
    return false;
  }
}

let config = {
  ...DEFAULT_CONFIG,
  ...readStorage("barberpro_config", {})
};

let services = readStorage(
  "barberpro_services",
  DEFAULT_SERVICES
);

if (!Array.isArray(services) || !services.length) {
  services = DEFAULT_SERVICES;
}

let currentStep = 1;
let selectedServiceCategory = "Cabelo";

let booking = {
  service: null,
  date: "",
  time: "",
  customer: {
    name: "",
    phone: "",
    notes: ""
  }
};

/* FUNÇÕES UTILITÁRIAS */

function money(value) {
  return Number(value || 0).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
}

function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[char]);
}

function localDateString(date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

function formatDate(value) {
  if (!value) return "Não selecionada";

  const [year, month, day] = value.split("-").map(Number);

  return new Date(year, month - 1, day).toLocaleDateString(
    "pt-BR",
    {
      weekday: "long",
      day: "2-digit",
      month: "long",
      year: "numeric"
    }
  );
}

function formatTime(minutes) {
  return `${String(Math.floor(minutes / 60)).padStart(2, "0")}:${String(minutes % 60).padStart(2, "0")}`;
}

function showError(message) {
  const element = $("#bookingError");
  if (!element) return;

  element.textContent = message;
  element.classList.add("visible");
}

function clearError() {
  const element = $("#bookingError");
  if (!element) return;

  element.textContent = "";
  element.classList.remove("visible");
}
/* PERSONALIZAÇÃO DA BARBEARIA */

function applyConfig() {
  const name = config.name || DEFAULT_CONFIG.name;

  document.title = `${name} | Agendamento`;

  if ($("#brandName")) {
    $("#brandName").textContent = name;
  }

  if ($("#footerBrandName")) {
    $("#footerBrandName").innerHTML =
      `${escapeHTML(name)}<span>PRO</span>`;
  }

  if ($("#footerCopyrightName")) {
    $("#footerCopyrightName").textContent = name;
  }

  if ($("#footerYear")) {
    $("#footerYear").textContent = new Date().getFullYear();
  }

  if ($("#footerAddress")) {
    $("#footerAddress").textContent = config.address
      ? `Endereço: ${config.address}`
      : "";
  }

  const logo = config.logo || "assets/logoexemplo.png";

  const headerLogo = $(".logo-placeholder");

  if (headerLogo) {
    headerLogo.innerHTML = `
      <img src="${escapeHTML(logo)}"
           alt="Logo da barbearia"
           onerror="this.style.display='none'">
    `;
  }

  const footerLogo = $(".footer-logo-box");

  if (footerLogo) {
    footerLogo.innerHTML = `
      <img src="${escapeHTML(logo)}"
           alt="Logo da barbearia"
           onerror="this.style.display='none'">
    `;
  }
}

function openSettings() {
  $("#settingName").value =
    config.name === DEFAULT_CONFIG.name ? "" : config.name;

  $("#settingWhatsApp").value = config.whatsapp || "";
  $("#settingAddress").value = config.address || "";
  $("#settingLogo").value = "";

  $("#settingsModal").classList.add("open");
  $("#settingsModal").setAttribute("aria-hidden", "false");
}

function closeSettings() {
  $("#settingsModal").classList.remove("open");
  $("#settingsModal").setAttribute("aria-hidden", "true");
}

$("#openSettings")?.addEventListener("click", openSettings);
$("#closeSettings")?.addEventListener("click", closeSettings);

$("#settingsModal")?.addEventListener("click", (event) => {
  if (event.target === $("#settingsModal")) {
    closeSettings();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeSettings();
});

$("#settingsForm")?.addEventListener("submit", async (event) => {
  event.preventDefault();

  const name = $("#settingName").value.trim();
  const whatsapp = $("#settingWhatsApp").value.replace(/\D/g, "");
  const address = $("#settingAddress").value.trim();
  const file = $("#settingLogo").files[0];

  if (whatsapp && (whatsapp.length < 10 || whatsapp.length > 15)) {
    alert("Confira o WhatsApp com DDD e código do país.");
    return;
  }

  let logo = config.logo || "";

  if (file) {
    if (!file.type.startsWith("image/")) {
      alert("Selecione uma imagem válida.");
      return;
    }

    if (file.size > 1024 * 1024) {
      alert("A logo deve ter no máximo 1 MB.");
      return;
    }

    try {
      logo = await new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
    } catch {
      alert("Não foi possível carregar a logo.");
      return;
    }
  }

  const previousConfig = config;

  config = {
    name: name || DEFAULT_CONFIG.name,
    whatsapp,
    address,
    logo
  };

  if (!writeStorage("barberpro_config", config)) {
    config = previousConfig;
    alert("Não foi possível salvar as configurações.");
    return;
  }

  applyConfig();
  closeSettings();
});

/* CATEGORIAS E SERVIÇOS */

function getServiceCategory(service) {
  const id = String(service.id || "").toLowerCase();
  const name = String(service.name || "").toLowerCase();

  if (
    id.includes("combo") ||
    id === "completo" ||
    name.includes("combo") ||
    name.includes(" + ")
  ) {
    return "Combos";
  }

  if (
    id.includes("pigment") ||
    id.includes("disfarce") ||
    name.includes("pigment") ||
    name.includes("fios brancos")
  ) {
    return "Pigmentação";
  }

  if (
    id.includes("barba") ||
    id.includes("bigode") ||
    name.includes("barba") ||
    name.includes("bigode")
  ) {
    return "Barba";
  }

  if (
    id.includes("sobrancelha") ||
    id.includes("depil") ||
    id.includes("pezinho") ||
    name.includes("sobrancelha") ||
    name.includes("depil") ||
    name.includes("pezinho") ||
    name.includes("acabamento")
  ) {
    return "Acabamento";
  }

  const treatmentIds = [
    "lavagem",
    "hidrat",
    "reconstr",
    "relax",
    "progressiva",
    "color",
    "luzes",
    "platinado",
    "limpeza-facial"
  ];

  const treatmentNames = [
    "lavagem",
    "hidratação",
    "reconstrução",
    "relaxamento",
    "progressiva",
    "coloração",
    "luzes",
    "platinado",
    "limpeza facial"
  ];

  if (
    treatmentIds.some((item) => id.includes(item)) ||
    treatmentNames.some((item) => name.includes(item))
  ) {
    return "Tratamentos";
  }

  return "Cabelo";
}

function renderShowcase() {
  const container = $("#serviceShowcase");
  if (!container) return;

  const featuredServices = services.slice(0, 6);

  container.innerHTML = featuredServices.map((service) => `
    <article class="showcase-card">
      <div class="showcase-image" aria-hidden="true">
        ${escapeHTML(service.icon || "✂")}
      </div>

      <div class="showcase-content">
        <h3>${escapeHTML(service.name)}</h3>
        <p>${escapeHTML(service.description || "")}</p>

        <div class="showcase-bottom">
          <span class="showcase-price">
            ${money(service.price)}
          </span>

          <button
            type="button"
            data-choose-service="${escapeHTML(service.id)}">
            AGENDAR ↗
          </button>
        </div>
      </div>
    </article>
  `).join("");
}

function renderServiceOptions() {
  const container = $("#serviceOptions");
  if (!container) return;

    const categories = [
    "Cabelo",
    "Barba",
    "Pigmentação",
    "Acabamento",
    "Tratamentos",
    "Combos",
    "Todos"
    ];

  const visibleServices =
    selectedServiceCategory === "Todos"
      ? services
      : services.filter(
          (service) =>
            getServiceCategory(service) === selectedServiceCategory
        );

  container.innerHTML = `
    <div class="service-category-nav"
         role="group"
         aria-label="Filtrar serviços">

      ${categories.map((category) => `
        <button
          type="button"
          class="service-category-button ${
            selectedServiceCategory === category ? "active" : ""
          }"
          data-service-category="${escapeHTML(category)}"
          aria-pressed="${selectedServiceCategory === category}">
          ${escapeHTML(category)}
        </button>
      `).join("")}
    </div>

    <div class="service-category-caption">
      ${escapeHTML(selectedServiceCategory)}
      · ${visibleServices.length} serviços
    </div>

    <div class="service-options-list">
      ${
        visibleServices.length
          ? visibleServices.map((service) => {
              const selected =
                booking.service?.id === service.id;

              return `
                <button
                  type="button"
                  class="option-card ${selected ? "selected" : ""}"
                  data-service="${escapeHTML(service.id)}"
                  aria-pressed="${selected}">

                  <span class="option-icon" aria-hidden="true">
                    ${escapeHTML(service.icon || "✂")}
                  </span>

                  <span class="option-info">
                    <strong>${escapeHTML(service.name)}</strong>
                    <small>
                      ${escapeHTML(service.description || "")}
                      · ${Number(service.duration) || 0} min
                    </small>
                  </span>

                  <span class="option-price">
                    ${money(service.price)}
                  </span>

                  <span class="option-check">
                    ${selected ? "✓" : ""}
                  </span>
                </button>
              `;
            }).join("")
          : `<p class="service-category-empty">
               Nenhum serviço nesta categoria.
             </p>`
      }
    </div>
  `;
}

function chooseService(id) {
  const service = services.find((item) => item.id === id);
  if (!service) return;

  if (booking.service?.id !== id) {
    booking.time = "";
  }

  booking.service = service;

  renderServiceOptions();
  renderTimeOptions();
  updateSummary();
  clearError();
}

$("#serviceOptions")?.addEventListener("click", (event) => {
  const category = event.target.closest("[data-service-category]");

  if (category) {
    selectedServiceCategory = category.dataset.serviceCategory;
    renderServiceOptions();
    return;
  }

  const button = event.target.closest("[data-service]");

  if (button) {
    chooseService(button.dataset.service);
  }
});

$("#serviceShowcase")?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-choose-service]");
  if (!button) return;

  chooseService(button.dataset.chooseService);

  $("#agendamento")?.scrollIntoView({
    behavior: "smooth"
  });
});
/* REMOVER A ETAPA DE PROFISSIONAL */

function normalizeSteps() {
  const barberPanel = $('.step-panel[data-step="2"]');
  if (barberPanel) barberPanel.remove();

  const barberProgress = $('.progress-step[data-progress="2"]');
  if (barberProgress) barberProgress.remove();

  const panels = $$(".step-panel");

  panels.forEach((panel, index) => {
    panel.dataset.step = String(index + 1);
  });

  const progress = $$(".progress-step");

  progress.forEach((item, index) => {
    item.dataset.progress = String(index + 1);

    const label = item.querySelector("small");

    if (label) {
      label.textContent = [
        "Serviço",
        "Data",
        "Horário",
        "Dados"
      ][index] || "";
    }
  });

  const progressTrack = $("#progressTrack");

  if (progressTrack) {
    progressTrack.style.gridTemplateColumns =
      "repeat(4, minmax(0, 1fr))";
  }
}

/* DATAS */

function initializeDatePicker() {
  const input = $("#bookingDate");
  if (!input) return;

  const today = new Date();
  input.min = localDateString(today);

  const maxDate = new Date(today);
  maxDate.setDate(maxDate.getDate() + MAX_DAYS_AHEAD);

  input.max = localDateString(maxDate);
}

function isDateAvailable(value) {
  if (!value) return false;

  const [year, month, day] = value.split("-").map(Number);
  const date = new Date(year, month - 1, day);

  if (
    date.getFullYear() !== year ||
    date.getMonth() !== month - 1 ||
    date.getDate() !== day
  ) {
    return false;
  }

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const maxDate = new Date(today);
  maxDate.setDate(maxDate.getDate() + MAX_DAYS_AHEAD);

  return (
    date >= today &&
    date <= maxDate &&
    !DAYS_OFF.includes(date.getDay())
  );
}

$("#bookingDate")?.addEventListener("change", () => {
  booking.date = $("#bookingDate").value;
  booking.time = "";

  const hint = $("#dateHint");

  if (hint) {
    if (!booking.date) {
      hint.textContent = "Escolha uma data para continuar.";
    } else if (!isDateAvailable(booking.date)) {
      hint.textContent =
        "Essa data não está disponível. Escolha outro dia.";
    } else {
      hint.textContent =
        `Data selecionada: ${formatDate(booking.date)}.`;
    }
  }

  renderTimeOptions();
  updateSummary();
  clearError();
});

/* HORÁRIOS, SEM PROFISSIONAL */

function getBookedTimes() {
  return readStorage("barberpro_bookings", []);
}

function renderTimeOptions() {
  const container = $("#timeOptions");
  if (!container) return;

  if (!booking.date || !isDateAvailable(booking.date)) {
    container.innerHTML = `
      <p class="service-category-empty">
        Selecione uma data disponível para ver os horários.
      </p>
    `;
    return;
  }

  const now = new Date();
  const today = localDateString(now);
  const bookings = getBookedTimes();
  const availableSlots = [];

  for (
    let minutes = OPEN_HOUR * 60;
    minutes < CLOSE_HOUR * 60;
    minutes += SLOT_INTERVAL
  ) {
    const time = formatTime(minutes);

    if (
      booking.date === today &&
      minutes <= now.getHours() * 60 + now.getMinutes()
    ) {
      continue;
    }

    const occupied = bookings.some((item) => {
      return (
        item.status !== "cancelado" &&
        item.date === booking.date &&
        item.time === time
      );
    });

    if (!occupied) {
      availableSlots.push(time);
    }
  }

  if (!availableSlots.length) {
    container.innerHTML = `
      <p class="service-category-empty">
        Não há horários disponíveis nesta data.
        Escolha outro dia.
      </p>
    `;
    return;
  }

  container.innerHTML = availableSlots.map((time) => `
    <button
      type="button"
      class="time-slot ${booking.time === time ? "selected" : ""}"
      data-time="${time}"
      aria-pressed="${booking.time === time}">
      ${time}
    </button>
  `).join("");
}

$("#timeOptions")?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-time]");
  if (!button) return;

  booking.time = button.dataset.time;

  renderTimeOptions();
  updateSummary();
  clearError();
});

/* RESUMO */

function updateSummary() {
  const details = $("#summaryDetails");
  const empty = $("#summaryEmpty");
  const price = $("#summaryPrice");

  if (!details || !empty || !price) return;

  const items = [];

  if (booking.service) {
    items.push(["Serviço", booking.service.name]);
  }

  if (booking.date) {
    items.push(["Data", formatDate(booking.date)]);
  }

  if (booking.time) {
    items.push(["Horário", booking.time]);
  }

  empty.style.display = items.length ? "none" : "block";

  details.innerHTML = items.map(([label, value]) => `
    <div class="summary-row">
      <span>${escapeHTML(label)}</span>
      <strong>${escapeHTML(value)}</strong>
    </div>
  `).join("");

  price.textContent = booking.service
    ? money(booking.service.price)
    : money(0);
}

/* NAVEGAÇÃO DAS ETAPAS */

function showStep(step) {
  currentStep = step;

  $$(".step-panel").forEach((panel) => {
    panel.classList.toggle(
      "active",
      Number(panel.dataset.step) === step
    );
  });

  $$(".progress-step").forEach((item) => {
    const number = Number(item.dataset.progress);

    item.classList.toggle("active", number === step);
    item.classList.toggle("completed", number < step);
  });

  const actions = $("#bookingActions");

  if (actions) {
    actions.style.display = step === 5 ? "none" : "flex";
  }

  if ($("#backStep")) {
    $("#backStep").disabled = step === 1;
  }

  if ($("#nextStep")) {
    $("#nextStep").style.display =
      step >= 4 ? "none" : "inline-flex";
  }

  clearError();
}

function validateCurrentStep() {
  if (currentStep === 1 && !booking.service) {
    showError("Selecione um serviço para continuar.");
    return false;
  }

  if (currentStep === 2 && !isDateAvailable(booking.date)) {
    showError("Selecione uma data disponível.");
    return false;
  }

  if (currentStep === 3 && !booking.time) {
    showError("Selecione um horário disponível.");
    return false;
  }

  return true;
}

$("#nextStep")?.addEventListener("click", () => {
  if (!validateCurrentStep()) return;

  showStep(Math.min(currentStep + 1, 4));
});

$("#backStep")?.addEventListener("click", () => {
  if (currentStep > 1) {
    showStep(currentStep - 1);
  }
});
/* DADOS DO CLIENTE */

$("#customerPhone")?.addEventListener("input", (event) => {
  let digits = event.target.value.replace(/\D/g, "").slice(0, 11);

  if (digits.length > 10) {
    digits = digits.replace(
      /^(\d{2})(\d{5})(\d{4})$/,
      "($1) $2-$3"
    );
  } else if (digits.length > 6) {
    digits = digits.replace(
      /^(\d{2})(\d{4})(\d{0,4})$/,
      "($1) $2-$3"
    );
  } else if (digits.length > 2) {
    digits = digits.replace(
      /^(\d{2})(\d+)$/,
      "($1) $2"
    );
  }

  event.target.value = digits;
});

function validateCustomer() {
  const name = $("#customerName").value.trim();
  const phone = $("#customerPhone").value.replace(/\D/g, "");
  const notes = $("#customerNotes").value.trim();

  if (name.length < 3) {
    showError("Digite seu nome completo.");
    $("#customerName").focus();
    return false;
  }

  if (phone.length < 10 || phone.length > 11) {
    showError("Digite um WhatsApp válido com DDD.");
    $("#customerPhone").focus();
    return false;
  }

  if (!$("#privacyConsent").checked) {
    showError("Aceite o uso dos dados para continuar.");
    $("#privacyConsent").focus();
    return false;
  }

  booking.customer = { name, phone, notes };
  return true;
}

function initializeCustomerButton() {
  const form = $("#customerForm");
  if (!form || $("#finishCustomerStep")) return;

  const button = document.createElement("button");

  button.type = "submit";
  button.id = "finishCustomerStep";
  button.className = "primary-button full-button";
  button.textContent = "REVISAR AGENDAMENTO →";

  form.appendChild(button);
}

$("#customerForm")?.addEventListener("submit", (event) => {
  event.preventDefault();
  clearError();

  if (!validateCustomer()) return;

  if (
    !booking.service ||
    !isDateAvailable(booking.date) ||
    !booking.time
  ) {
    showError("Confira o serviço, a data e o horário.");
    return;
  }

  renderFinalSummary();
  showStep(5);
});

/* RESUMO FINAL */

function renderFinalSummary() {
  const container = $("#finalSummary");
  if (!container) return;

  const rows = [
    ["Cliente", booking.customer.name],
    ["WhatsApp", booking.customer.phone],
    ["Serviço", booking.service?.name || ""],
    ["Data", formatDate(booking.date)],
    ["Horário", booking.time],
    ["Duração", `${Number(booking.service?.duration || 0)} minutos`],
    ["Valor", money(booking.service?.price || 0)]
  ];

  container.innerHTML = rows.map(([label, value]) => `
    <div class="summary-row">
      <span>${escapeHTML(label)}</span>
      <strong>${escapeHTML(value)}</strong>
    </div>
  `).join("");
}

/* MENSAGEM PARA WHATSAPP */

function buildWhatsAppMessage() {
  return [
    `*NOVO AGENDAMENTO - ${config.name || "BARBERPRO"}*`,
    "",
    "*DADOS DO CLIENTE*",
    `Nome: ${booking.customer.name}`,
    `WhatsApp: ${booking.customer.phone}`,
    "",
    "*DETALHES DO AGENDAMENTO*",
    `Serviço: ${booking.service.name}`,
    `Data: ${formatDate(booking.date)}`,
    `Horário: ${booking.time}`,
    `Duração: ${booking.service.duration} minutos`,
    `Valor: ${money(booking.service.price)}`,
    "",
    `Observações: ${booking.customer.notes || "Nenhuma"}`,
    "",
    "Gostaria de confirmar a disponibilidade deste horário."
  ].join("\n");
}

/* SOLICITAR AGENDAMENTO */

$("#confirmBooking")?.addEventListener("click", () => {
  if (
    !booking.service ||
    !isDateAvailable(booking.date) ||
    !booking.time ||
    !booking.customer.name ||
    !booking.customer.phone
  ) {
    alert("Confira os dados do agendamento.");
    return;
  }

  const whatsapp = String(config.whatsapp || "").replace(/\D/g, "");

  if (!whatsapp) {
    alert(
      "Configure o WhatsApp da barbearia em Personalizar."
    );
    return;
  }

  const url =
    `https://wa.me/${whatsapp}?text=${encodeURIComponent(buildWhatsAppMessage())}`;

  window.open(url, "_blank", "noopener,noreferrer");
});

/* INICIALIZAÇÃO */

function initializeApp() {
  normalizeSteps();
  applyConfig();
  renderShowcase();
  renderServiceOptions();
  initializeDatePicker();
  renderTimeOptions();
  initializeCustomerButton();
  updateSummary();
  showStep(1);

  console.log(
    "BarberPro inicializado sem etapa de profissional."
  );
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeApp);
} else {
  initializeApp();
} 