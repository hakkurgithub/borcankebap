'use client';

import { useState } from 'react';
import { useContent } from '../hooks/useContent';

interface AdminPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AdminPanel({ isOpen, onClose }: AdminPanelProps) {
  const { content, updateContent } = useContent();
  const [activeTab, setActiveTab] = useState('general');

  if (!isOpen) return null;

  const handleGeneralUpdate = (field: string, value: string) => {
    updateContent({ [field]: value });
  };

  const handleOrderChannelUpdate = (channel: string, field: string, value: string | boolean) => {
    updateContent({
      orderChannels: {
        ...content.orderChannels,
        [channel]: {
          ...content.orderChannels[channel as keyof typeof content.orderChannels],
          [field]: value
        }
      }
    });
  };

  const handleSocialMediaUpdate = (platform: string, url: string) => {
    updateContent({
      socialMedia: {
        ...content.socialMedia,
        [platform]: url
      }
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-800">Admin Paneli</h2>
            <button
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-700 cursor-pointer"
            >
              <i className="ri-close-line text-xl"></i>
            </button>
          </div>
        </div>

        <div className="flex border-b border-gray-200">
          <button
            onClick={() => setActiveTab('general')}
            className={`px-6 py-3 font-medium cursor-pointer ${
              activeTab === 'general' 
                ? 'border-b-2 border-blue-600 text-blue-600' 
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            Genel Ayarlar
          </button>
          <button
            onClick={() => setActiveTab('orders')}
            className={`px-6 py-3 font-medium cursor-pointer ${
              activeTab === 'orders' 
                ? 'border-b-2 border-blue-600 text-blue-600' 
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            Sipariş Kanalları
          </button>
          <button
            onClick={() => setActiveTab('social')}
            className={`px-6 py-3 font-medium cursor-pointer ${
              activeTab === 'social' 
                ? 'border-b-2 border-blue-600 text-blue-600' 
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            Sosyal Medya
          </button>
        </div>

        <div className="p-6">
          {activeTab === 'general' && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Restoran Adı
                </label>
                <input
                  type="text"
                  value={content.restaurantName}
                  onChange={(e) => handleGeneralUpdate('restaurantName', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Telefon Numarası
                </label>
                <input
                  type="text"
                  value={content.phone}
                  onChange={(e) => handleGeneralUpdate('phone', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Adres
                </label>
                <textarea
                  value={content.address}
                  onChange={(e) => handleGeneralUpdate('address', e.target.value)}
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Hakkımızda Metni
                </label>
                <textarea
                  value={content.aboutText}
                  onChange={(e) => handleGeneralUpdate('aboutText', e.target.value)}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          )}

          {activeTab === 'orders' && (
            <div className="space-y-6">
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">Yemeksepeti</h3>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={content.orderChannels?.yemeksepeti?.active || false}
                      onChange={(e) => handleOrderChannelUpdate('yemeksepeti', 'active', e.target.checked)}
                      className="mr-2"
                    />
                    <span>Aktif</span>
                  </label>
                </div>
                <input
                  type="text"
                  placeholder="Yemeksepeti URL"
                  value={content.orderChannels?.yemeksepeti?.url || ''}
                  onChange={(e) => handleOrderChannelUpdate('yemeksepeti', 'url', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">Getir</h3>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={content.orderChannels?.getir?.active || false}
                      onChange={(e) => handleOrderChannelUpdate('getir', 'active', e.target.checked)}
                      className="mr-2"
                    />
                    <span>Aktif</span>
                  </label>
                </div>
                <input
                  type="text"
                  placeholder="Getir URL"
                  value={content.orderChannels?.getir?.url || ''}
                  onChange={(e) => handleOrderChannelUpdate('getir', 'url', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">WhatsApp</h3>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={content.orderChannels?.whatsapp?.active || false}
                      onChange={(e) => handleOrderChannelUpdate('whatsapp', 'active', e.target.checked)}
                      className="mr-2"
                    />
                    <span>Aktif</span>
                  </label>
                </div>
                <input
                  type="text"
                  placeholder="WhatsApp URL"
                  value={content.orderChannels?.whatsapp?.url || ''}
                  onChange={(e) => handleOrderChannelUpdate('whatsapp', 'url', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">TGOYemek</h3>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={content.orderChannels?.tgoyemek?.active || false}
                      onChange={(e) => handleOrderChannelUpdate('tgoyemek', 'active', e.target.checked)}
                      className="mr-2"
                    />
                    <span>Aktif</span>
                  </label>
                </div>
                <input
                  type="text"
                  placeholder="TGOYemek URL"
                  value={content.orderChannels?.tgoyemek?.url || ''}
                  onChange={(e) => handleOrderChannelUpdate('tgoyemek', 'url', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-2"
                />
                <input
                  type="text"
                  placeholder="Buton Metni"
                  value={content.orderChannels?.tgoyemek?.text || ''}
                  onChange={(e) => handleOrderChannelUpdate('tgoyemek', 'text', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          )}

          {activeTab === 'social' && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Facebook URL
                </label>
                <input
                  type="text"
                  value={content.socialMedia?.facebook || ''}
                  onChange={(e) => handleSocialMediaUpdate('facebook', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Instagram URL
                </label>
                <input
                  type="text"
                  value={content.socialMedia?.instagram || ''}
                  onChange={(e) => handleSocialMediaUpdate('instagram', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Twitter URL
                </label>
                <input
                  type="text"
                  value={content.socialMedia?.twitter || ''}
                  onChange={(e) => handleSocialMediaUpdate('twitter', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          )}
        </div>

        <div className="p-6 border-t border-gray-200 flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="px-6 py-2 text-gray-600 hover:text-gray-800 cursor-pointer"
          >
            İptal
          </button>
          <button
            onClick={onClose}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 cursor-pointer"
          >
            Kaydet
          </button>
        </div>
      </div>
    </div>
  );
}