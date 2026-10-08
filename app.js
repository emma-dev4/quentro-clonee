const TICKETS = [
  {
    id: "laplata-oct-24",
    title: "BTS WORLD TOUR ARIRANG",
    qty: 2,
    when: "sábado 24 20:00hs",
    venue: "Estadio Único de La Plata",
    city: "La Plata, Argentina",
    month: "Octubre 2026",
    image: "posters/argentina-arirang.jpg",
    thumb: "posters/argentina-arirang-thumb.jpg",
    dateLabel: "Sáb, 24 oct 2026",
    timeLabel: "20:00",
    section: "Cabecera Norte",
    row: "19",
    seat: "Asientos consecutivos 37",
    doors: "16:00 hs",
    gate: "Puerta Norte",
    passes: [
      { sector: "Cabecera Norte", section: "CN", row: "19", seat: "37" },
      { sector: "Cabecera Norte", section: "CN", row: "19", seat: "38" },
    ],
  },
];

const QR = `
<svg viewBox="0 0 120 120" aria-label="Código QR">
  <rect width="120" height="120" fill="#fff"/>
  <g fill="#111">
    <rect x="4" y="4" width="36" height="36"/>
    <rect x="10" y="10" width="24" height="24" fill="#fff"/>
    <rect x="16" y="16" width="12" height="12"/>
    <rect x="80" y="4" width="36" height="36"/>
    <rect x="86" y="10" width="24" height="24" fill="#fff"/>
    <rect x="92" y="16" width="12" height="12"/>
    <rect x="4" y="80" width="36" height="36"/>
    <rect x="10" y="86" width="24" height="24" fill="#fff"/>
    <rect x="16" y="92" width="12" height="12"/>
    <rect x="48" y="8" width="8" height="8"/>
    <rect x="60" y="8" width="8" height="16"/>
    <rect x="48" y="24" width="16" height="8"/>
    <rect x="48" y="40" width="8" height="8"/>
    <rect x="60" y="40" width="8" height="8"/>
    <rect x="72" y="40" width="8" height="8"/>
    <rect x="84" y="48" width="12" height="8"/>
    <rect x="100" y="44" width="8" height="12"/>
    <rect x="44" y="52" width="12" height="12"/>
    <rect x="64" y="56" width="8" height="16"/>
    <rect x="80" y="60" width="16" height="8"/>
    <rect x="48" y="72" width="8" height="20"/>
    <rect x="60" y="80" width="12" height="8"/>
    <rect x="76" y="76" width="8" height="16"/>
    <rect x="88" y="84" width="12" height="8"/>
    <rect x="104" y="76" width="8" height="16"/>
    <rect x="48" y="100" width="8" height="12"/>
    <rect x="60" y="96" width="16" height="8"/>
    <rect x="80" y="100" width="8" height="12"/>
    <rect x="92" y="96" width="20" height="16"/>
  </g>
</svg>`;

const ICONS = {
  bell: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>`,
  user: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
  back: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m15 18-6-6 6-6"/></svg>`,
  upload: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 16V4"/><path d="m7 9 5-5 5 5"/><path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7"/></svg>`,
  close: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`,
  check: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3"><path d="M20 6 9 17l-5-5"/></svg>`,
  share: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>`,
  pencil: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>`,
};

