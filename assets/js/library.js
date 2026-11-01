/* Eğitim ve Referans sayfalarını content.js'deki verilerden oluşturur.
   Bu dosyayı düzenlemenize gerek yok. */

function esc(s) {
  return String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

function videoCard(v) {
  const has = Boolean(v.youtube);
  const url = has ? `https://www.youtube.com/watch?v=${encodeURIComponent(v.youtube)}` : null;
  const thumb = has
    ? `<div class="video-thumb" style="background-image:url('https://img.youtube.com/vi/${encodeURIComponent(v.youtube)}/hqdefault.jpg')"><div class="play">▶</div></div>`
    : `<div class="video-thumb empty"><span class="cds--tag tag orange">YAKINDA</span></div>`;
  const tags = [v.category, v.level, v.duration, v.speaker].filter(Boolean).map((t, i) => `<span class="cds--tag tag${i === 0 ? " red" : ""}">${esc(t)}</span>`).join("");
  const inner = `${thumb}<div class="video-body"><h3>${esc(v.title)}</h3><p>${esc(v.description)}</p><div class="meta">${tags}</div></div>`;
  return has
    ? `<a class="card video-card" href="${url}" target="_blank" rel="noopener">${inner}</a>`
    : `<div class="card video-card">${inner}</div>`;
}

function resourceItem(r) {
  const title = r.link
    ? `<a class="title" href="${esc(r.link)}" target="_blank" rel="noopener">${esc(r.title)} ↗</a>`
    : `${esc(r.title)}`;
  return `<li class="card res-item">
    <div><h3>${title}</h3><p>${esc(r.description)}</p></div>
    <div class="resource-meta">
      <span class="cds--tag tag red">${esc(r.type)}</span><span class="cds--tag tag">${esc(r.category)}</span>
    </div>
  </li>`;
}

/* Bir filtre + arama + liste grubunu bağlar */
function mountLibrary({ items, listEl, filterEl, searchEl, render, wrap = (h) => h }) {
  if (!listEl) return;
  listEl.setAttribute("aria-live", "polite");
  let cat = "Tümü";
  let q = "";
  const used = CATEGORIES.filter((c) => items.some((i) => i.category === c));
  if (filterEl) {
    filterEl.innerHTML = ["Tümü", ...used]
      .map((c) => `<button class="filter-btn${c === cat ? " active" : ""}" aria-pressed="${c === cat}" data-cat="${esc(c)}">${esc(c)}</button>`)
      .join("");
    filterEl.addEventListener("click", (e) => {
      const b = e.target.closest(".filter-btn");
      if (!b) return;
      cat = b.dataset.cat;
      filterEl.querySelectorAll(".filter-btn").forEach((x) => {
        x.classList.toggle("active", x === b);
        x.setAttribute("aria-pressed", String(x === b));
      });
      draw();
    });
  }
  if (searchEl) searchEl.addEventListener("input", () => { q = searchEl.value.toLocaleLowerCase("tr"); draw(); });

  function draw() {
    const shown = items.filter(
      (i) => (cat === "Tümü" || i.category === cat) &&
        (!q || `${i.title} ${i.description}`.toLocaleLowerCase("tr").includes(q))
    );
    listEl.innerHTML = shown.length ? wrap(shown.map(render).join("")) : `<div class="empty-state">Bu filtreye uygun içerik yok.</div>`;
  }
  draw();
}

const $ = (id) => document.getElementById(id);

mountLibrary({ items: VIDEOS, listEl: $("video-list"), filterEl: $("video-filters"), searchEl: $("video-search"), render: videoCard,
  wrap: (h) => `<div class="grid grid-3">${h}</div>` });
mountLibrary({ items: TRAININGS, listEl: $("training-list"), filterEl: $("training-filters"), render: resourceItem,
  wrap: (h) => `<ul class="res-list">${h}</ul>` });
mountLibrary({ items: REFERENCES, listEl: $("reference-list"), filterEl: $("reference-filters"), searchEl: $("reference-search"), render: resourceItem,
  wrap: (h) => `<ul class="res-list">${h}</ul>` });
