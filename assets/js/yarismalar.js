/* ==========================================================
   YARIŞMALAR
   Yarışma eklemek / bilgi güncellemek için sadece COMPETITIONS listesini düzenleyin.
   HTML bilmenize gerek yok — mevcut bir bloğu kopyalayıp değiştirin.

   Alanlar:
     id        : adres çubuğunda görünen kısa ad (boşluksuz, ör. "zorlu-gorev-2026")
     season    : yıl
     upcoming  : true → "YAKINDA" olarak gösterilir (önümüzdeki sezon)
     name      : yarışma adı
     category  : kategori
     result    : sonuç (ör. "3.lük", "Finalist", "ÖTR aşaması")
     highlight : true → sonuç kırmızı etiketle vurgulanır (derece aldığımız yarışmalar)
     summary   : kısa açıklama (boş bırakılabilir)
     team      : yarışmaya katılanlar → { name: "Ad Soyad", role: "Görev" }
     model     : (isteğe bağlı) roketin 3D modeli → { src: "assets/models/dosya.glb", alt: "kısa açıklama", shell: "dis-govde" }
                 shell: dış gövdenin malzeme adı; verilirse "İç yapıyı göster" butonu çıkar ve gövde saydamlaşır
                 orbit: (isteğe bağlı) başlangıç bakış açısı, ör. "90deg 78deg auto" — roket yatay görünecek şekilde
                 SolidWorks'ten "glTF/GLB" olarak dışa aktarılan dosya; 5 MB altında tutun.
     documents : ilgili dosyalar → { title: "...", type: "STEP" | "Kod" | "PCB" | "Rapor" | "Sunum" | "Diğer", link: "..." }
                 link: Google Drive / GitHub / site içi dosya adresi
   ========================================================== */
const COMPETITIONS = [
  /* ---------- Önümüzdeki sezon ---------- */
  {
    id: "zorlu-gorev-2027",
    season: 2027,
    upcoming: true,
    name: "TEKNOFEST Roket Yarışması",
    category: "Zorlu Görev",
    result: "",
    summary: "",
    team: [],
    documents: [],
  },

  /* ---------- 2026 ---------- */
  {
    id: "zorlu-gorev-2026",
    season: 2026,
    name: "TEKNOFEST Roket Yarışması",
    category: "Zorlu Görev",
    result: "3.lük",
    highlight: true,
    summary: "",
    model: {
      src: "assets/models/zorlu-2026.glb?v=2",
      alt: "2026 Zorlu Görev iki kademeli roketimizin 3D modeli",
      shell: "dis-govde",
      orbit: "90deg 78deg auto",
    },
    team: [],
    documents: [],
  },
  {
    id: "yuksek-irtifa-2026",
    season: 2026,
    name: "TEKNOFEST Roket Yarışması",
    category: "Yüksek İrtifa",
    result: "Finalist",
    highlight: true,
    summary: "",
    team: [],
    documents: [],
  },
  {
    id: "orta-irtifa-2026",
    season: 2026,
    name: "TEKNOFEST Roket Yarışması",
    category: "Orta İrtifa",
    result: "ÖTR aşaması",
    summary: "",
    team: [],
    documents: [],
  },

  /* ---------- 2025 ---------- */
  {
    id: "orta-irtifa-2025",
    season: 2025,
    name: "TEKNOFEST Roket Yarışması",
    category: "Orta İrtifa",
    result: "3.lük",
    highlight: true,
    summary: "Takımımızın ilk yarışması. 25 finalist takım arasında 3. olduk.",
    model: {
      src: "assets/models/orta-irtifa-2025.glb?v=2",
      alt: "2025 Orta İrtifa roketimizin 3D modeli",
      shell: "dis-govde",
      orbit: "0deg 78deg auto",
    },
    team: [],
    documents: [
      {
        title: "Yarışma Süreci Özet ve Değerlendirme Raporu",
        type: "Rapor",
        link: "assets/docs/METUSAR-TEKNOFEST-2025-Degerlendirme-Raporu.pdf",
      },
    ],
  },
];

