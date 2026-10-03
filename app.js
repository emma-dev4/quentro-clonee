const TICKETS = [
  {
    id: "lima-oct-07",
    title: "BTS World Tour",
    qty: 2,
    when: "miércoles 7 20:00hs",
    venue: "Estadio San Marcos",
    city: "Lima, Perú",
    month: "Octubre 2026",
    image: "posters/lima.jpg",
    thumb: "posters/lima-thumb.jpg",
    dateLabel: "Mié, 7 oct 2026",
    timeLabel: "20:00",
    section: "Tribuna Norte",
    row: "19",
    seat: "Asientos consecutivos",
    doors: "No publicado",
  },
  {
    id: "lima-oct-09",
    title: "BTS World Tour",
    qty: 2,
    when: "viernes 9 20:00hs",
    venue: "Estadio San Marcos",
    city: "Lima, Perú",
    month: "Octubre 2026",
    image: "posters/lima.jpg",
    thumb: "posters/lima-thumb.jpg",
    dateLabel: "Vie, 9 oct 2026",
    timeLabel: "20:00",
    section: "Tribuna Occidente",
    row: "22",
    seat: "Asientos consecutivos",
    doors: "No publicado",
  },
  {
    id: "lima-oct-10",
    title: "BTS World Tour",
    qty: 2,
    when: "sábado 10 20:00hs",
    venue: "Estadio San Marcos",
    city: "Lima, Perú",
    month: "Octubre 2026",
    image: "posters/lima.jpg",
    thumb: "posters/lima-thumb.jpg",
    dateLabel: "Sáb, 10 oct 2026",
    timeLabel: "20:00",
    section: "Tribuna Occidente",
    row: "22",
    seat: "Asientos consecutivos",
    doors: "No publicado",
  },
  {
    id: "laplata-oct-24",
    title: "BTS World Tour",
    qty: 2,
    when: "sábado 24 20:00hs",
    venue: "Estadio Único de La Plata",
    city: "La Plata, Argentina",
    month: "Octubre 2026",
    image: "posters/argentina.jpg",
    thumb: "posters/argentina-thumb.jpg",
    dateLabel: "Sáb, 24 oct 2026",
    timeLabel: "20:00",
    section: "Cabecera Norte",
    row: "19",
    seat: "Asientos consecutivos 37",
    doors: "16:00",
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
  upload: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/></svg>`,
  share: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>`,
  pencil: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>`,
};

let tab = "upcoming";
let sheet = null;
let sent = false;
let email = "";
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

function render() {
  const r = route();
  const app = document.getElementById("app");
  if (!app.dataset.mounted) {
    app.innerHTML = `<div id="view-list"></div><div id="view-screen" hidden></div>`;
    app.dataset.mounted = "1";
  }
  const list = document.getElementById("view-list");
  const screen = document.getElementById("view-screen");

  if (r.name === "list") {
    if (list.dataset.tab !== tab) {
      list.innerHTML = listView();
      list.dataset.tab = tab;
      bindList();
    }
    list.hidden = false;
    screen.hidden = true;
    return;
  }

  list.hidden = true;
  screen.hidden = false;
  if (r.name === "ticket") {
    const ticket = TICKETS.find((t) => t.id === r.id);
    screen.innerHTML = ticket ? passView(ticket) : notFound();
    bindPass(ticket);
    return;
  }
  if (r.name === "notifications") {
    screen.innerHTML = notificationsView();
    return;
  }
  screen.innerHTML = accountView();
  bindAccount();
}

function listView() {
  const cards = TICKETS.map((t) => `
    <a class="ticket-card" href="#/ticket/${t.id}">
      <img src="${t.thumb}" alt="" width="108" height="108" decoding="async" />
      <div class="meta">
        <p><span class="qty">${t.qty} entradas</span> <span class="when">${t.when}</span></p>
        <h3>${t.title}</h3>
        <p class="venue">${t.venue}</p>
      </div>
    </a>
  `).join("");

  return `
    <div class="list-page">
      <header class="list-header">
        <h1>My Tickets</h1>
        <div class="icon-row">
          <a class="icon-btn" href="#/notifications" aria-label="Notifications">${ICONS.bell}</a>
          <a class="icon-btn" href="#/account" aria-label="Account">${ICONS.user}</a>
        </div>
      </header>
      <div class="seg">
        <button data-tab="upcoming" class="${tab === "upcoming" ? "active" : ""}">Upcoming</button>
        <button data-tab="past" class="past ${tab === "past" ? "active" : ""}">Past</button>
      </div>
      ${
        tab === "past"
          ? `<div class="empty"><h2>No past tickets</h2><p>Tickets from shows you’ve already attended will show up here.</p></div>`
          : `<section><h2 class="month">Octubre 2026</h2>${cards}</section>`
      }
    </div>
  `;
}

function passView(t) {
  const modal =
    sheet === "info"
      ? `<div class="overlay" data-close>
          <div class="sheet">
            <div class="sheet-head"><h2>Más info</h2><button type="button" data-close>Cerrar</button></div>
            <dl>
              ${row("Evento", t.title)}
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
        ? `<div class="overlay" data-close>
            <div class="sheet">
              <div class="sheet-head"><h2>Transferir</h2><button type="button" data-close>Cerrar</button></div>
              ${
                sent
                  ? `<p>Entrada marcada como transferida a ${email}.</p>`
                  : `<form id="transfer-form">
                      <label for="to-email">Correo del destinatario</label>
                      <input id="to-email" type="email" required placeholder="nombre@correo.com" value="${email}" />
                      <button class="send" type="submit">Enviar transferencia</button>
                    </form>`
              }
            </div>
          </div>`
        : "";

  return `
    <header class="pass-header">
      <a class="back" href="#/" aria-label="Volver">${ICONS.back}</a>
      <div>
        <h1>Evento</h1>
        <p>${t.dateLabel} - ${t.venue}</p>
      </div>
    </header>
    <article class="pass">
      <div class="pass-photo"><img src="${t.image}" alt="BTS World Tour" width="960" height="427" decoding="async" /></div>
      <div class="accent-bar"><span></span></div>
      <div class="qr-row">
        ${QR}
        <div class="sector">
          <p class="micro">Sector</p>
          <p class="value">${t.section}</p>
          <button class="mas-info" type="button" data-info>Más info</button>
        </div>
      </div>
      <div class="facts">
        <div><p class="micro">Sección</p><p class="value">${t.section}</p></div>
        <div><p class="micro">Fila</p><p class="value">${t.row}</p></div>
        <div><p class="micro">Apertura</p><p class="value">${t.doors}</p></div>
        <div><p class="micro">Inicio</p><p class="value">${t.timeLabel}</p></div>
      </div>
      <button class="transfer" type="button" data-transfer>${ICONS.upload} Transferir</button>
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
        <h1>Notifications</h1>
      </header>
      <div class="notify-empty">
        <div class="notify-bell">${ICONS.bell}</div>
        <p>You don't have any notifications yet.</p>
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
          <div class="sheet-head"><h2>Need help?</h2><button type="button" data-help-close>Close</button></div>
          <p>For ticket transfers or account issues, write from ${profile.email}. Your Quentro ID QR is on the first tab if someone needs to scan it.</p>
        </div>
      </div>`
    : "";

  return `
    <div class="screen">
      <header class="screen-header">
        <a class="back" href="#/" aria-label="Back">${ICONS.back}</a>
        <h1>Account</h1>
        <button class="share-btn" type="button" data-share aria-label="Share Quentro ID">${ICONS.share}</button>
      </header>
      ${copied ? `<p class="copied">Quentro ID copied</p>` : ""}
      <div class="account-tabs">
        <button type="button" data-account-tab="id" class="${accountTab === "id" ? "active" : ""}">Quentro ID</button>
        <button type="button" data-account-tab="settings" class="${accountTab === "settings" ? "active" : ""}">Settings</button>
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
                <p>Show this QR code to transfer tickets to your account with a simple scan.</p>
              </div>
            </div>`
          : `<div class="settings">
              <h2>My Info</h2>
              <div class="info-card">
                ${infoRow("email", profile.email)}
                ${infoRow("name", profile.name, true)}
                ${infoRow("country", `${flag}${escapeHtml(profile.country)}`, true, true)}
                ${infoRow("dob", profile.dob, true)}
              </div>
              <h2>Security</h2>
              <div class="info-card">
                <div class="info-row">
                  <span>Security PIN</span>
                  <button type="button" class="pin-switch ${profile.pinOn ? "on" : ""}" data-pin role="switch" aria-checked="${profile.pinOn}" aria-label="Security PIN"><span></span></button>
                </div>
                <p class="pin-copy">Secure your tickets with a PIN. We'll request it when transferring tickets, ensuring safety in case your device is lost or stolen.</p>
              </div>
            </div>`
      }
      <div class="help-wrap">
        <button type="button" class="help-btn" data-help>Need Help?</button>
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
      const value = new FormData(form).get("value");
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

function bindPass(ticket) {
  if (!ticket) return;
  document.querySelector("[data-info]")?.addEventListener("click", () => {
    sheet = "info";
    render();
  });
  document.querySelector("[data-transfer]")?.addEventListener("click", () => {
    sent = false;
    sheet = "transfer";
    render();
  });
  document.querySelectorAll("[data-close]").forEach((el) => {
    el.addEventListener("click", (e) => {
      if (e.target === el) {
        sheet = null;
        render();
      }
    });
  });
  document.querySelector(".sheet")?.addEventListener("click", (e) => e.stopPropagation());
  const form = document.getElementById("transfer-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      email = document.getElementById("to-email").value;
      if (email.includes("@")) {
        sent = true;
        render();
      }
    });
  }
}

window.addEventListener("hashchange", () => {
  sheet = null;
  sent = false;
  render();
});

render();
