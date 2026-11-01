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
  <path d="M16 2c4 3.5 6 8 6 13.5V22h-12v-6.5C10 10 12 5.5 16 2z" fill="#e7ecf3"/>
  <circle cx="16" cy="13" r="2.6" fill="#cc0000"/>
  <path d="M10 18l-4 5v2h4zM22 18l4 5v2h-4z" fill="#cc0000"/>
  <path d="M13 23h6l-1 4c-.6 1.6-2 3-2 3s-1.4-1.4-2-3z" fill="#b5b8c0"/>
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
    <nav class="container nav">
      <a class="brand" href="index.html">${LOGO}<b>METU<span>SAR</span></b></a>
      <button class="nav-toggle" aria-controls="main-navigation" aria-label="Menüyü aç" aria-expanded="false">☰</button>
      <ul class="nav-links" id="main-navigation">${links}</ul>
    </nav>`;
  const btn = el.querySelector(".nav-toggle");
  const ul = el.querySelector(".nav-links");
  btn.addEventListener("click", () => {
    const open = ul.classList.toggle("open");
    btn.setAttribute("aria-expanded", open);
  });
}

function renderFooter() {
  const el = document.getElementById("site-footer");
  if (!el) return;
  el.className = "site-footer";
  el.innerHTML = `
    <div class="container footer-grid">
      <div>
        <strong style="color:var(--text)">METUSAR</strong> — ODTÜ Roket Takımı<br>
        Orta Doğu Teknik Üniversitesi, Ankara<br>
        © ${new Date().getFullYear()} METUSAR
      </div>
      <div class="footer-links">
        ${NAV.map((n) => `<a href="${n.href}">${n.label}</a>`).join("")}
      </div>
      <div class="footer-links">
        <!-- Bağlantıları kendi hesaplarınızla değiştirin -->
        <a href="mailto:iletisim@metusar.org">E-posta</a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener">Instagram</a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener">LinkedIn</a>
        <a href="https://www.youtube.com/" target="_blank" rel="noopener">YouTube</a>
        <a href="https://github.com/mbedilsah-tech/metusar" target="_blank" rel="noopener">GitHub</a>
      </div>
    </div>`;
}

renderHeader();
renderFooter();