let tab = "upcoming";
let sheet = null;
let sent = false;
let picked = new Set(["37"]);
const LANG_KEY = "quentro-lang";
let lang = localStorage.getItem(LANG_KEY) === "es" ? "es" : "en";
const COPY = {
  en: {
    myTickets: "My Tickets", upcoming: "Upcoming", past: "Past",
    noPastTitle: "No past tickets",
    noPast: "Tickets from shows you’ve already attended will show up here.",
    month: "October 2026", when: "Saturday 24 8:00pm", tickets: "2 tickets",
    notifications: "Notifications", noNotes: "You don't have any notifications yet.",
    account: "Account", settings: "Settings", myInfo: "My Info", security: "Security",
    pin: "Security PIN",
    pinCopy: "Secure your tickets with a PIN. We'll request it when transferring tickets, ensuring safety in case your device is lost or stolen.",
    help: "Need Help?", needHelp: "Need help?", close: "Close",
    helpBody: "For ticket transfers or account issues, write from your Quentro email. Your Quentro ID QR is on the first tab if someone needs to scan it.",
    select: "Select tickets", transfer: "Transfer ticket", transferred: "Transferred",
    event: "Event", more: "More info", sector: "Sector", access: "Access",
    section: "Section", row: "Row", seat: "Seat", doors: "Doors open", start: "Show start",
    copied: "Quentro ID copied",
    idCopy: "Show this QR code to transfer tickets to your account with a simple scan.",
    language: "Language",
  },
  es: {
    myTickets: "Mis entradas", upcoming: "Próximos", past: "Pasados",
    noPastTitle: "No hay entradas pasadas",
    noPast: "Las entradas de shows a los que ya fuiste van a aparecer acá.",
    month: "Octubre 2026", when: "sábado 24 20:00hs", tickets: "2 entradas",
    notifications: "Notificaciones", noNotes: "Todavía no tenés notificaciones.",
    account: "Cuenta", settings: "Ajustes", myInfo: "Mis datos", security: "Seguridad",
    pin: "PIN de seguridad",
    pinCopy: "Protegé tus entradas con un PIN. Lo vamos a pedir al transferir, por si perdés el teléfono.",
    help: "¿Necesitás ayuda?", needHelp: "¿Necesitás ayuda?", close: "Cerrar",
    helpBody: "Para transferencias o problemas de la cuenta, escribí desde tu correo de Quentro. El QR de tu Quentro ID está en la primera pestaña.",
    select: "Elegir entradas", transfer: "Transferir entrada", transferred: "Transferida",
    event: "Evento", more: "Más info", sector: "Sector", access: "Acceso",
    section: "Sección", row: "Fila", seat: "Asiento", doors: "Apertura puertas", start: "Inicio show",
    copied: "Quentro ID copiado",
    idCopy: "Mostrá este código QR para pasar entradas a tu cuenta con un escaneo.",
    language: "Idioma",
  },
};
function tr(key) { return COPY[lang][key]; }
let accountTab = "id";
let editing = null;
let helpOpen = false;
let copied = false;

const PROFILE_KEY = "quentro-profile";
const DEFAULT_PROFILE = {
  email: "genesisstars10@gmail.com",
  name: "Rosa",
  country: "Argentina",
  dob: "27/06/2001",
  pinOn: false,
};
let profile = loadProfile();

function loadProfile() {
  try {
    const raw = localStorage.getItem(PROFILE_KEY);
    return raw ? { ...DEFAULT_PROFILE, ...JSON.parse(raw) } : { ...DEFAULT_PROFILE };
  } catch {
    return { ...DEFAULT_PROFILE };
  }
}

function saveProfile(next) {
  profile = next;
  localStorage.setItem(PROFILE_KEY, JSON.stringify(next));
}

