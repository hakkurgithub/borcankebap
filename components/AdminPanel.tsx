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
    if (!isOpen || loaded) return;

    let cancelled = false;

    (async () => {
      const data = await initialContent();
      if (cancelled) return;
      setContent(prev => ({ ...prev, ...data }));
      setLoaded(true);
    })();

    // ✅ Cleanup fonksiyonu useEffect’in içinde
    return () => {
      cancelled = true;
    };
  }, [isOpen, loaded]);

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
            className="px-3 py-1 bg-red-500 text-white rounded"
          >
            Kapat
          </button>
        )}
      </div>

      <div className="space-y-4">
        {Object.entries(content.orderChannels ?? {}).map(([channel, data]) => (
          <div key={channel} className="border p-3 rounded">
            <h3 className="font-semibold">{channel}</h3>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={!!data.active}
                onChange={e => toggleActive(channel, e.target.checked)}
              />
              Aktif
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

