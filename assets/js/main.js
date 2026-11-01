/* Ortak üst menü ve alt bilgi — tüm sayfalara buradan eklenir.
   Yeni sekme eklemek için sadece NAV listesine bir satır ekleyin. */
const NAV = [
  { href: "index.html", label: "Ana Sayfa" },
  { href: "hakkimizda.html", label: "Hakkımızda" },
  { href: "yarismalar.html", label: "Yarışmalar" },
  { href: "yol-haritasi.html", label: "Yol Haritası" },
  { href: "egitim.html", label: "Eğitim" },
  { href: "referanslar.html", label: "Referanslar" },
];

const LOGO = `
<svg class="brand-mark" viewBox="0 0 32 32" fill="none" aria-hidden="true">
  <path d="M16 2c4 3.5 6 8 6 13.5V22h-12v-6.5C10 10 12 5.5 16 2z" fill="#ffffff"/>
  <circle cx="16" cy="13" r="2.6" fill="#cc0000"/>
  <path d="M10 18l-4 5v2h4zM22 18l4 5v2h-4z" fill="#cc0000"/>
  <path d="M13 23h6l-1 4c-.6 1.6-2 3-2 3s-1.4-1.4-2-3z" fill="#cc0000"/>
</svg>`;

function currentPage() {
  const p = location.pathname.split("/").pop();
  return p === "" ? "index.html" : p;
}

function renderHeader() {
  const here = currentPage();
  const links = NAV.map(
    (n) => `<li><a href="${n.href}"${n.href === here ? ' class="active" aria-current="page"' : ""}>${n.label}</a></li>`
  ).join("");
  const el = document.getElementById("site-header");
  if (!el) return;
  el.className = "site-header";
  el.innerHTML = `
    <nav class="container nav" aria-label="Ana menü">
      <a class="brand" href="index.html">${LOGO}<b>METU<span>SAR</span></b></a>
      <button class="nav-toggle" aria-label="Menüyü aç" aria-expanded="false" aria-controls="main-nav">☰</button>
      <ul class="nav-links" id="main-nav">${links}</ul>
    </nav>`;
  const btn = el.querySelector(".nav-toggle");
  const ul = el.querySelector(".nav-links");
  btn.addEventListener("click", () => {
    const open = ul.classList.toggle("open");
    btn.setAttribute("aria-expanded", String(open));
    btn.setAttribute("aria-label", open ? "Menüyü kapat" : "Menüyü aç");
  });
  function closeMenu(returnFocus = false) {
    ul.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
    btn.setAttribute('aria-label', 'Menüyü aç');
    if (returnFocus) btn.focus();
  }
  el.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && ul.classList.contains('open')) closeMenu(true);
  });
  const mobile = matchMedia('(max-width: 900px)');
  mobile.addEventListener('change', () => closeMenu());
}

function renderFooter() {
  const el = document.getElementById("site-footer");
  if (!el) return;
  el.className = "site-footer";
  el.innerHTML = `
    <div class="container footer-grid">
      <div class="footer-identity">
        <strong>METUSAR</strong>
        <p>ODTÜ Roket Takımı<br>Orta Doğu Teknik Üniversitesi, Ankara</p>
        <p>© ${new Date().getFullYear()} METUSAR</p>
      </div>
      <div class="footer-links">
        ${NAV.map((n) => `<a href="${n.href}">${n.label}</a>`).join("")}
      </div>
      <div class="footer-links footer-contact">
        <a href="https://github.com/heckedbyfurki/METUSAR" target="_blank" rel="noopener">GitHub ↗</a>
      </div>
    </div>`;
}

renderHeader();
renderFooter();
