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
     team      : yarışmaya katılanlar → { name: "Ad Soyad", role: "Görev", group: "Alt ekip", lead: true }
                 group: aynı alt ekipteki kişiler tek kartta toplanır ("Yönetim" en üstte gösterilir)
                 lead : true → o alt ekibin kaptanı (kartın başında, vurgulu)
                 school / department: (isteğe bağlı) isme tıklayınca açılan okul ve bölüm bilgisi
                 group verilmezse kişiler düz liste olarak gösterilir
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
    team: [
      { name: "Ali Furkan Güler", role: "Baş Takım Kaptanı", group: "Yönetim", school: "Orta Doğu Teknik Üniversitesi", department: "Elektrik ve Elektronik Mühendisliği" },
      { name: "Dr. Öğr. Üyesi Mehmet Karaca", role: "Takım Danışmanı", group: "Yönetim" },

      { name: "Mert Deniz", group: "Aerodinamik", lead: true, school: "Orta Doğu Teknik Üniversitesi", department: "Makine Mühendisliği" },
      { name: "İbrahim Yusuf Budunoğlu", group: "Aerodinamik", school: "Orta Doğu Teknik Üniversitesi", department: "Makine Mühendisliği" },

      { name: "Buğra Bulut Doğan", group: "Yapısal", lead: true, school: "Gazi Üniversitesi", department: "Makine Mühendisliği" },
      { name: "Atik Faysal Fardin", group: "Yapısal", school: "Orta Doğu Teknik Üniversitesi", department: "Metalurji ve Malzeme Mühendisliği" },
      { name: "Muhammed Sami Yurtseven", group: "Yapısal", school: "Gazi Üniversitesi", department: "Tıp Fakültesi" },
      { name: "Yusuf Tosun", group: "Yapısal", school: "Orta Doğu Teknik Üniversitesi", department: "Metalurji ve Malzeme Mühendisliği" },
      { name: "Emre Yılmaz", group: "Yapısal", school: "Gazi Üniversitesi", department: "Makine Mühendisliği" },
      { name: "Mehmet Onur Yavuz", group: "Yapısal", school: "Orta Doğu Teknik Üniversitesi", department: "Makine Mühendisliği" },

      { name: "Kerem Soylu", group: "Aviyonik", lead: true, school: "Orta Doğu Teknik Üniversitesi", department: "Elektrik ve Elektronik Mühendisliği" },
      { name: "Berkay Eldemir", group: "Aviyonik", school: "Orta Doğu Teknik Üniversitesi", department: "Bilgisayar Mühendisliği" },
      { name: "Fevzi Beren Geneci", group: "Aviyonik", school: "Orta Doğu Teknik Üniversitesi", department: "Elektrik ve Elektronik Mühendisliği" },
      { name: "Yunus Emre Gebeş", group: "Aviyonik", school: "Orta Doğu Teknik Üniversitesi", department: "Fizik Bölümü" },

      { name: "Buğra Aydoğdu", group: "Kurtarma", lead: true, school: "Orta Doğu Teknik Üniversitesi", department: "Makine Mühendisliği" },
      { name: "Mehmet Akif Sonay", group: "Kurtarma", school: "Orta Doğu Teknik Üniversitesi", department: "Makine Mühendisliği" },
    ],
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
    team: [
      { name: "Mehmet Bedil Şahin", role: "Baş Takım Kaptanı", group: "Yönetim" },
      { name: "Yrd. Doç. Dr. Süleyman Yıldırım", role: "Takım Danışmanı", group: "Yönetim" },

      { name: "Fahreddin Şengül", group: "Aerodinamik", lead: true },
      { name: "Mehmet Onur Yavuz", group: "Aerodinamik", school: "Orta Doğu Teknik Üniversitesi", department: "Makine Mühendisliği" },
      { name: "Mert Deniz", group: "Aerodinamik", school: "Orta Doğu Teknik Üniversitesi", department: "Makine Mühendisliği" },

      { name: "Mehmet Burak Memiş", group: "Yapısal", lead: true },
      { name: "Muhammed Sami Yurtseven", group: "Yapısal", school: "Gazi Üniversitesi", department: "Tıp Fakültesi" },
      { name: "Cem Atilla Elbir", group: "Yapısal" },
      { name: "Yusuf Tosun", group: "Yapısal", school: "Orta Doğu Teknik Üniversitesi", department: "Metalurji ve Malzeme Mühendisliği" },
      { name: "Muhammed Ramis Cantepe", group: "Yapısal" },

      { name: "Hüseyin Ünal", group: "Aviyonik", lead: true },
      { name: "Ali Furkan Güler", group: "Aviyonik", school: "Orta Doğu Teknik Üniversitesi", department: "Elektrik ve Elektronik Mühendisliği" },
      { name: "Kerem Soylu", group: "Aviyonik", school: "Orta Doğu Teknik Üniversitesi", department: "Elektrik ve Elektronik Mühendisliği" },
      { name: "Osman Özer", group: "Aviyonik" },

      { name: "Mehmet Arda Türk", group: "Kurtarma", lead: true },
      { name: "Buğra Aydoğdu", group: "Kurtarma", school: "Orta Doğu Teknik Üniversitesi", department: "Makine Mühendisliği" },
    ],
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

  // Takım: gruplu (Yönetim + alt ekip kartları) veya düz liste
  function teamHtml(list) {
    if (!list.some((m) => m.group)) {
      return `<ul class="team-list">${list.map((m) => `<li><b>${esc(m.name)}</b>${m.role ? `<span>${esc(m.role)}</span>` : ""}</li>`).join("")}</ul>`;
    }
    const groups = [];
    list.forEach((m) => {
      const g = m.group || "Diğer";
      let e = groups.find((x) => x.name === g);
      if (!e) groups.push((e = { name: g, people: [] }));
      e.people.push(m);
    });
    const mgmt = groups.find((g) => g.name === "Yönetim");
    const teams = groups.filter((g) => g !== mgmt);
    const total = list.length;
    const hasSchool = list.some((m) => m.school);
    // okul bilgisi varsa isim tıklanabilir bir düğme olur, tıklayınca okul/bölüm açılır
    const person = (m, extra, cls) => {
      const inner = `<b>${esc(m.name)}</b>${extra}`;
      if (!m.school) return `<div class="${cls}">${inner}</div>`;
      return `<button type="button" class="${cls} person-btn" aria-expanded="false">${inner}
        <span class="person-school" hidden><span>${esc(m.school)}</span>${m.department ? `<span>${esc(m.department)}</span>` : ""}</span></button>`;
    };
    const top = mgmt
      ? `<div class="team-top">${mgmt.people.map((m) =>
          person(m, m.role ? `<span class="person-role">${esc(m.role)}</span>` : "", "team-person lead")).join("")}
        </div>`
      : "";
    const cards = teams.map((g) => {
      const people = [...g.people].sort((a, b) => (b.lead ? 1 : 0) - (a.lead ? 1 : 0));
      return `
        <div class="team-group">
          <div class="team-group-head"><h4>${esc(g.name)}</h4><span>${g.people.length} kişi</span></div>
          <ul>${people.map((m) => `
            <li class="${m.lead ? "lead" : ""}">${person(m, m.lead ? `<span class="tag red">Ekip Kaptanı</span>` : m.role ? `<span class="person-role">${esc(m.role)}</span>` : "", "team-member")}</li>`).join("")}
          </ul>
        </div>`;
    }).join("");
    return `<p class="team-count">${total} kişilik ekip · ${teams.length} alt ekip${hasSchool ? ` · <span class="team-hint">okul bilgisi için isme tıklayın</span>` : ""}</p>${top}<div class="team-groups">${cards}</div>`;
  }

  function detail(c) {
    const team = c.team.length ? teamHtml(c.team) : empty("Katılımcı listesi yakında eklenecek.");
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
      const pb = e.target.closest(".person-btn");
      if (pb) {
        const open = pb.getAttribute("aria-expanded") !== "true";
        pb.setAttribute("aria-expanded", String(open));
        pb.querySelector(".person-school").hidden = !open;
        return;
      }
    });
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
