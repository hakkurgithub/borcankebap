'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useContent } from '../../hooks/useContent';

export default function ContactPage() {
  const { content } = useContent();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 3000);
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
              <Link href="/contact" className="text-red-600 font-medium">
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
      <section className="relative py-20 bg-cover bg-center" style={{ backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20restaurant%20contact%20and%20communication%20concept%2C%20professional%20customer%20service%2C%20elegant%20restaurant%20interior%20with%20contact%20information%20display%2C%20welcoming%20atmosphere&width=1920&height=600&seq=contact_hero&orientation=landscape')` }}>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">İletişim</h1>
          <p className="text-xl">Bizimle iletişime geçin</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Bize Ulaşın</h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <i className="ri-map-pin-line text-xl text-red-600"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Adres</h3>
                    <p className="text-gray-600">{content.address}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <i className="ri-phone-line text-xl text-red-600"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Telefon</h3>
                    <p className="text-gray-600">{content.phone}</p>
                    <p className="text-gray-600">0545 509 3462</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <i className="ri-whatsapp-line text-xl text-red-600"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">WhatsApp</h3>
                    <p className="text-gray-600">0545 509 3462</p>
                    <a 
                      href="https://wa.me/905455093462?text=Merhaba! Borcan Kebap hakkında bilgi almak istiyorum."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 hover:text-green-700 cursor-pointer"
                    >
                      Mesaj Gönder
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <i className="ri-mail-line text-xl text-red-600"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">E-posta</h3>
                    <p className="text-gray-600">info@borcankebap.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <i className="ri-time-line text-xl text-red-600"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Çalışma Saatleri</h3>
                    <div className="text-gray-600 space-y-1">
                      <p>Pazartesi - Pazar: 11:00 - 23:00</p>
                      <p>Kesintisiz hizmet</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Sosyal Medya</h3>
                <div className="flex space-x-4">
                  <a 
                    href={content.socialMedia?.facebook} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-700 transition-colors"
                  >
                    <i className="ri-facebook-fill text-lg text-white"></i>
                  </a>
                  <a 
                    href={content.socialMedia?.instagram} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-600 rounded-full flex items-center justify-center cursor-pointer hover:from-purple-700 hover:via-pink-700 hover:to-orange-700 transition-all"
                  >
                    <i className="ri-instagram-fill text-lg text-white"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Mesaj Gönderin</h2>
              
              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <i className="ri-check-circle-line text-4xl text-green-600 mb-4 block"></i>
                  <h3 className="text-xl font-semibold text-green-800 mb-2">Mesajınız Gönderildi!</h3>
                  <p className="text-green-600">En kısa sürede sizinle iletişime geçeceğiz.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} id="contact-form" className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Adınız Soyadınız
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
                      E-posta Adresiniz
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
                      Telefon Numaranız
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="0532 000 00 00"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Mesajınız
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      maxLength={500}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none"
                      placeholder="Lütfen mesajınızı yazın... (maksimum 500 karakter)"
                    />
                    <div className="text-right text-sm text-gray-500 mt-1">
                      {formData.message.length}/500
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-red-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-red-700 transition-colors cursor-pointer whitespace-nowrap"
                  >
                    Mesaj Gönder
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Konumumuz</h2>
            <p className="text-xl text-gray-600">Avcılar'da sizleri bekliyoruz</p>
          </div>
          
          <div className="bg-gray-200 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.234!2d28.7204!3d41.0259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDAxJzMzLjIiTiAyOMKwNDMnMTMuNCJF!5e0!3m2!1str!2str!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Borcan Kebap Konum"
            ></iframe>
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