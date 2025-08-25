'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useContent } from '../../hooks/useContent';

export default function MenuPage() {
  const { content } = useContent();
  const [selectedCategory, setSelectedCategory] = useState('Tümü');
  
  const categories = ['Tümü', ...Array.from(new Set(content.allMenuItems?.map(item => item.category) || []))];
  
  const filteredItems = selectedCategory === 'Tümü' 
    ? content.allMenuItems || []
    : content.allMenuItems?.filter(item => item.category === selectedCategory) || [];

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-orange-50">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center font-bold text-black text-xl border-2 border-black">
                  BK
                </div>
                <span className="text-2xl font-bold text-red-600 font-['Pacifico']">
                  Borcan Kebap
                </span>
              </Link>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-red-600 font-medium transition-colors cursor-pointer">
                Ana Sayfa
              </Link>
              <Link href="/menu" className="text-red-600 font-medium">
                Menü
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-red-600 font-medium transition-colors cursor-pointer">
                Hakkımızda
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-red-600 font-medium transition-colors cursor-pointer">
                İletişim
              </Link>
              <Link href="/reservation" className="text-red-600 hover:text-red-700 font-medium transition-colors cursor-pointer">
                Rezervasyon
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 bg-cover bg-center" style={{ backgroundImage: `url('https://readdy.ai/api/search-image?query=Traditional%20Turkish%20restaurant%20menu%20display%20with%20various%20kebab%20dishes%2C%20authentic%20Turkish%20cuisine%20presentation%2C%20warm%20restaurant%20atmosphere%2C%20menu%20items%20beautifully%20arranged&width=1920&height=600&seq=menu_hero&orientation=landscape')` }}>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Lezzetli Menümüz</h1>
          <p className="text-xl">Geleneksel Türk mutfağının en seçkin lezzetleri</p>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-colors cursor-pointer whitespace-nowrap ${
                  selectedCategory === category
                    ? 'bg-red-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-red-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Menu Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url('${item.image}')` }}></div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
                    <div className="flex items-center text-yellow-500">
                      {[...Array(item.rating)].map((_, i) => (
                        <i key={i} className="ri-star-fill text-sm"></i>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-red-600">₺{item.price}</span>
                    <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                      {item.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">Bu kategoride henüz menü öğesi bulunmuyor.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Sipariş Vermek İster Misiniz?</h2>
          <p className="text-xl mb-8">Favori lezzetlerinizi hemen sipariş edin!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="bg-white text-red-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer">
              Online Sipariş Ver
            </Link>
            <Link href="/reservation" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-red-600 transition-colors whitespace-nowrap cursor-pointer">
              Rezervasyon Yap
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center space-x-3">
                <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center font-bold text-black text-lg border-2 border-black">
                  BK
                </div>
                <span className="font-['Pacifico']">
                  Borcan Kebap
                </span>
              </h3>
              <p className="text-gray-400 mb-4">
                Geleneksel Türk mutfağının eşsiz lezzetlerini modern sunum ile buluşturuyoruz.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Hızlı Linkler</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                    Ana Sayfa
                  </Link>
                </li>
                <li>
                  <Link href="/menu" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                    Menü
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                    Hakkımızda
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                    İletişim
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">İletişim</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <i className="ri-phone-line mr-2"></i>
                  {content.phone}
                </li>
                <li className="flex items-center">
                  <i className="ri-mail-line mr-2"></i>
                  info@borcankebap.com
                </li>
                <li className="flex items-start">
                  <i className="ri-map-pin-line mr-2 mt-1"></i>
                  {content.address}
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Takip Edin</h4>
              <div className="flex space-x-4">
                <a href={content.socialMedia?.facebook} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-700 transition-colors">
                  <i className="ri-facebook-fill text-lg"></i>
                </a>
                <a href={content.socialMedia?.instagram} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-600 rounded-full flex items-center justify-center cursor-pointer hover:from-purple-700 hover:via-pink-700 hover:to-orange-700 transition-all">
                  <i className="ri-instagram-fill text-lg"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Borcan Kebap. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}