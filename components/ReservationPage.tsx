'use client';

import { useState } from 'react';
import Header from './Header'; // <-- DÜZELTİLDİ

export default function ReservationPage() {
  const [showReservationModal, setShowReservationModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [guests, setGuests] = useState(2);

  const timeSlots = [
    '11:00', '11:30', '12:00', '12:30', '13:00', '13:30',
    '14:00', '14:30', '15:00', '15:30', '16:00', '16:30',
    '17:00', '17:30', '18:00', '18:30', '19:00', '19:30',
    '20:00', '20:30', '21:00', '21:30', '22:00', '22:30'
  ];

  const handleQuickReservation = () => {
    if (!selectedDate || !selectedTime) {
      setShowReservationModal(true);
      return;
    }

    const dateTr = new Date(selectedDate).toLocaleDateString('tr-TR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });

    const message = `Merhaba!
Borcan Kebap'tan masa rezervasyonu istiyorum:
📅 Tarih: ${dateTr}
🕒 Saat: ${selectedTime}
👥 Kişi sayısı: ${guests}
Teşekkürler!`;

    const phone = '905455093462';
    const waURL = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(waURL, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <section
        className="relative h-96 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Elegant%20restaurant%20interior%20with%20beautifully%20set%20tables%2C%20warm%20ambient%20lighting%2C%20romantic%20dining%20atmosphere%2C%20Turkish%20restaurant%20decor%2C%20white%20tablecloths%2C%20professional%20restaurant%20photography%2C%20inviting%20dining%20space%20for%20reservations&width=1200&height=400&seq=reservation-hero&orientation=landscape')`
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl font-bold mb-4">Rezervasyon</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Borcan Kebap&apos;ta unutulmaz bir yemek deneyimi için masanızı ayırtın
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              <i className="ri-calendar-line mr-3 text-red-600"></i>
              Masa Rezervasyonu
            </h2>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tarih Seçin
                </label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Kişi Sayısı
                </label>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => setGuests(Math.max(1, guests - 1))}
                    className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 cursor-pointer"
                  >
                    <i className="ri-subtract-line"></i>
                  </button>
                  <span className="text-2xl font-semibold w-12 text-center">{guests}</span>
                  <button
                    onClick={() => setGuests(Math.min(12, guests + 1))}
                    className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 cursor-pointer"
                  >
                    <i className="ri-add-line"></i>
                  </button>
                </div>
                <p className="text-sm text-gray-500 mt-1">Maksimum 12 kişi</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Saat Seçin
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`p-2 rounded-lg border text-sm font-medium transition-colors cursor-pointer ${
                        selectedTime === time
                          ? 'bg-red-600 text-white border-red-600'
                          : 'bg-white text-gray-700 border-gray-300 hover:border-red-600 hover:text-red-600'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={handleQuickReservation}
                className="w-full bg-red-600 text-white py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors cursor-pointer flex items-center justify-center"
              >
                <i className="ri-calendar-check-line mr-2 text-lg"></i>
                Rezervasyon Yap
              </button>
            </div>
          </div>

          {/* Sağ taraf: restoran bilgileri, kampanyalar vs. burayı senin elindeki tasarımdan değiştirmeden bırakabilirsin */}
        </div>
      </div>
    </div>
  );
}