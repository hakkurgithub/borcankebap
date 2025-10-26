// lib/menuData.ts (TÜM RESİM LİNKLERİ DÜZELTİLMİŞ HALİ)
export type MenuCategory =
  | "Kebaplar & Izgaralar"
  | "Pide & Lahmacun"
  | "Döner"
  | "Dürüm"
  | "Çorbalar"
  | "Yan Ürünler"
  | "Tatlılar"
  | "İçecekler";

export interface MenuItem {
  id: string;
  name: string;
  price: number;
  description: string;
  category: MenuCategory;
  image?: string;
  rating: number;
}

// CDN linkleri ile güncellenmiş tam liste
export const MENU_ITEMS: MenuItem[] = [
  {
    id: "k-01",
    name: "Adana Kebap (Porsiyon)",
    price: 450,
    description: "Özel baharatlı Adana kebap, pilav ve közlenmiş sebzelerle.",
    category: "Kebaplar & Izgaralar",
    image: "https://cdn.jsdelivr.net/gh/hakkurgithub/images@main/adana-porsiyon.jpg", // Düzeltildi
    rating: 5,
  },
  {
    id: "k-02",
    name: "Urfa Kebap (Porsiyon)",
    price: 450,
    description: "Acısız ve aromatik Urfa kebap; pilav ve garnitürle.",
    category: "Kebaplar & Izgaralar",
    image: "https://cdn.jsdelivr.net/gh/hakkurgithub/images@main/urfa-porsiyon.jpg", // Düzeltildi
    rating: 5,
  },
  {
    id: "k-03",
    name: "Beyti Sarma",
    price: 600,
    description: "Lavaş içinde beyti kebap; yoğurt ve tereyağı sosla.",
    category: "Kebaplar & Izgaralar",
    image: "https://cdn.jsdelivr.net/gh/hakkurgithub/images@main/beyti-sarma.jpg", // Düzeltildi
    rating: 5,
  },
  {
    id: "k-04",
    name: "Domatesli Kebap",
    price: 500,
    description: "Domates sosuyla zenginleştirilmiş kebap, pilav ve salatayla.",
    category: "Kebaplar & Izgaralar",
    image: "https://cdn.jsdelivr.net/gh/hakkurgithub/images@main/domatesli-kebap.jpg", // Düzeltildi
    rating: 5,
  },
  {
    id: "k-05",
    name: "Patlıcanlı Kebap (Porsiyon)",
    price: 500,
    description: "Köz patlıcanla servis edilen kebap.",
    category: "Kebaplar & Izgaralar",
    image: "https://cdn.jsdelivr.net/gh/hakkurgithub/images@main/patlicanli-kebap-porsiyon.jpg", // Düzeltildi
    rating: 5,
  },
  {
    id: "k-06",
    name: "Karışık Izgara",
    price: 800,
    description: "Adana, urfa, şiş ve köfte karışımı zengin tabak.",
    category: "Kebaplar & Izgaralar",
    image: "https://cdn.jsdelivr.net/gh/hakkurgithub/images@main/karisik-izgara.jpg", // Düzeltildi
    rating: 5,
  },
  {
    id: "k-07",
    name: "Köfte Izgara",
    price: 350,
    description: "Izgarada pişmiş el yapımı köfte, pilav ve yeşillikle.",
    category: "Kebaplar & Izgaralar",
    image: "https://cdn.jsdelivr.net/gh/hakkurgithub/images@main/izgara-kofte.jpeg", // Düzeltildi
    rating: 4,
  },
  {
    id: "k-08",
    name: "Çöp Şiş",
    price: 550,
    description: "İnce çubukta marine et; közde pişirilmiş.",
    category: "Kebaplar & Izgaralar",
    image: "https://cdn.jsdelivr.net/gh/hakkurgithub/images@main/cop-sis.jpg", // Düzeltildi
    rating: 5,
  },
  {
    id: "k-09",
    name: "Çöp Şiş (Porsiyon)",
    price: 550,
    description: "Bol porsiyon çöp şiş, pilav ve garnitürle.",
    category: "Kebaplar & Izgaralar",
    image: "https://cdn.jsdelivr.net/gh/hakkurgithub/images@main/cop-sis-porsiyon.jpeg", // Düzeltildi
    rating: 5,
  },
  {
    id: "k-10",
    name: "Yürek Porsiyon",
    price: 450,
    description: "Izgarada yürek; sumaklı soğan ve yeşillikle.",
    category: "Kebaplar & Izgaralar",
    image: "https://cdn.jsdelivr.net/gh/hakkurgithub/images@main/yurek-porsiyon.jpeg", // Düzeltildi
    rating: 5,
  },
  {
    id: "k-11",
    name: "Ciğer Porsiyon",
    price: 450,
    description: "Taze ciğer; ızgarada lokum kıvamında.",
    category: "Kebaplar & Izgaralar",
    image: "https://cdn.jsdelivr.net/gh/hakkurgithub/images@main/ciger-porsiyon.jpg", // Düzeltildi
    rating: 5,
  },
  {
    id: "k-12",
    name: "İskender Kebap",
    price: 500,
    description: "Tereyağı ve yoğurtla zenginleştirilmiş klasik iskender.",
    category: "Kebaplar & Izgaralar",
    image: "https://cdn.jsdelivr.net/gh/hakkurgithub/images@main/iskender-kebap.jpeg", // Düzeltildi
    rating: 5,
  },
  {
    id: "k-13",
    name: "Tavuk Şiş Porsiyon",
    price: 400,
    description: "Marine tavuk şiş; pilav ve salata ile.",
    category: "Kebaplar & Izgaralar",
    image: "https://cdn.jsdelivr.net/gh/hakkurgithub/images@main/tavuk-sis-porsiyon.jpg", // Düzeltildi
    rating: 4,
  },
  {
    id: "k-14",
    name: "Kanat Porsiyon",
    price: 300,
    description: "Izgarada pişmiş tavuk kanat porsiyonu.",
    category: "Kebaplar & Izgaralar",
    image: "https://cdn.jsdelivr.net/gh/hakkurgithub/images@main/kanat-porsiyon.jpeg", // Düzeltildi
    rating: 4,
  },
  {
    id: "dr-01",
    name: "Adana Dürüm",
    price: 250,
    description: "Lavaşta acılı Adana kebap, taze yeşillikle.",
    category: "Dürüm",
    image: "https://cdn.jsdelivr.net/gh/hakkurgithub/images@main/adana-durum.jpg", // Düzeltildi
    rating: 5,
  },
  {
    id: "dr-03",
    name: "Urfa Dürüm",
    price: 250,
    description: "Lavaşta urfa kebap.",
    category: "Dürüm",
    image: "https://cdn.jsdelivr.net/gh/hakkurgithub/images@main/urfa-durum.jpeg", // Düzeltildi (adana-durum.jpg idi)
    rating: 4,
  },
  {
    id: "dr-04",
    name: "Köfte Dürüm",
    price: 220,
    description: "Izgara köfte ile hazırlanan dürüm.",
    category: "Dürüm",
    image: "https://cdn.jsdelivr.net/gh/hakkurgithub/images@main/kofte-durum.jpg", // Düzeltildi
    rating: 4,
  },
  {
    id: "dr-05",
    name: "Çöp Şiş Dürüm",
    price: 250,
    description: "Çöp şiş ile hazırlanan dürüm.",
    category: "Dürüm",
    image: "https://cdn.jsdelivr.net/gh/hakkurgithub/images@main/cop-sis-durum.jpeg", // Düzeltildi
    rating: 5,
  },
  {
    id: "dr-06",
    name: "Ciğer Dürüm",
    price: 250,
    description: "Mangalda ciğer; lavaşta enfes.",
    category: "Dürüm",
    image: "https://cdn.jsdelivr.net/gh/hakkurgithub/images@main/ciger-durum.jpeg", // Düzeltildi
    rating: 5,
  },
  {
    id: "dr-07",
    name: "Yürek Dürüm",
    price: 240,
    description: "Izgara yürek ile dürüm.",
    category: "Dürüm",
    image: "https://cdn.jsdelivr.net/gh/hakkurgithub/images@main/yurek-durum.jpeg", // Düzeltildi
    rating: 5,
  },
  {
    id: "dr-08",
    name: "Tavuk Şiş Dürüm",
    price: 250,
    description: "Marine tavuk şiş ile dürüm.",
    category: "Dürüm",
    image: "https://cdn.jsdelivr.net/gh/hakkurgithub/images@main/tavuk-sis-durum.png", // Düzeltildi
    rating: 5,
  },
  {
    id: "dr-09",
    name: "Et Şiş Dürüm",
    price: 350,
    description: "Et şiş ile hazırlanan dürüm.",
    category: "Dürüm",
    image: "https://cdn.jsdelivr.net/gh/hakkurgithub/images@main/et-sis-durum.png", // Düzeltildi
    rating: 5,
  },
  {
    id: "dr-10",
    name: "Kanat Dürüm",
    price: 200,
    description: "Tavuk kanat ile hazırlanan dürüm.",
    category: "Dürüm",
    image: "https://cdn.jsdelivr.net/gh/hakkurgithub/images@main/tavuk-kanat-durum.png", // Düzeltildi
    rating: 4,
  },
  {
    id: "dr-11",
    name: "Dürüm Döner",
    price: 300,
    description: "Lavaşta döner; sos ve yeşillikle.",
    category: "Dürüm",
    image: "https://cdn.jsdelivr.net/gh/hakkurgithub/images@main/durum-doner.png", // Düzeltildi
    rating: 5,
  },
  {
    id: "dr-12",
    name: "Tavuk Şiş Dürüm (Alternatif)",
    price: 250,
    description: "Alternatif görsel ile tavuk şiş dürüm.",
    category: "Dürüm",
    image: "https://cdn.jsdelivr.net/gh/hakkurgithub/images@main/tavuk-sis-durum.jpg", // Düzeltildi
    rating: 5,
  },
  {
    id: "d-01",
    name: "Porsiyon Et Döner",
    price: 500,
    description: "Seçme etlerden döner; pilav ve salatayla.",
    category: "Döner",
    image: "https://cdn.jsdelivr.net/gh/hakkurgithub/images@main/porsiyon-et-doner.jpg", // Düzeltildi
    rating: 5,
  },
  {
    id: "d-02",
    name: "Pilav Üstü Et Döner",
    price: 450,
    description: "Pilav üzerinde nefis et döner.",
    category: "Döner",
    image: "https://cdn.jsdelivr.net/gh/hakkurgithub/images@main/pilav-ustu-et-doner.jpg", // Düzeltildi
    rating: 5,
  },
  {
    id: "d-03",
    name: "Ekmek Arası Döner",
    price: 250,
    description: "Taze ekmek arasında döner lezzeti.",
    category: "Döner",
    image: "https://cdn.jsdelivr.net/gh/hakkurgithub/images@main/ekmek-arasi-doner.jpg", // Düzeltildi
    rating: 5,
  },
  {
    id: "d-04",
    name: "Tavuk Döner (Porsiyon)",
    price: 400,
    description: "Tavuk döner; pilav ve garnitürle.",
    category: "Döner",
    image: "https://cdn.jsdelivr.net/gh/hakkurgithub/images@main/tavuk-doner.jpg", // Düzeltildi
    rating: 5,
  },
  {
    id: "d-05",
    name: "Çifte Döner",
    price: 550,
    description: "Et ve tavuk döner karışımı.",
    category: "Döner",
    image: "https://cdn.jsdelivr.net/gh/hakkurgithub/images@main/cifte-doner.png", // Düzeltildi
    rating: 5,
  },
  {
    id: "p-01",
    name: "Lahmacun",
    price: 130,
    description: "İnce hamurda özel kıymalı harç.",
    category: "Pide & Lahmacun",
    image: "https://cdn.jsdelivr.net/gh/hakkurgithub/images@main/lahmacun.jpg", // Düzeltildi
    rating: 5,
  },
  {
    id: "p-02",
    name: "Cevizli Lahmacun",
    price: 160,
    description: "Kıymalı harca ceviz dokunuşu.",
    category: "Pide & Lahmacun",
    image: "https://cdn.jsdelivr.net/gh/hakkurgithub/images@main/cevizli-lahmacun.jpg", // Düzeltildi
    rating: 5,
  },
  {
    id: "p-03",
    name: "Cevizli Nar Ekşili Lahmacun",
    price: 170,
    description: "Ceviz ve nar ekşisiyle zenginleştirilmiş.",
    category: "Pide & Lahmacun",
    image: "https://cdn.jsdelivr.net/gh/hakkurgithub/images@main/cevizli-nar-eksili-lahmacun.jpg", // Düzeltildi
    rating: 5,
  },
  {
    id: "p-04",
    name: "Karışık Pide",
    price: 400,
    description: "Sucuk, kaşar, kıyma ve yumurta karışımı.",
    category: "Pide & Lahmacun",
    image: "https://cdn.jsdelivr.net/gh/hakkurgithub/images@main/karisik-pide.jpeg", // Düzeltildi
    rating: 5,
  },
  {
    id: "p-05",
    name: "Kaşarlı Peynirli Pide",
    price: 400,
    description: "Bol kaşarlı, çıtır kenarlı.",
    category: "Pide & Lahmacun",
    image: "https://cdn.jsdelivr.net/gh/hakkurgithub/images@main/kasarli-peynirli-pide.jpg", // Düzeltildi
    rating: 5,
  },
  {
    id: "p-06",
    name: "Sucuklu Kaşarlı Pide",
    price: 380,
    description: "Sucuk ve kaşarın uyumu.",
    category: "Pide & Lahmacun",
    image: "https://cdn.jsdelivr.net/gh/hakkurgithub/images@main/sucuklu-kasarli-pide.jpg", // Düzeltildi
    rating: 5,
  },
  {
    id: "p-07",
    name: "Kıymalı Pide",
    price: 420,
    description: "Baharatlı kıyma ile hazırlanan klasik pide.",
    category: "Pide & Lahmacun",
    image: "https://cdn.jsdelivr.net/gh/hakkurgithub/images@main/kiymali-pide.jpg", // Düzeltildi
    rating: 5,
  },
  {
    id: "p-08",
    name: "Kıyma Kaşarlı Pide",
    price: 450,
    description: "Kıyma ve kaşar, zengin içerik.",
    category: "Pide & Lahmacun",
    image: "https://cdn.jsdelivr.net/gh/hakkurgithub/images@main/kiyma-kasarli-pide.jpg", // Düzeltildi
    rating: 5,
  },
  {
    id: "p-09",
    name: "Kavurmalı Pide",
    price: 450,
    description: "Bol kavurmalı, doyurucu pide.",
    category: "Pide & Lahmacun",
    image: "https://cdn.jsdelivr.net/gh/hakkurgithub/images@main/kavurmali-pide.jpg", // Düzeltildi
    rating: 5,
  },
  {
    id: "p-10",
    name: "Kavurma Kaşarlı Pide",
    price: 470,
    description: "Kavurma ve kaşarın eşsiz birlikteliği.",
    category: "Pide & Lahmacun",
    image: "https://cdn.jsdelivr.net/gh/hakkurgithub/images@main/kavurma-kasarli-pide.jpg", // Düzeltildi
    rating: 5,
  },
  {
    id: "p-11",
    name: "Kuşbaşılı Pide",
    price: 450,
    description: "Kuşbaşı et ile hazırlanan pide.",
    category: "Pide & Lahmacun",
    image: "https://cdn.jsdelivr.net/gh/hakkurgithub/images@main/kusbasili-pide.jpg", // Düzeltildi
    rating: 5,
  },
  {
    id: "p-13",
    name: "Kuşbaşı Kaşarlı Pide",
    price: 470,
    description: "Kuşbaşı et + kaşar.",
    category: "Pide & Lahmacun",
    image: "https://cdn.jsdelivr.net/gh/hakkurgithub/images@main/kusbasi-kasarli-pide.jpg", // Düzeltildi
    rating: 5,
  },
  {
    id: "c-01",
    name: "Mercimek Çorbası",
    price: 40,
    description: "Geleneksel kırmızı mercimek çorbası.",
    category: "Çorbalar",
    image: "https://cdn.jsdelivr.net/gh/hakkurgithub/images@main/mercimek-corbasi.jpg", // Düzeltildi
    rating: 5,
  },
  {
    id: "y-01",
    name: "Mevsim Salata",
    price: 50,
    description: "Taze sebzelerle hafif ve ferah.",
    category: "Yan Ürünler",
    image: "https://cdn.jsdelivr.net/gh/hakkurgithub/images@main/salata.jpg", // Düzeltildi
    rating: 5,
  },
  {
    id: "y-02",
    name: "İçli Köfte",
    price: 80,
    description: "Dışı çıtır, içi bol kıymalı.",
    category: "Yan Ürünler",
    image: "https://cdn.jsdelivr.net/gh/hakkurgithub/images@main/icli-kofte.jpg", // Düzeltildi
    rating: 5,
  },
  {
    id: "y-03",
    name: "Çiğ Köfte (Porsiyon)",
    price: 120,
    description: "El yapımı çiğ köfte, yeşillik ve nar ekşisi ile.",
    category: "Yan Ürünler",
    image: "https://cdn.jsdelivr.net/gh/hakkurgithub/images@main/cig-kofte-porsiyon.jpeg", // Düzeltildi
    rating: 5,
  },
  {
    id: "t-01",
    name: "Künefe",
    price: 90,
    description: "Peynirli tel kadayıf tatlısı; sıcak servis.",
    category: "Tatlılar",
    image: "https://cdn.jsdelivr.net/gh/hakkurgithub/images@main/kunefe.jpeg", // Düzeltildi
    rating: 5,
  },
  {
    id: "t-02",
    name: "Fırın Sütlaç",
    price: 60,
    description: "Klasik fırın sütlaç; tarçınla.",
    category: "Tatlılar",
    image: "https://cdn.jsdelivr.net/gh/hakkurgithub/images@main/firin-sutlac.jpeg", // Düzeltildi
    rating: 5,
  },
  {
    id: "i-01",
    name: "Açık Ayran",
    price: 25,
    description: "Ferahlatan ev yapımı ayran.",
    category: "İçecekler",
    image: "https://cdn.jsdelivr.net/gh/hakkurgithub/images@main/acik-ayran.jpg", // Düzeltildi
    rating: 5,
  },
  {
    id: "i-02",
    name: "Sade Soda",
    price: 20,
    description: "Doğal maden suyu.",
    category: "İçecekler",
    image: "https://cdn.jsdelivr.net/gh/hakkurgithub/images@main/sade-soda.jpeg", // Düzeltildi
    rating: 5,
  },
  {
    id: "i-03",
    name: "Şalgam",
    price: 25,
    description: "Adana usulü; acılı/acıssız seçenek.",
    category: "İçecekler",
    image: "https://cdn.jsdelivr.net/gh/hakkurgithub/images@main/salgam.jpg", // Düzeltildi
    rating: 5,
  },
  {
    id: "i-04",
    name: "Su",
    price: 10,
    description: "Soğuk içme suyu.",
    category: "İçecekler",
    image: "https://cdn.jsdelivr.net/gh/hakkurgithub/images@main/su.jpg", // Düzeltildi
    rating: 5,
  },
  {
    id: "i-05",
    name: "Meyveli Soda",
    price: 25,
    description: "Çeşitli aromalarda ferahlatıcı soda.",
    category: "İçecekler",
    image: "httpsC:\Users\Admin\AppData\Local\Temp\gemini-temp-vj4m4.tmp", // Düzeltildi
    rating: 5,
  },
  {
    id: "i-06",
    name: "Meyve Suyu",
    price: 25,
    description: "Soğuk, taze meyve suları.",
    category: "İçecekler",
    image: "https://cdn.jsdelivr.net/gh/hakkurgithub/images@main/meyve-suyu.jpeg", // Düzeltildi
    rating: 5,
  },
  {
    id: "i-07",
    name: "Kola / Fanta / Sprite",
    price: 25,
    description: "Popüler gazlı içecekler.",
    category: "İçecekler",
    image: "https://cdn.jsdelivr.net/gh/hakkurgithub/images@main/cola-fanta-sprite.jpeg", // Düzeltildi
    rating: 5,
  }
];