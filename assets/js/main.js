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

const LOGO = `<img class="brand-mark" src="assets/img/logo-mark.svg" alt="" width="34" height="34">`;

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
      <button class="nav-toggle" aria-label="Menüyü aç" aria-expanded="false">☰</button>
      <ul class="nav-links">${links}</ul>
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
        <a href="https://www.instagram.com/metu__sar/" target="_blank" rel="noopener">Instagram</a>
        <a href="https://www.linkedin.com/company/metusar-roket-tak%C4%B1m%C4%B1/" target="_blank" rel="noopener">LinkedIn</a>
        <a href="https://www.youtube.com/@METUSARRoketTak%C4%B1m%C4%B1" target="_blank" rel="noopener">YouTube</a>
        <!-- E-posta ve GitHub hazır olunca buraya eklenecek:
        <a href="mailto:...">E-posta</a>
        <a href="https://github.com/..." target="_blank" rel="noopener">GitHub</a> -->
      </div>
    </div>`;
}

renderHeader();
renderFooter();

// Fotoğraf bandı: görseller henüz yüklenmemişse boş kutu göstermek yerine bölümü gizle
document.querySelectorAll(".photo-band").forEach((band) => {
  const photos = band.querySelectorAll(".photo");
  let ok = 0;
  band.hidden = true;
  photos.forEach((ph) => {
    const url = (ph.style.backgroundImage.match(/url\(["']?(.*?)["']?\)/) || [])[1];
    if (!url) return;
    const img = new Image();
    img.onload = () => { if (++ok === photos.length) band.hidden = false; };
    img.src = url;
  });
});
