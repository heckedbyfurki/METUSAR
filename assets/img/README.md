Görseller

- logo.svg — tam logo, beyaz/açık zemin için (baskı, belge vb. için de bunu kullanın)
- logo-dark-bg.svg — tam logo, koyu zemin için (alt yazı açık renk) — ana sayfa girişi
- logo-mark.svg — sadece amblem, yazısız — üst menü
- logo-mark.png — amblemin 256 px PNG hali — tarayıcı sekme simgesi
- roket-1.jpg — rampadan kalkış fotoğrafı (fotoğraf bandı)
- ucus-poster.jpg — video yüklenene kadar görünen kare
- roket-2.jpg — gökyüzünde yükseliş fotoğrafı (fotoğraf bandı)

Uçuş videosu: assets/video/ucus.mp4 — orijinal videonun 7.–25. saniyeleri, sessiz, ~1 MB. Değiştirirken 2–3 MB altında tutun.

## Yarışma galerisi

Her yarışma için ayrı bir klasör: `<yıl>_teknofest_<kategori>`, ör. `2026_teknofest_zorlu_gorev`.

- Fotoğrafları ilgili klasöre kopyalayın, sonra `assets/js/yarismalar.js` içindeki o yarışmanın
  `gallery.photos` listesine dosya adlarını yazın (yazdığınız sıra galerideki sıradır).
- Klasör boşken (yalnızca `.gitkeep`) yarışma penceresinde "Yarışma fotoğrafları yakında eklenecek" notu görünür.
- Yüklemeden önce fotoğrafları ~1600 px genişliğe küçültüp sıkıştırın; tek kare birkaç yüz KB'ı geçmesin.
  (17 MB'lık `RHPF1087.JPG` gibi orijinal kareler sayfayı yavaşlatır.)
- Dosya adlarında boşluk olabilir; adresi tarayıcı için `encodeURI` ile kodluyoruz, ek işlem gerekmez.