function route() {
  const hash = location.hash.replace(/^#/, "") || "/";
  const match = hash.match(/^\/ticket\/([^/]+)/);
  if (match) return { name: "ticket", id: match[1] };
  if (hash === "/notifications") return { name: "notifications" };
  if (hash === "/account") return { name: "account" };
  return { name: "list" };
}

function panel(name) {
  return document.querySelector(`[data-panel="${name}"]`);
}

function render() {
  const app = document.getElementById("app");
  if (!app.dataset.mounted) {
    app.innerHTML = `
      <div data-panel="list"></div>
      <div data-panel="notifications" hidden></div>
      <div data-panel="account" hidden></div>
      ${TICKETS.map((t) => `<div data-panel="ticket-${t.id}" hidden></div>`).join("")}
    `;
    app.dataset.mounted = "1";
    panel("notifications").innerHTML = notificationsView();
    panel("notifications").dataset.lang = lang;
    for (const ticket of TICKETS) {
      const node = panel(`ticket-${ticket.id}`);
      node.innerHTML = passView(ticket);
      bindPass(ticket, node);
      node.dataset.lang = lang;
      const preload = new Image();
      preload.src = ticket.image;
    }
  }

  const r = route();
  const list = panel("list");
  if (list.dataset.tab !== tab || list.dataset.lang !== lang) {
    list.innerHTML = listView();
    list.dataset.tab = tab;
    list.dataset.lang = lang;
    bindList();
  }

  const notes = panel("notifications");
  if (notes.dataset.lang !== lang) {
    notes.innerHTML = notificationsView();
    notes.dataset.lang = lang;
  }

  let active = "list";
  if (r.name === "notifications") active = "notifications";
  if (r.name === "account") {
    active = "account";
    const account = panel("account");
    account.innerHTML = accountView();
    bindAccount();
  }
  if (r.name === "ticket") {
    const ticket = TICKETS.find((t) => t.id === r.id);
    if (!ticket) {
      active = "missing";
      if (!panel("missing")) {
        app.insertAdjacentHTML("beforeend", `<div data-panel="missing"></div>`);
      }
      panel("missing").innerHTML = notFound();
    } else {
      active = `ticket-${r.id}`;
      const node = panel(active);
      if (sheet || node.dataset.sheet || node.dataset.lang !== lang) {
        node.innerHTML = passView(ticket);
        bindPass(ticket, node);
        node.dataset.sheet = sheet ? "1" : "";
        node.dataset.lang = lang;
      }
    }
  }

  document.querySelectorAll("[data-panel]").forEach((el) => {
    el.hidden = el.dataset.panel !== active;
  });
}

function listView() {
  const cards = TICKETS.map((ticket) => `
    <a class="ticket-card" href="#/ticket/${ticket.id}">
      <img src="${ticket.thumb}" alt="" width="640" height="640" decoding="async" />
      <div class="meta">
        <p><span class="qty">${tr("tickets")}</span> <span class="when">${tr("when")}</span></p>
        <h3>${ticket.title}</h3>
        <p class="venue">${ticket.venue}</p>
      </div>
    </a>
  `).join("");

  return `
    <div class="list-page">
      <header class="list-header">
        <h1>${tr("myTickets")}</h1>
        <div class="icon-row">
          <a class="icon-btn" href="#/notifications" aria-label="Notifications">${ICONS.bell}</a>
          <a class="icon-btn" href="#/account" aria-label="Account">${ICONS.user}</a>
        </div>
      </header>
      <div class="seg">
        <button data-tab="upcoming" class="${tab === "upcoming" ? "active" : ""}">${tr("upcoming")}</button>
        <button data-tab="past" class="past ${tab === "past" ? "active" : ""}">${tr("past")}</button>
      </div>
      ${
        tab === "past"
          ? `<div class="empty"><h2>${tr("noPastTitle")}</h2><p>${tr("noPast")}</p></div>`
          : `<section><h2 class="month">${tr("month")}</h2>${cards}</section>`
      }
    </div>
  `;
}

function passView(t) {
  const modal =
    sheet === "info"
      ? `<div class="overlay" data-close>
          <div class="sheet">
            <div class="sheet-head"><h2>${tr("more")}</h2><button type="button" data-close>${tr("close")}</button></div>
            <dl>
              ${row(tr("event"), t.title)}
              ${row("Fecha", t.dateLabel)}
              ${row("Hora", t.timeLabel)}
              ${row("Recinto", t.venue)}
              ${row("Ciudad", t.city)}
              ${row("Entradas", String(t.qty))}
              ${row("Asiento", t.seat)}
            </dl>
          </div>
        </div>`
      : sheet === "transfer"
        ? `<div class="picker">
            <header class="picker-head">
              <h2>${tr("select")}</h2>
              <button type="button" data-close aria-label="Close">${ICONS.close}</button>
            </header>
            <div class="picker-list">
              ${t.passes.map((pass) => {
                const on = picked.has(pass.seat);
                return `<button type="button" class="pick ${on ? "on" : ""}" data-pick="${pass.seat}">
                  <span class="pick-box">${on ? ICONS.check : ""}</span>
                  <span class="pick-card">
                    <span class="pick-kicker">Sector</span>
                    <span class="pick-name">${pass.sector}</span>
                    <span class="pick-line"></span>
                    <span class="pick-bits">
                      <span><span class="pick-kicker">Section</span><b>${pass.section}</b></span>
                      <span><span class="pick-kicker">Row</span><b>${pass.row}</b></span>
                      <span><span class="pick-kicker">Seat</span><b>${pass.seat}</b></span>
                    </span>
                  </span>
                </button>`;
              }).join("")}
            </div>
            <div class="picker-foot">
              <button type="button" class="picker-go" data-send ${picked.size === 0 ? "disabled" : ""}>${sent ? tr("transferred") : tr("transfer")}</button>
            </div>
          </div>`
        : "";

  return `
    <header class="pass-header">
      <a class="back" href="#/" aria-label="Volver">${ICONS.back}</a>
      <div>
        <h1>${tr("event")}</h1>
        <p>${t.dateLabel} - ${t.venue}</p>
      </div>
      <button class="share-pass" type="button" data-transfer aria-label="Transferir">${ICONS.upload}</button>
    </header>
    <article class="pass">
      <div class="pass-photo"><img src="${t.image}" alt="BTS WORLD TOUR ARIRANG, La Plata" width="1400" height="700" decoding="async" /></div>
      <div class="accent-bar"><span></span></div>
      <div class="qr-row">
        ${QR}
        <div class="sector">
          <p class="micro">${tr("sector")}</p>
          <p class="value">${t.section}</p>
          <p class="micro access">${tr("access")}</p>
          <p class="value">${t.gate}</p>
          <button class="mas-info" type="button" data-info>${tr("more")}</button>
        </div>
      </div>
      <div class="facts">
        <div><p class="micro">${tr("section")}</p><p class="value">${t.passes[0].section}</p></div>
        <div><p class="micro">${tr("row")}</p><p class="value">${t.row}</p></div>
        <div><p class="micro">${tr("seat")}</p><p class="value">${t.passes[0].seat}</p></div>
        <div><p class="micro">${tr("doors")}</p><p class="value">${t.doors}</p></div>
        <div><p class="micro">${tr("start")}</p><p class="value">${t.timeLabel} hs</p></div>
      </div>
    </article>
    ${modal}
  `;
}

function row(label, value) {
  return `<div class="row"><dt>${label}</dt><dd>${value}</dd></div>`;
}

function notFound() {
  return `<div class="empty"><h2>Ticket not found.</h2><p><a href="#/">Back to My Tickets</a></p></div>`;
}

function notificationsView() {
  return `
    <div class="screen">
      <header class="screen-header">
        <a class="back" href="#/" aria-label="Back">${ICONS.back}</a>
        <h1>${tr("notifications")}</h1>
      </header>
      <div class="notify-empty">
        <div class="notify-bell">${ICONS.bell}</div>
        <p>${tr("noNotes")}</p>
      </div>
    </div>
  `;
}

function accountView() {
  const flag = profile.country.toLowerCase() === "argentina"
    ? `<svg class="flag-svg" viewBox="0 0 30 20" aria-hidden="true"><rect width="30" height="20" fill="#74acdf"/><rect y="6.7" width="30" height="6.6" fill="#fff"/><circle cx="15" cy="10" r="2.3" fill="#f6b40e"/></svg>`
    : "";
  const help = helpOpen
    ? `<div class="overlay" data-help-close>
        <div class="sheet">
          <div class="sheet-head"><h2>${tr("needHelp")}</h2><button type="button" data-help-close>${tr("close")}</button></div>
          <p>${tr("helpBody")}</p>
        </div>
      </div>`
    : "";

  return `
    <div class="screen">
      <header class="screen-header">
        <a class="back" href="#/" aria-label="Back">${ICONS.back}</a>
        <h1>${tr("account")}</h1>
        <button class="share-btn" type="button" data-share aria-label="Share Quentro ID">${ICONS.share}</button>
      </header>
      ${copied ? `<p class="copied">${tr("copied")}</p>` : ""}
      <div class="account-tabs">
        <button type="button" data-account-tab="id" class="${accountTab === "id" ? "active" : ""}">Quentro ID</button>
        <button type="button" data-account-tab="settings" class="${accountTab === "settings" ? "active" : ""}">${tr("settings")}</button>
      </div>
      ${
        accountTab === "id"
          ? `<div class="id-wrap">
              <div class="id-card">
                <div class="id-qr">
                  <img src="quentro-id-qr.png" alt="Quentro ID QR code" />
                  <div class="id-meter"><span></span></div>
                </div>
                <h2>Quentro ID</h2>
                <p>${tr("idCopy")}</p>
              </div>
            </div>`
          : `<div class="settings">
              <h2>${tr("language")}</h2>
              <div class="info-card">
                <div class="info-row">
                  <span>${lang === "es" ? "Español" : "English"}</span>
                  <button type="button" class="pin-switch ${lang === "es" ? "on" : ""}" data-lang role="switch" aria-checked="${lang === "es"}" aria-label="${tr("language")}"><span></span></button>
                </div>
              </div>
              <h2>${tr("myInfo")}</h2>
              <div class="info-card">
                ${infoRow("email", profile.email)}
                ${infoRow("name", profile.name, true)}
                ${infoRow("country", `${flag}${escapeHtml(profile.country)}`, true, true)}
                ${infoRow("dob", profile.dob, true)}
              </div>
              <h2>${tr("security")}</h2>
              <div class="info-card">
                <div class="info-row">
                  <span>${tr("pin")}</span>
                  <button type="button" class="pin-switch ${profile.pinOn ? "on" : ""}" data-pin role="switch" aria-checked="${profile.pinOn}" aria-label="Security PIN"><span></span></button>
                </div>
                <p class="pin-copy">${tr("pinCopy")}</p>
              </div>
            </div>`
      }
      <div class="help-wrap">
        <button type="button" class="help-btn" data-help>${tr("help")}</button>
      </div>
      ${help}
    </div>
  `;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&" + "amp;")
    .replace(/</g, "&" + "lt;")
    .replace(/>/g, "&" + "gt;")
    .replace(/"/g, "&" + "quot;");
}

function infoRow(field, value, editable, html) {
  const shown = editing === field
    ? `<form data-edit-form><input name="value" value="${escapeHtml(profile[field])}" /></form>`
    : `<span>${html ? value : escapeHtml(value)}</span>`;
  const pencil = editable ? `<button type="button" data-edit="${field}" aria-label="Edit">${ICONS.pencil}</button>` : "";
  return `<div class="info-row">${shown}${pencil}</div>`;
}

function bindAccount() {
  document.querySelectorAll("[data-account-tab]").forEach((btn) => {
    btn.addEventListener("click", () => {
      accountTab = btn.getAttribute("data-account-tab");
      editing = null;
      helpOpen = false;
      render();
    });
  });
  document.querySelector("[data-lang]")?.addEventListener("click", () => {
    lang = lang === "es" ? "en" : "es";
    localStorage.setItem(LANG_KEY, lang);
    render();
  });
  document.querySelector("[data-pin]")?.addEventListener("click", () => {
    saveProfile({ ...profile, pinOn: !profile.pinOn });
    render();
  });
  document.querySelector("[data-help]")?.addEventListener("click", () => {
    helpOpen = true;
    render();
  });
  document.querySelectorAll("[data-help-close]").forEach((el) => {
    el.addEventListener("click", (e) => {
      if (e.target === el) {
        helpOpen = false;
        render();
      }
    });
  });
  document.querySelector(".sheet")?.addEventListener("click", (e) => e.stopPropagation());
  document.querySelector("[data-share]")?.addEventListener("click", async () => {
    const text = `Quentro ID · ${profile.email}`;
    try {
      if (navigator.share) {
        await navigator.share({ title: "Quentro ID", text });
        return;
      }
    } catch {
      /* cancelled */
    }
    try {
      await navigator.clipboard.writeText(text);
      copied = true;
      render();
      setTimeout(() => {
        copied = false;
        if (route().name === "account") render();
      }, 1600);
    } catch {
      copied = false;
    }
  });
  document.querySelectorAll("[data-edit]").forEach((btn) => {
    btn.addEventListener("click", () => {
      editing = btn.getAttribute("data-edit");
      render();
      const input = document.querySelector("[data-edit-form] input");
      input?.focus();
      input?.select();
    });
  });
  const form = document.querySelector("[data-edit-form]");
  if (form) {
    const commit = () => {
      const value = new FormData(form).getr("value");
      if (editing && String(value).trim()) {
        saveProfile({ ...profile, [editing]: String(value).trim() });
      }
      editing = null;
      render();
    };
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      commit();
    });
    form.querySelector("input")?.addEventListener("blur", commit);
  }
}

