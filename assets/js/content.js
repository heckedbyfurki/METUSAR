/* ==========================================================
   EĞİTİM & REFERANS İÇERİKLERİ
   Siteye yeni video / kaynak eklemek için sadece bu dosyayı düzenleyin.
   HTML bilmenize gerek yok — mevcut bir satırı kopyalayıp değiştirin.
   ========================================================== */

/* Kategoriler — filtre butonları buradan oluşur */
const CATEGORIES = [
  "Temel Roketçilik",
  "Aerodinamik",
  "İtki",
  "Aviyonik",
  "Yapı & Mekanik",
  "Kurtarma Sistemi",
  "Simülasyon",
];

/* EĞİTİM VİDEOLARI
   youtube: YouTube linkindeki v= sonrasındaki kod (ör. https://youtu.be/ABC123 → "ABC123").
   Boş bırakırsanız kart "yakında" olarak görünür. */
const VIDEOS = [
  {
    title: "Roket Anatomisi: Burun Konisinden Nozula",
    description: "Bir model roketin ana alt sistemleri ve birbirleriyle ilişkisi. Yeni üyeler için başlangıç dersi.",
    category: "Temel Roketçilik",
    level: "Başlangıç",
    speaker: "",
    duration: "",
    youtube: "",
  },
  {
    title: "OpenRocket ile İlk Tasarım",
    description: "OpenRocket kurulumu, gövde/kanatçık tasarımı ve stabilite (CP–CG) kontrolü.",
    category: "Simülasyon",
    level: "Başlangıç",
    speaker: "",
    duration: "",
    youtube: "",
  },
  {
    title: "Uçuş Bilgisayarı ve Sensörler",
    description: "Barometre, IMU, GPS seçimi; ayrılma tetikleme mantığı ve telemetri.",
    category: "Aviyonik",
    level: "Orta",
    speaker: "",
    duration: "",
    youtube: "",
  },
  {
    title: "Paraşüt Boyutlandırma ve Kurtarma",
    description: "İniş hızı hesabı, drogue/ana paraşüt ve ayrılma mekanizmaları.",
    category: "Kurtarma Sistemi",
    level: "Orta",
    speaker: "",
    duration: "",
    youtube: "",
  },
];

/* EĞİTİM KAYNAKLARI — takımın kendi hazırladığı dokümanlar, sunumlar, ders notları
   link: Google Drive / PDF / GitHub vb. adres */
const TRAININGS = [
  {
    title: "TEKNOFEST 2025 Yarışma Süreci Özet ve Değerlendirme Raporu",
    description: "Takımın kuruluşundan atış gününe kadar tüm süreç: alt ekiplerin çalışmaları, montaj ve atış günü, hatalarımız ve sonraki takımlara tavsiyeler.",
    category: "Temel Roketçilik",
    type: "Rapor",
    link: "assets/docs/METUSAR-TEKNOFEST-2025-Degerlendirme-Raporu.pdf",
  },
  {
    title: "Yeni Üye Başlangıç Rehberi",
    description: "Takım yapısı, alt ekipler, kullanılan araçlar ve ilk hafta yapılacaklar.",
    category: "Temel Roketçilik",
    type: "Doküman",
    link: "",
  },
  {
    title: "Aerodinamik Sunumu — Kanatçık Tasarımı",
    description: "Kanatçık geometrisi, flutter ve stabilite marjı üzerine iç eğitim sunumu.",
    category: "Aerodinamik",
    type: "Sunum",
    link: "",
  },
  {
    title: "Kompozit Gövde Üretim Notları",
    description: "Karbon/cam elyaf sarım, kalıp hazırlığı ve atölye güvenliği.",
    category: "Yapı & Mekanik",
    type: "Ders Notu",
    link: "",
  },
];

/* REFERANSLAR — dış kaynaklar (kitap, yazılım, site, makale) */
const REFERENCES = [
  {
    title: "OpenRocket",
    description: "Ücretsiz, açık kaynak roket tasarım ve uçuş simülasyon yazılımı.",
    category: "Simülasyon",
    type: "Yazılım",
    link: "https://openrocket.info/",
  },
  {
    title: "RocketPy",
    description: "Python ile 6 serbestlik dereceli yüksek doğruluklu roket uçuş simülasyonu kütüphanesi.",
    category: "Simülasyon",
    type: "Yazılım",
    link: "https://github.com/RocketPy-Team/RocketPy",
  },
  {
    title: "NASA Glenn — Beginner's Guide to Rockets",
    description: "Roket fiziği, aerodinamik ve stabilite temelleri üzerine NASA eğitim sayfaları.",
    category: "Temel Roketçilik",
    type: "Web",
    link: "https://www.grc.nasa.gov/www/k-12/rocket/",
  },
  {
    title: "Rocket Propulsion Elements — G. P. Sutton & O. Biblarz",
    description: "Roket itkisi alanının temel ders kitabı: termodinamik, nozullar, katı/sıvı motorlar.",
    category: "İtki",
    type: "Kitap",
    link: "",
  },
  {
    title: "Richard Nakka's Experimental Rocketry",
    description: "Amatör katı yakıtlı motor tasarımı üzerine uzun soluklu ve detaylı bir kaynak.",
    category: "İtki",
    type: "Web",
    link: "https://www.nakka-rocketry.net/",
  },
  {
    title: "TEKNOFEST Roket Yarışması",
    description: "Yarışma şartnameleri, takvim ve başvuru bilgileri.",
    category: "Temel Roketçilik",
    type: "Yarışma",
    link: "https://www.teknofest.org/",
  },
  {
    title: "Tripoli Rocketry Association",
    description: "Yüksek güçlü roketçilik güvenlik kodları ve sertifikasyon süreçleri.",
    category: "Temel Roketçilik",
    type: "Web",
    link: "https://www.tripoli.org/",
  },
];
