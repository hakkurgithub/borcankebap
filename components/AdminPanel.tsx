 'use client';
     2
     3  import React, { useEffect, useState } from 'react';
     4  import { initialContent, saveContent } from '../utils/contentStore';
     5
     6  type OrderChannel = { [key: string]: any };
     7  type ContentType = { orderChannels?: Record<string, OrderChannel>; [key: string]: any };
     8
     9  interface AdminPanelProps {
    10    isOpen?: boolean;
    11    onClose?: () => void;
    12  }
    13
    14  export default function AdminPanel({ isOpen = true, onClose }: AdminPanelProps) {
    15    // Hooks en üstte
    16    const [content, setContent] = useState<ContentType>({ orderChannels: {} });
    17    const [loaded, setLoaded] = useState(false);
    18
    19    // İlk yüklemede content.json veya localStorage oku
    20    useEffect(() => {
    21      if (!isOpen || loaded) return;
    22
    23      let cancelled = false;
    24
    25      (async () => {
    26        const data = await initialContent();
    27        if (cancelled) return;
    28        setContent(prev => ({ ...prev, ...data }));
    29        setLoaded(true);
    30      })();
    31
    32      // ✅ Cleanup fonksiyonu useEffect’in içinde
    33      return () => {
    34        cancelled = true;
    35      };
    36    }, [isOpen, loaded]);
    37
    38    // Otomatik kaydet (localStorage’a)
    39    useEffect(() => {
    40      if (!loaded) return;
    41      saveContent(content);
    42    }, [content, loaded]);
    43
    44    // Panel kapalıysa hiç render etme
    45    if (!isOpen) {
    46      return null;
    47    }
    48
    49    const updateChannelField = (channel: string, field: string, value: any) => {
    50      setContent(prev => {
    51        const prevOrder = (prev?.orderChannels ?? {}) as Record<string, any>;
    52        const prevChannel = (prevOrder[channel] ?? {}) as Record<string, any>;
    53        return {
    54          ...prev,
    55          orderChannels: {
    56            ...prevOrder,
    57            [channel]: { ...prevChannel, [field]: value },
    58          },
    59        };
    60      });
    61    };
    62
    63    const toggleActive = (channel: string, value: boolean) => {
    64      updateChannelField(channel, 'active', value);
    65    };
    66
    67    return (
    68      <div className="p-6 max-w-3xl mx-auto bg-white rounded-xl shadow">
    69        <div className="flex items-center justify-between mb-4">
    70          <h2 className="text-xl font-bold">Admin Paneli</h2>
    71          {onClose && (
    72            <button
    73              type="button"
    74              onClick={onClose}
    75              className="px-3 py-1 bg-red-500 text-white rounded"
    76            >
    77              Kapat
    78            </button>
    79          )}
    80        </div>
    81
    82        <div className="space-y-4">
    83          {Object.entries(content.orderChannels ?? {}).map(([channel, data]) => (
    84            <div key={channel} className="border p-3 rounded">
    85              <h3 className="font-semibold">{channel}</h3>
    86              <label className="flex items-center gap-2">
    87                <input
    88                  type="checkbox"
    89                  checked={!!data.active}
    90                  onChange={e => toggleActive(channel, e.target.checked)}
    91                />
    92                Aktif
    93              </label>
    94            </div>
    95          ))}
    96        </div>
    97      </div>
    98    );
    99  }
