'use client';

import { useContent } from '../hooks/useContent';

export default function OrderChannelCards() {
  const { content } = useContent();

  const handleTGOYemekOrder = () => {
    if (!content?.orderChannels?.tgoyemek?.active) {
      alert('TGOYemek sipariş kanalı şu anda aktif değil.');
      return;
    }

    const tgoyemekUrl = content.orderChannels?.tgoyemek?.url;
    if (tgoyemekUrl) {
      window.open(tgoyemekUrl, '_blank');
    } else {
      alert('TGOYemek linki bulunamadı. Lütfen admin panelinden kontrol edin.');
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* TGOYemek Card */}
      {content?.orderChannels?.tgoyemek?.active && (
        <div
          onClick={handleTGOYemekOrder}
          className="bg-purple-100 rounded-xl p-6 text-center cursor-pointer transition-all duration-300 hover:bg-purple-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-white shadow-md">
            <i className="ri-restaurant-line text-3xl text-purple-600"></i>
          </div>
          <h3 className="text-lg font-bold text-purple-600 mb-2">
            {content.orderChannels?.tgoyemek?.text || 'TGOYemek\'ten Sipariş Ver'}
          </h3>
          <p className="text-gray-600 text-sm mb-4">Hızlı teslimat ve özel indirimler</p>
          <div className="inline-flex items-center text-purple-600 font-medium">
            Sipariş Ver
            <i className="ri-arrow-right-line ml-2"></i>
          </div>
        </div>
      )}

      {/* Yemeksepeti Card */}
      {content?.orderChannels?.yemeksepeti?.active && (
        <div
          onClick={() => content.orderChannels?.yemeksepeti?.url && window.open(content.orderChannels.yemeksepeti.url, '_blank')}
          className="bg-orange-100 rounded-xl p-6 text-center cursor-pointer transition-all duration-300 hover:bg-orange-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-white shadow-md">
            <i className="ri-shopping-bag-line text-3xl text-orange-600"></i>
          </div>
          <h3 className="text-lg font-bold text-orange-600 mb-2">Yemeksepeti</h3>
          <p className="text-gray-600 text-sm mb-4">Geniş menü seçenekleri</p>
          <div className="inline-flex items-center text-orange-600 font-medium">
            Sipariş Ver
            <i className="ri-arrow-right-line ml-2"></i>
          </div>
        </div>
      )}

      {/* Getir Card */}
      {content?.orderChannels?.getir?.active && (
        <div
          onClick={() => content.orderChannels?.getir?.url && window.open(content.orderChannels.getir.url, '_blank')}
          className="bg-yellow-100 rounded-xl p-6 text-center cursor-pointer transition-all duration-300 hover:bg-yellow-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-white shadow-md">
            <i className="ri-truck-line text-3xl text-yellow-600"></i>
          </div>
          <h3 className="text-lg font-bold text-yellow-600 mb-2">Getir</h3>
          <p className="text-gray-600 text-sm mb-4">Süper hızlı teslimat</p>
          <div className="inline-flex items-center text-yellow-600 font-medium">
            Sipariş Ver
            <i className="ri-arrow-right-line ml-2"></i>
          </div>
        </div>
      )}

      {/* WhatsApp Card */}
      {content?.orderChannels?.whatsapp?.active && (
        <div
          onClick={() => content.orderChannels?.whatsapp?.url && window.open(content.orderChannels.whatsapp.url, '_blank')}
          className="bg-green-100 rounded-xl p-6 text-center cursor-pointer transition-all duration-300 hover:bg-green-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-white shadow-md">
            <i className="ri-whatsapp-line text-3xl text-green-600"></i>
          </div>
          <h3 className="text-lg font-bold text-green-600 mb-2">WhatsApp Sipariş</h3>
          <p className="text-gray-600 text-sm mb-4">Direkt iletişim</p>
          <div className="inline-flex items-center text-green-600 font-medium">
            Sipariş Ver
            <i className="ri-arrow-right-line ml-2"></i>
          </div>
        </div>
      )}
    </div>
  );
}