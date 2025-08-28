'use client';

import React, { useEffect, useState } from 'react';
import { initialContent, saveContent } from '../utils/contentStore';

type OrderChannel = { [key: string]: any };
type ContentType = { orderChannels?: Record<string, OrderChannel>; [key: string]: any };

interface AdminPanelProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export default function AdminPanel({ isOpen = true, onClose }: AdminPanelProps) {

  // Hooks en üstte
  const [content, setContent] = useState<ContentType>({ orderChannels: {} });
  const [loaded, setLoaded] = useState(false);

  // Panel kapalıysa hiç render etme
  if (!isOpen) return null;

  // İlk yüklemede content.json veya localStorage oku
  useEffect(() => {
    (async () => {
      const data = await initialContent();
      setContent(prev => ({ ...prev, ...data }));
      setLoaded(true);
    })();
  }, []);

  // Otomatik kaydet (localStorage’a)
  useEffect(() => {
    if (!loaded) return;
    saveContent(content);
  }, [content, loaded]);

  const updateChannelField = (channel: string, field: string, value: any) => {
    setContent(prev => {
      const prevOrder = (prev?.orderChannels ?? {}) as Record<string, any>;
      const prevChannel = (prevOrder[channel] ?? {}) as Record<string, any>;
      return {
        ...prev,
        orderChannels: {
          ...prevOrder,
          [channel]: { ...prevChannel, [field]: value },
        },
      };
    });
  };

  const toggleActive = (channel: string, value: boolean) => {
    updateChannelField(channel, 'active', value);
  };

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white rounded-xl shadow">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">Admin Paneli</h2>
        {onClose && (
          <button
            type="button"
            onClick={onClose}
            className="px-3 py-1 rounded-lg border hover:bg-gray-100 transition"
            aria-label="Kapat"
          >
            Kapat
          </button>
        )}
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        {/* WhatsApp */}
        <section className="space-y-2 border rounded-lg p-4">
          <h3 className="font-semibold">WhatsApp</h3>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={content.orderChannels?.whatsapp?.active ?? true}
              onChange={(e) => toggleActive('whatsapp', e.target.checked)}
            />
            <span>Aktif</span>
          </label>
          <input
            placeholder="Telefon (örn. 905xx...)"
            className="border rounded p-2 w-full"
            value={content.orderChannels?.whatsapp?.phone ?? ''}
            onChange={(e) => updateChannelField('whatsapp', 'phone', e.target.value)}
          />
        </section>

        {/* Yemeksepeti */}
        <section className="space-y-2 border rounded-lg p-4">
          <h3 className="font-semibold">Yemeksepeti</h3>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={content.orderChannels?.yemeksepeti?.active ?? true}
              onChange={(e) => toggleActive('yemeksepeti', e.target.checked)}
            />
            <span>Aktif</span>
          </label>
          <input
            placeholder="Yemeksepeti URL"
            className="border rounded p-2 w-full"
            value={content.orderChannels?.yemeksepeti?.url ?? ''}
            onChange={(e) => updateChannelField('yemeksepeti', 'url', e.target.value)}
          />
        </section>

        {/* Getir */}
        <section className="space-y-2 border rounded-lg p-4">
          <h3 className="font-semibold">Getir</h3>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={content.orderChannels?.getir?.active ?? true}
              onChange={(e) => toggleActive('getir', e.target.checked)}
            />
            <span>Aktif</span>
          </label>
          <input
            placeholder="Getir URL"
            className="border rounded p-2 w-full"
            value={content.orderChannels?.getir?.url ?? ''}
            onChange={(e) => updateChannelField('getir', 'url', e.target.value)}
          />
        </section>

        {/* Telefon */}
        <section className="space-y-2 border rounded-lg p-4">
          <h3 className="font-semibold">Telefon</h3>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={content.orderChannels?.phone?.active ?? true}
              onChange={(e) => toggleActive('phone', e.target.checked)}
            />
            <span>Aktif</span>
          </label>
          <input
            placeholder="Telefon (örn. 0 212 ...)"
            className="border rounded p-2 w-full"
            value={content.orderChannels?.phone?.number ?? ''}
            onChange={(e) => updateChannelField('phone', 'number', e.target.value)}
          />
        </section>
      </div>

      <p className="text-xs text-gray-500 mt-4">
        Yapılan tüm değişiklikler tarayıcınıza <b>otomatik kaydedilir</b> (localStorage).
        Sunucuya yazılmaz.
      </p>
    </div>
  );
}
