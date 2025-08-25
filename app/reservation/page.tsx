'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useContent } from '../../hooks/useContent';

export default function ReservationPage() {
  const { content } = useContent();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: '2',
        message: ''
      });
    }, 5000);
  };

  const getMinDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

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
              <Link href="/menu" className="text-gray-700 hover:text-red-600 font-medium transition-colors cursor-pointer">
                Menü
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-red-600 font-medium transition-colors cursor-pointer">
                Hakkımızda
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-red-600 font-medium transition-colors cursor-pointer">
                İletişim
              </Link>
              <Link href="/reservation" className="text-red-600 font-medium">
                Rezervasyon
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 bg-cover bg-center" style={{ backgroundImage: `url('https://readdy.ai/api/search-image?query=Elegant%20restaurant%20dining%20room%20setup%20for%20reservation%2C%20beautifully%20set%20tables%20with%20proper%20lighting%2C%20upscale%20Turkish%20restaurant%20interior%2C%20welcoming%20atmosphere%20for%20dining%20reservations&width=1920&height=600&seq=reservation_hero&orientation=landscape')` }}>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Rezervasyon</h1>
          <p className="text-xl">Masanızı ayırtın ve özel anlarınızı bizimle paylaşın</p>
        </div>
      </section>

      {/* Reservation Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Rezervasyon Yap</h2>
              <p className="text-lg text-gray-600">
                Lezzetli yemeklerimizi rahat bir ortamda deneyimlemek için masanızı ayırtın
              </p>
            </div>

            {isSubmitted ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                <i className="ri-check-circle-line text-6xl text-green-600 mb-6 block"></i>
                <h3 className="text-2xl font-semibold text-green-800 mb-4">Rezervasyonunuz Alındı!</h3>
                <p className="text-green-600 mb-4">
                  Rezervasyon talebiniz başarıyla iletildi. En kısa sürede sizinle iletişime geçerek 
                  rezervasyonunuzu onaylayacağız.
                </p>
                <p className="text-sm text-green-600">
                  Acil durumlar için: {content.phone}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} id="reservation-form" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Adınız Soyadınız *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="Adınız ve soyadınız"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      E-posta Adresiniz *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="ornek@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Telefon Numaranız *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="0532 000 00 00"
                    />
                  </div>

                  <div>
                    <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-2">
                      Kişi Sayısı *
                    </label>
                    <select
                      id="guests"
                      name="guests"
                      value={formData.guests}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent pr-8"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                        <option key={num} value={num}>{num} Kişi</option>
                      ))}
                      <option value="10+">10+ Kişi (Grup Rezervasyonu)</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                      Tarih *
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      min={getMinDate()}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-2">
                      Saat *
                    </label>
                    <select
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent pr-8"
                    >
                      <option value="">Saat seçiniz</option>
                      <option value="11:00">11:00</option>
                      <option value="11:30">11:30</option>
                      <option value="12:00">12:00</option>
                      <option value="12:30">12:30</option>
                      <option value="13:00">13:00</option>
                      <option value="13:30">13:30</option>
                      <option value="14:00">14:00</option>
                      <option value="14:30">14:30</option>
                      <option value="15:00">15:00</option>
                      <option value="18:00">18:00</option>
                      <option value="18:30">18:30</option>
                      <option value="19:00">19:00</option>
                      <option value="19:30">19:30</option>
                      <option value="20:00">20:00</option>
                      <option value="20:30">20:30</option>
                      <option value="21:00">21:00</option>
                      <option value="21:30">21:30</option>
                      <option value="22:00">22:00</option>
                      <option value="22:30">22:30</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Özel İstekleriniz
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    maxLength={500}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none"
                    placeholder="Özel gün kutlaması, diyet kısıtlamaları vb. varsa belirtiniz... (maksimum 500 karakter)"
                  />
                  <div className="text-right text-sm text-gray-500 mt-1">
                    {formData.message.length}/500
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <div className="flex items-start">
                    <i className="ri-information-line text-yellow-600 text-xl mt-1 mr-3"></i>
                    <div className="text-sm text-yellow-800">
                      <p className="font-semibold mb-2">Rezervasyon Bilgileri:</p>
                      <ul className="space-y-1">
                        <li>• Rezervasyonlar en az 2 saat önceden yapılmalıdır</li>
                        <li>• 10 ve üzeri kişilik rezervasyonlar için lütfen telefonla iletişime geçin</li>
                        <li>• Rezervasyon onayı için sizinle iletişime geçilecektir</li>
                        <li>• İptal işlemleri için en az 2 saat önceden haber veriniz</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-600 text-white py-4 px-6 rounded-lg text-lg font-semibold hover:bg-red-700 transition-colors cursor-pointer whitespace-nowrap"
                >
                  Rezervasyon Yap
                </button>

                <div className="text-center">
                  <p className="text-sm text-gray-600">
                    Acil rezervasyon için:{' '}
                    <a 
                      href={`tel:${content.phone}`}
                      className="text-red-600 hover:text-red-700 font-medium"
                    >
                      {content.phone}
                    </a>
                    {' '}veya{' '}
                    <a 
                      href="https://wa.me/905455093462?text=Merhaba! Rezervasyon yapmak istiyorum."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 hover:text-green-700 font-medium"
                    >
                      WhatsApp
                    </a>
                  </p>
                </div>
              </form>
            )}
          </div>

          {/* Additional Info */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-time-line text-2xl text-red-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Çalışma Saatleri</h3>
              <p className="text-gray-600">
                Pazartesi - Pazar<br />
                11:00 - 23:00
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-group-line text-2xl text-orange-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Grup Rezervasyonu</h3>
              <p className="text-gray-600">
                10+ kişilik gruplar için<br />
                özel menü seçenekleri
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-gift-line text-2xl text-green-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Özel Günler</h3>
              <p className="text-gray-600">
                Doğum günü, evlilik yıldönümü<br />
                gibi özel günleriniz için
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
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