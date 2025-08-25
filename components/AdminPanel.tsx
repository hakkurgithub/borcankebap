"use client";

import React, { useState } from "react";

type OrderChannel = {
  [key: string]: any;
};

type ContentType = {
  orderChannels?: Record<string, OrderChannel>;
  [key: string]: any;
};

interface AdminPanelProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export default function AdminPanel({ isOpen = true, onClose }: AdminPanelProps) {
  // Hooks her zaman en üstte çağrılır
  const [content, setContent] = useState<ContentType>({
    orderChannels: {}
  });

  // Eğer panel kapalıysa hiç render etme
  if (!isOpen) return null;

  const updateChannelField = (channel: string, field: string, value: any) => {
    setContent(prev => {
      const prevOrder = (prev?.orderChannels ?? {}) as Record<string, any>;
      const prevChannel = (prevOrder[channel] ?? {}) as Record<string, any>;

      return {
        ...prev,
        orderChannels: {
          ...prevOrder,
          [channel]: {
            ...prevChannel,
            [field]: value
          }
        }
      };
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Arka plan */}
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel kutusu */}
      <div className="relative z-10 w-full max-w-xl rounded-xl shadow-2xl bg-white p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">Admin Paneli</h2>
          <button
            type="button"
            onClick={onClose}
            className="px-3 py-1 rounded-lg border hover:bg-gray-100 transition"
            aria-label="Kapat"
          >
            Kapat
          </button>
        </div>

        {/* Örnek input alanları */}
        <div className="space-y-4">
          <label className="block">
            <span className="text-gray-700">Yemeksepeti Linki</span>
            <input
              type="text"
              className="mt-1 block w-full border rounded-md p-2"
              value={content.orderChannels?.yemeksepeti?.url ?? ""}
              onChange={e =>
                updateChannelField("yemeksepeti", "url", e.target.value)
              }
            />
          </label>

          <label className="block">
            <span className="text-gray-700">Getir Linki</span>
            <input
              type="text"
              className="mt-1 block w-full border rounded-md p-2"
              value={content.orderChannels?.getir?.url ?? ""}
              onChange={e =>
                updateChannelField("getir", "url", e.target.value)
              }
            />
          </label>
        </div>

        <pre className="mt-6 p-4 bg-gray-100 rounded-md text-sm overflow-auto">
          {JSON.stringify(content, null, 2)}
        </pre>
      </div>
    </div>
  );
}
