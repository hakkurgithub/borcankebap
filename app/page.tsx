'use client';

import Image from 'next/image';
import { useContent } from "@/hooks/useContent";

export default function Home() {
  const { content } = useContent();

  return (
    <div className="relative min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center text-center overflow-hidden">
        {/* Arka Plan Resmi */}
        <Image
          src="https://cdn.jsdelivr.net/gh/hakkurgithub/images@main/hero.png" // ✅ Yeni hero görsel linki
          alt="Borcan Kebap Ekibi ve Lezzetleri"
          fill // Konteyneri doldurur
          priority // Ana görsel olduğu için öncelikli yükle
          className="object-cover brightness-75 object-top" // ✅ Resmi yukarı doğru hizala ve karart
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
        />

        {/* Metin ve İçerik (Metinlerin tam ortada kalması için) */}
        <div className="relative z-10 text-white p-4 max-w-4xl mx-auto flex flex-col items-center justify-center h-full"> {/* ✅ h-full ve justify-center eklendi */}
          <h1 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg">
            {content.restaurantName || "Borcan Kebap"}
          </h1>
          <p className="text-xl md:text-3xl mb-8 drop-shadow-md">
            {content.heroSubtitle || "Geleneksel Türk Lezzetleri"}
          </p>
          <div className="flex flex-col sm:flex-row gap-4"> {/* Butonları yan yana veya alt alta tutmak için */}
            <a
              href="/menu"
              className="bg-red-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-red-700 transition-colors shadow-lg"
            >
              Menüyü Gör
            </a>
            {/* Rezervasyon Yap butonu, eğer aktifse */}
            {/* <a
              href="/reservation" // Rezervasyon sayfanızın yolu
              className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
            >
              Rezervasyon Yap
            </a> */}
          </div>
        </div>
      </section>

      {/* Hakkımızda, Popüler Lezzetler, Bize Ulaşın bölümleri (önceki gibi kalabilir veya silebilirsiniz) */}
      
      {/* Örnek: Hakkımızda Bölümü */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-3xl font-bold text-red-600 mb-6">Hakkımızda</h2>
        <p className="max-w-3xl mx-auto px-4 text-gray-700">
          {content.aboutText || 'Ailemizin 40 yıllık deneyimi ile size en lezzetli kebapları sunuyoruz.'}
        </p>
      </section>

      {/* Örnek: Popüler Lezzetler */}
      <section className="py-16 bg-gray-100">
        <h2 className="text-3xl font-bold text-center text-red-600 mb-8">Popüler Lezzetler</h2>
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {content.menuItems?.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <Image
                src={item.image || "/images/placeholder.jpg"} // Eğer item.image yoksa varsayılan bir görsel kullan
                alt={item.name}
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                <span className="text-lg font-bold text-red-600">{item.price}₺</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* İletişim Bilgileri */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-3xl font-bold text-red-600 mb-6">Bize Ulaşın</h2>
        <p className="text-gray-700 mb-2">Telefon: {content.phone}</p>
        <p className="text-gray-700">{content.address}</p>
      </section>

    </div>
  );
}