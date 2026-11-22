# METUSAR — ODTÜ Roket Takımı Web Sitesi

Sade HTML/CSS/JS ile yazılmış statik bir site. Derleme adımı yok; GitHub Pages ile doğrudan yayınlanır.

## Sayfalar

| Dosya | Sekme | İçerik |
|---|---|---|
| `index.html` | Ana Sayfa | Giriş, rakamlar, amacımız |
| `hakkimizda.html` | Hakkımızda | Hikâye, misyon/vizyon, alt ekipler |
| `yarismalar.html` | Yarışmalar | Geçmiş ve önümüzdeki yarışmalar; roket 3D modeli, takım ve fotoğraf galerisi |
| `yol-haritasi.html` | Yol Haritası | Orta vade planlar, ODTÜ'de yapmak istediklerimiz |
| `egitim.html` | Eğitim | Eğitim videoları ve takım dokümanları |
| `referanslar.html` | Referanslar | Kitap, yazılım ve dış kaynaklar |

## İçerik nasıl güncellenir?

- **Video / eğitim dokümanı / referans eklemek:** sadece `assets/js/content.js` dosyasını düzenleyin. Mevcut bir öğeyi kopyalayıp değiştirmeniz yeterli; sayfalar otomatik güncellenir.
- **Yarışma eklemek / güncellemek:** `assets/js/yarismalar.js` içindeki `COMPETITIONS` listesine mevcut bir bloğu kopyalayarak ekleyin.
- **Yarışma fotoğrafı eklemek:** fotoğrafı `assets/img/yarisma_galerisi/<yıl>_teknofest_<kategori>/` klasörüne koyun, ardından `assets/js/yarismalar.js` içindeki ilgili yarışmanın `gallery.photos` listesine dosya adını yazın (liste sırası galerideki sıradır).
- **Menüye sekme eklemek:** `assets/js/main.js` içindeki `NAV` listesine bir satır ekleyin.
- **Renkler:** `assets/css/style.css` başındaki `:root` değişkenleri.
- Turuncu kesikli kutular (`<span class="todo">…</span>`) doldurulması gereken yerlerdir; içeriği yazınca `span`'ı silin.

## Yerelde açmak

`index.html` dosyasını tarayıcıda açmanız yeterli.

## Yayınlama (GitHub Pages)

Repo → **Settings → Pages → Build and deployment → Source: Deploy from a branch → Branch: `main` / `(root)`** → Save.
Birkaç dakika sonra site `https://mbedilsah-tech.github.io/metusar/` adresinde yayında olur.

## Güncelleme sonrası önbellek

`style.css` veya bir `.js` dosyasını değiştirdiğinizde, tüm `.html` dosyalarındaki `?v=...` değerini (örn. tarih: `?v=20261108`) yeni bir değerle değiştirin. Böylece ziyaretçilerin tarayıcısı eski dosyayı önbellekten kullanmaz, yenisini indirir.