/* ==========================================================
   Aşağısı sayfayı oluşturan kod — düzenlemenize gerek yok.
   ========================================================== */
(() => {
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const DOC_ICON = { STEP: "🧩", Kod: "💻", PCB: "🔌", Rapor: "📄", Sunum: "📊", "Diğer": "📁" };
  const SOON = `<span class="soon"><span class="hourglass" aria-hidden="true">⏳</span>YAKINDA</span>`;

  function card(c) {
    const resultTag = c.upcoming
      ? SOON
      : `<span class="tag${c.highlight ? " red" : ""}">${esc(c.result)}</span>`;
    return `
      <button class="card comp-card${c.upcoming ? " upcoming" : ""}" data-id="${esc(c.id)}" aria-haspopup="dialog">
        <div class="comp-top">
          <span class="tag">${esc(c.name)}</span>
          ${resultTag}
        </div>
        <h3>${esc(c.category)}</h3>
        ${c.summary ? `<p>${esc(c.summary)}</p>` : ""}
        ${c.model ? `<span class="comp-3d">3D model</span>` : ""}
        <span class="comp-more">Ayrıntılar →</span>
      </button>`;
  }

  function render() {
    const root = document.getElementById("competition-list");
    if (!root) return;
    const seasons = [...new Set(COMPETITIONS.map((c) => c.season))].sort((a, b) => b - a);
    root.innerHTML = seasons.map((y) => {
      const items = COMPETITIONS.filter((c) => c.season === y);
      const up = items.every((c) => c.upcoming);
      return `
        <div class="season">
          <div class="season-head">
            <h2 class="section-title">${y}</h2>
            <span class="tag${up ? " orange" : ""}">${up ? "Önümüzdeki sezon" : "Sezon"}</span>
          </div>
          <div class="grid grid-3">${items.map(card).join("")}</div>
        </div>`;
    }).join("");
    root.addEventListener("click", (e) => {
      const b = e.target.closest(".comp-card");
      if (b) open(b.dataset.id);
    });
  }

  const empty = (t) => `<p class="empty-note">${t}</p>`;

  function detail(c) {
    const team = c.team.length
      ? `<ul class="team-list">${c.team.map((m) => `<li><b>${esc(m.name)}</b>${m.role ? `<span>${esc(m.role)}</span>` : ""}</li>`).join("")}</ul>`
      : empty("Katılımcı listesi yakında eklenecek.");
    const docs = c.documents.length
      ? `<ul class="doc-list">${c.documents.map((d) => {
          const icon = DOC_ICON[d.type] || DOC_ICON["Diğer"];
          const title = d.link
            ? `<a href="${esc(d.link)}" target="_blank" rel="noopener">${esc(d.title)} ↗</a>`
            : esc(d.title);
          return `<li><span class="doc-icon" aria-hidden="true">${icon}</span><span class="doc-title">${title}</span><span class="tag">${esc(d.type)}</span></li>`;
        }).join("")}</ul>`
      : empty("STEP dosyaları, kodlar, PCB tasarımları ve raporlar yakında eklenecek.");
    return `
      <div class="comp-dialog-head">
        <div>
          <p class="eyebrow">${esc(c.name)} · ${c.season}</p>
          <h2>${esc(c.category)}</h2>
        </div>
        <button class="dialog-close" aria-label="Kapat">✕</button>
      </div>
      <dl class="comp-facts">
        <div><dt>Sezon</dt><dd>${c.season}</dd></div>
        <div><dt>Kategori</dt><dd>${esc(c.category)}</dd></div>
        <div><dt>Sonuç</dt><dd>${c.upcoming ? SOON : esc(c.result)}</dd></div>
      </dl>
      ${c.summary ? `<p class="comp-summary">${esc(c.summary)}</p>` : ""}
      ${c.model ? `
      <h3>Roketimiz</h3>
      <div class="model-box">
        <model-viewer src="${esc(c.model.src)}" alt="${esc(c.model.alt || "Roketin 3D modeli")}"
          camera-controls touch-action="pan-y" interaction-prompt="none"
          camera-orbit="${esc(c.model.orbit || "90deg 78deg auto")}" min-camera-orbit="auto auto 0%" field-of-view="24deg"
          environment-image="neutral" exposure="1.05" shadow-intensity="0"
          loading="eager" reveal="auto">
          <div class="model-loading" slot="poster">3D model yükleniyor…</div>
        </model-viewer>
        <div class="model-bar">
          ${c.model.shell ? `<button type="button" class="btn btn-primary model-xray" data-shell="${esc(c.model.shell)}" aria-pressed="false" disabled>İç yapıyı göster</button>` : ""}
          <p class="model-hint">Döndürmek için sürükleyin · yakınlaştırmak için kaydırın veya iki parmakla açın</p>
        </div>
      </div>` : ""}
      <h3>Takım</h3>
      ${team}
      <h3>Dokümanlar</h3>
      ${docs}`;
  }

  const dlg = document.getElementById("competition-dialog");

  // 3D görüntüleyici (Google model-viewer) yalnızca modeli olan bir pencere açılınca yüklenir
  let mvLoaded = false;
  function loadModelViewer() {
    if (mvLoaded) return;
    mvLoaded = true;
    const sc = document.createElement("script");
    sc.type = "module";
    sc.src = "https://ajax.googleapis.com/ajax/libs/model-viewer/4.0.0/model-viewer.min.js";
    document.head.appendChild(sc);
  }

  // "İç yapıyı göster": dış gövde malzemesini yarı saydam yapar / geri alır
  function setupModel(root) {
    const mv = root.querySelector("model-viewer");
    const btn = root.querySelector(".model-xray");
    if (!mv || !btn) return;
    const enable = () => { btn.disabled = false; };
    if (mv.loaded) enable(); else mv.addEventListener("load", enable, { once: true });
    btn.addEventListener("click", () => {
      const name = btn.dataset.shell;
      const mats = (mv.model && mv.model.materials) || [];
      const shell = mats.filter((m) => m.name === name);
      if (!shell.length) return;
      const on = btn.getAttribute("aria-pressed") !== "true";
      shell.forEach((m) => {
        m.setAlphaMode(on ? "BLEND" : "OPAQUE");
        const f = m.pbrMetallicRoughness.baseColorFactor.slice();
        f[3] = on ? 0.15 : 1;
        m.pbrMetallicRoughness.setBaseColorFactor(f);
      });
      btn.setAttribute("aria-pressed", String(on));
      btn.textContent = on ? "Dış gövdeyi göster" : "İç yapıyı göster";
    });
  }

  function open(id, push = true) {
    const c = COMPETITIONS.find((x) => x.id === id);
    if (!c || !dlg) return;
    if (c.model) loadModelViewer();
    dlg.querySelector(".comp-dialog-body").innerHTML = detail(c);
    if (c.model) setupModel(dlg);
    if (!dlg.open) dlg.showModal();
    if (push && location.hash !== "#" + id) history.replaceState(null, "", "#" + id);
  }
  function close() {
    if (dlg && dlg.open) dlg.close();
  }

  if (dlg) {
    dlg.addEventListener("click", (e) => {
      if (e.target === dlg || e.target.closest(".dialog-close")) close();
    });
    dlg.addEventListener("close", () => {
      if (location.hash) history.replaceState(null, "", location.pathname + location.search);
    });
  }

  render();
  // Bağlantıyla gelinirse (ör. yarismalar.html#zorlu-gorev-2026) ilgili pencereyi aç
  if (location.hash) open(decodeURIComponent(location.hash.slice(1)), false);
})();