function bindList() {
  document.querySelectorAll("[data-tab]").forEach((btn) => {
    btn.addEventListener("click", () => {
      tab = btn.getAttribute("data-tab");
      render();
    });
  });
}

function bindPass(ticket, root) {
  if (!ticket || !root) return;
  root.querySelector("[data-info]")?.addEventListener("click", () => {
    sheet = "info";
    render();
  });
  root.querySelector("[data-transfer]")?.addEventListener("click", () => {
    sent = false;
    picked = new Set([ticket.passes[0].seat]);
    sheet = "transfer";
    render();
  });
  root.querySelectorAll("[data-pick]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const seat = btn.getAttribute("data-pick");
      if (picked.has(seat)) picked.delete(seat);
      else picked.add(seat);
      render();
    });
  });
  root.querySelector("[data-send]")?.addEventListener("click", () => {
    if (picked.size === 0) return;
    sent = true;
    render();
  });
  root.querySelectorAll("[data-close]").forEach((el) => {
    el.addEventListener("click", (e) => {
      if (el.classList.contains("overlay") && e.target !== el) return;
      sheet = null;
      render();
    });
  });
  root.querySelector(".sheet")?.addEventListener("click", (e) => e.stopPropagation());
}

document.addEventListener("click", (event) => {
  const link = event.target.closestr("a[href^='#/']");
  if (!link) return;
  event.preventDefault();
  const hash = link.getAttribute("href");
  if (location.hash !== hash) history.pushState(null, "", hash);
  render();
});

window.addEventListener("hashchange", () => {
  sheet = null;
  sent = false;
  render();
});

render();
