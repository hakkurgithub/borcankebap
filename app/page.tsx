'use client';

import Image from 'next/image';
import { useContent } from "@/hooks/useContent";

export default function Home() {
  const { content } = useContent();

  return (
    <div className="relative min-h-screen bg-gray-50">
      
      {/* Hero Section */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center text-center overflow-hidden bg-gradient-to-br from-red-800 to-red-600 p-4">
        
        {/* Metin Bölümü (Başlık ve Alt Başlık) */}
        {/* Butonlardan ve logodan önce görünmesi için bu bölümü üste aldık. */}
        <div className="relative z-10 text-white max-w-4xl mx-auto flex flex-col items-center justify-center mb-8 mt-20"> {/* mt-24'ü logonun boyutuyla dengelemek için biraz ayarlandı */}
          <h1 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg">
            {content.restaurantName || "Borcan Kebap"}
          </h1>
          <p className="text-xl md:text-3xl mb-8 drop-shadow-md">
            {content.heroSubtitle || "Geleneksel Türk Lezzetleri"}
          </p>
        </div>

        {/* === GÜNCELLENEN ALAN === */}
        {/* Görsel ve Butonlar için Yatay Kapsayıcı */}
        {/* Mobilde: flex-col (alt alta)
          Masaüstünde (md): flex-row (yan yana)
        */}
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 w-full max-w-6xl px-4">
          
          {/* Sol Buton: Menüyü Gör */}
          <a
            href="/menu"
            className="bg-gray-800 bg-opacity-70 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-700 transition-colors shadow-lg 
                       order-2 md:order-1 w-full sm:w-auto" // Mobilde 2. sırada, Masaüstünde 1. sırada (solda)
          >
            Menüyü Gör
          </a>
          
          {/* Orta Görsel: Logo */}
          <div className="relative z-10 order-1 md:order-2"> {/* Mobilde 1. sırada (en üstte), Masaüstünde 2. sırada (ortada) */}
            <Image
              src="https://cdn.jsdelivr.net/gh/hakkurgithub/images@main/hero.png"
              alt="Borcan Kebap Alevli Logo"
              width={350} // Genişlik korundu
              height={350} // Yükseklik korundu
              className="mx-auto drop-shadow-lg object-contain"
              priority
            />
          </div>

          {/* Sağ Buton: Rezervasyon Yap */}
          <a
            href="/reservation"
            className="bg-yellow-500 text-gray-900 px-8 py-3 rounded-full text-lg font-semibold hover:bg-yellow-600 transition-colors shadow-lg 
                       order-3 md:order-3 w-full sm:w-auto" // Mobilde 3. sırada, Masaüstünde 3. sırada (sağda)
          >
            Rezervasyon Yap
          </a>
        </div>
        {/* === GÜNCELLEME BİTTİ === */}

      </section>

      {/* Hakkımızda, Popüler Lezzetler, Bize Ulaşın bölümleri */}
      {/* Bu bölümlerde bir değişiklik yapılmadı */}
      
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
                src={item.image || "/images/placeholder.jpg"}
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
