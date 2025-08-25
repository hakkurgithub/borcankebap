'use client';

import { useState } from 'react';
import { useContent } from '../hooks/useContent';

interface WhatsAppOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WhatsAppOrderModal({ isOpen, onClose }: WhatsAppOrderModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    items: '',
    note: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const { content } = useContent();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Form validation
    if (!formData.name || !formData.phone || !formData.address || !formData.items) {
      alert('Lütfen tüm zorunlu alanları doldurun.');
      setIsSubmitting(false);
      return;
    }

    try {
      // WhatsApp mesajı oluştur
      const message = `🍽️ *Borcan Kebap Sipariş*

👤 *Ad Soyad:* ${formData.name}
📞 *Telefon:* ${formData.phone}
📍 *Adres:* ${formData.address}

📋 *Sipariş:*
${formData.items}

${formData.note ? `💬 *Not:* ${formData.note}` : ''}

Siparişimi onaylar mısınız?`;

      const whatsappUrl = `https://wa.me/905455093462?text=${encodeURIComponent(message)}`;
      
      // WhatsApp'ı aç
      window.open(whatsappUrl, '_blank');
      
      // Modal'ı kapat
      setTimeout(() => {
        onClose();
        setFormData({
          name: '',
          phone: '',
          address: '',
          items: '',
          note: ''
        });
      }, 1000);
      
    } catch (error) {
      alert('Bir hata oluştu. Lütfen tekrar deneyin.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const popularItems = [
    'Adana Kebap Porsiyon',
    'Urfa Kebap Porsiyon', 
    'Tavuk Şiş Porsiyon',
    'Karışık Izgara Porsiyon',
    'Kuşbaşı Kavurma',
    'Lahmacun (2 Adet)',
    'Kıymalı Pide',
    'Peynirli Pide',
    'Ayran (Büyük)',
    'Şalgam Suyu'
  ];

  const addPopularItem = (item: string) => {
    const currentItems = formData.items;
    const newItems = currentItems ? `${currentItems}\n- ${item}` : `- ${item}`;
    setFormData(prev => ({ ...prev, items: newItems }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-6 border-b">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
              <i className="ri-whatsapp-fill text-2xl text-green-600"></i>
            </div>
            <h2 className="text-2xl font-bold text-gray-800">WhatsApp Sipariş</h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <i className="ri-close-line text-2xl"></i>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Ad Soyad *
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Adınız ve soyadınız"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Telefon *
            </label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="+90 5xx xxx xx xx"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Teslimat Adresi *
            </label>
            <textarea
              name="address"
              required
              value={formData.address}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
              rows={3}
              placeholder="Tam adresinizi yazın (Mahalle, sokak, bina no, kat, daire)"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Popüler Ürünler
            </label>
            <div className="grid grid-cols-2 gap-2 mb-3">
              {popularItems.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => addPopularItem(item)}
                  className="text-left p-2 text-sm bg-gray-50 hover:bg-green-50 border border-gray-200 rounded-lg transition-colors cursor-pointer"
                >
                  <i className="ri-add-line text-green-600 mr-1"></i>
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Sipariş Detayları *
            </label>
            <textarea
              name="items"
              required
              value={formData.items}
              onChange={handleInputChange}
              maxLength={500}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
              rows={5}
              placeholder="- Adana Kebap Porsiyon (2 adet)
- Ayran (Büyük)
- Lahmacun (3 adet)

Her ürünü ayrı satıra yazın..."
            />
            <div className="text-right text-xs text-gray-500 mt-1">
              {formData.items.length}/500 karakter
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Ek Notlar
            </label>
            <textarea
              name="note"
              value={formData.note}
              onChange={handleInputChange}
              maxLength={200}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
              rows={2}
              placeholder="Özel istekleriniz, baharat tercihi vb."
            />
            <div className="text-right text-xs text-gray-500 mt-1">
              {formData.note.length}/200 karakter
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="flex items-start">
              <i className="ri-information-line text-green-600 mr-2 mt-0.5"></i>
              <div className="text-sm text-green-700">
                <p className="font-medium mb-1">WhatsApp ile sipariş süreci:</p>
                <ol className="list-decimal list-inside space-y-1">
                  <li>Bu formu doldurun</li>
                  <li>"WhatsApp'ta Gönder" butonuna basın</li>
                  <li>WhatsApp uygulaması açılacak</li>
                  <li>Mesajı gönderin ve onay bekleyin</li>
                </ol>
              </div>
            </div>
          </div>

          <div className="flex space-x-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
            >
              İptal
            </button>
            <button
              type="submit"
              disabled={isSubmitting || formData.items.length > 500 || formData.note.length > 200}
              className="flex-1 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors cursor-pointer flex items-center justify-center"
            >
              {isSubmitting ? (
                <>
                  <i className="ri-loader-line animate-spin mr-2"></i>
                  Yönlendiriliyor...
                </>
              ) : (
                <>
                  <i className="ri-whatsapp-fill mr-2"></i>
                  WhatsApp'ta Gönder
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}