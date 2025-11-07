"use client";

import React, { useState, useEffect } from "react";
import { useContent } from "../hooks/useContent";
import { MenuItem } from "../lib/menuData";

export interface AdminPanelProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export default function AdminPanel({ isOpen = true, onClose }: AdminPanelProps) {
  const { content, updateContent, resetContent } = useContent();
  const [localContent, setLocalContent] = useState(content);
  const [editingMenuItem, setEditingMenuItem] = useState<MenuItem | null>(null);
  const [showAddMenu, setShowAddMenu] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setLocalContent(content);
  }, [content]);

  const handleSave = async () => {
    setIsLoading(true);
    try {
      // 1. LocalStorage'ı güncelle
      updateContent(localContent);
      
      // 2. Dosyayı güncelle (API ile)
      const response = await fetch('/api/menu', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          menuItems: localContent.allMenuItems || []
        }),
      });

      if (response.ok) {
        const result = await response.json();
        alert(`✅ İçerik başarıyla kaydedildi!\n📝 ${result.itemCount} ürün menuData.ts dosyasına yazıldı.\n🚀 Değişiklikler kalıcı olarak saklandı.`);
      } else {
        throw new Error('API response not ok');
      }
    } catch (error) {
      console.error('Save error:', error);
      alert(`❌ Kayıt sırasında hata oluştu!\n📱 Veriler sadece tarayıcıda (localStorage) saklandı.\n💡 Dosya güncellenemedi: ${error}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    if (window.confirm("Tüm içerik varsayılan değerlere döndürülecek. Emin misiniz?")) {
      resetContent();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-4 text-gray-800">
        🛠️ Yönetim Paneli (AdminPanel)
      </h1>
      
      {/* Bilgi Mesajı */}
      <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 mb-6">
        <div className="flex">
          <div className="ml-3">
            <p className="text-sm">
              💾 <strong>Kalıcı Kaydetme:</strong> Artık değişiklikleriniz &quot;Kalıcı Kaydet&quot; butonu ile 
              menuData.ts dosyasına yazılır ve GitHub&apos;a push edilerek canlı sitede görünür. 
              Geçici değişiklikler için sadece formu kullanın, kalıcı için &quot;Kalıcı Kaydet&quot;e tıklayın.
            </p>
          </div>
        </div>
      </div>

      {/* Genel Bilgiler */}
      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <h2 className="text-xl font-semibold mb-4">Restoran Bilgileri</h2>
        <label htmlFor="restaurant-name" className="block mb-2 font-medium">Restoran Adı</label>
        <input
          id="restaurant-name"
          type="text"
          className="w-full border rounded p-2 mb-4"
          value={localContent.restaurantName || ""}
          onChange={(e) => setLocalContent({ ...localContent, restaurantName: e.target.value })}
        />

        <label htmlFor="about-text" className="block mb-2 font-medium">Açıklama</label>
        <textarea
          id="about-text"
          className="w-full border rounded p-2 mb-4"
          value={localContent.aboutText || ""}
          onChange={(e) => setLocalContent({ ...localContent, aboutText: e.target.value })}
        />

        <label htmlFor="address" className="block mb-2 font-medium">Adres</label>
        <input
          id="address"
          type="text"
          className="w-full border rounded p-2 mb-4"
          value={localContent.address || ""}
          onChange={(e) => setLocalContent({ ...localContent, address: e.target.value })}
        />

        <label htmlFor="phone" className="block mb-2 font-medium">Telefon</label>
        <input
          id="phone"
          type="text"
          className="w-full border rounded p-2 mb-4"
          value={localContent.phone || ""}
          onChange={(e) => setLocalContent({ ...localContent, phone: e.target.value })}
        />
      </div>

      {/* Menü Yönetimi */}
      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <h2 className="text-xl font-semibold mb-4">Menü Yönetimi</h2>
        <button
          onClick={() => {
            setEditingMenuItem(null); // Yeni ürün için temizle
            setShowAddMenu(!showAddMenu);
          }}
          className="bg-blue-600 text-white px-4 py-2 rounded mb-4"
        >
          {showAddMenu ? "Kapat" : "Yeni Ürün Ekle"}
        </button>

        {showAddMenu && (
          <div className="border p-4 rounded mb-6 bg-gray-50">
            <h3 className="font-semibold mb-2">
              {editingMenuItem ? "Ürün Düzenle" : "Yeni Menü Ürünü"}
            </h3>
            <input
              type="text"
              placeholder="Ürün Adı"
              value={editingMenuItem?.name || ""}
              className="w-full border rounded p-2 mb-2"
              onChange={(e) =>
                setEditingMenuItem({ 
                  ...(editingMenuItem || { id: "", price: 0, description: "", category: "Kebaplar & Izgaralar" as const, rating: 5 }), 
                  name: e.target.value 
                })
              }
            />
            <input
              type="number"
              placeholder="Fiyat"
              value={editingMenuItem?.price || ""}
              className="w-full border rounded p-2 mb-2"
              onChange={(e) =>
                setEditingMenuItem({
                  ...(editingMenuItem || { id: "", name: "", description: "", category: "Kebaplar & Izgaralar" as const, rating: 5 }),
                  price: Number(e.target.value),
                })
              }
            />
            <textarea
              placeholder="Açıklama"
              value={editingMenuItem?.description || ""}
              className="w-full border rounded p-2 mb-2"
              onChange={(e) =>
                setEditingMenuItem({
                  ...(editingMenuItem || { id: "", name: "", price: 0, category: "Kebaplar & Izgaralar" as const, rating: 5 }),
                  description: e.target.value,
                })
              }
            />
            <label htmlFor="category-select" className="block text-sm font-medium mb-1">Kategori</label>
            <select
              id="category-select"
              value={editingMenuItem?.category || "Kebaplar & Izgaralar"}
              className="w-full border rounded p-2 mb-2"
              onChange={(e) =>
                setEditingMenuItem({
                  ...(editingMenuItem || { id: "", name: "", price: 0, description: "", rating: 5 }),
                  category: e.target.value as MenuItem["category"],
                })
              }
            >
              <option value="Kebaplar & Izgaralar">Kebaplar & Izgaralar</option>
              <option value="Pide & Lahmacun">Pide & Lahmacun</option>
              <option value="Döner">Döner</option>
              <option value="Dürüm">Dürüm</option>
              <option value="Çorbalar">Çorbalar</option>
              <option value="Yan Ürünler">Yan Ürünler</option>
              <option value="Tatlılar">Tatlılar</option>
              <option value="İçecekler">İçecekler</option>
            </select>
            <input
              type="text"
              placeholder="Resim URL (opsiyonel)"
              value={editingMenuItem?.image || ""}
              className="w-full border rounded p-2 mb-2"
              onChange={(e) =>
                setEditingMenuItem({
                  ...(editingMenuItem || { id: "", name: "", price: 0, description: "", category: "Kebaplar & Izgaralar" as const, rating: 5 }),
                  image: e.target.value,
                })
              }
            />
            <div className="flex gap-2">
              <button
                className="bg-green-600 text-white px-4 py-2 rounded"
                onClick={() => {
                  if (editingMenuItem && editingMenuItem.name && editingMenuItem.price) {
                    const menuWithId = {
                      ...editingMenuItem,
                      id: editingMenuItem.id || `item-${Date.now()}`,
                      rating: editingMenuItem.rating || 5
                    };
                    
                    let updatedMenu;
                    if (editingMenuItem.id && localContent.allMenuItems?.some(item => item.id === editingMenuItem.id)) {
                      // Düzenleme modu
                      updatedMenu = localContent.allMenuItems?.map(item => 
                        item.id === editingMenuItem.id ? menuWithId : item
                      ) || [];
                    } else {
                      // Yeni ekleme modu
                      updatedMenu = [
                        ...(localContent.allMenuItems || []),
                        menuWithId,
                      ];
                    }
                    
                    setLocalContent({ ...localContent, allMenuItems: updatedMenu });
                    setEditingMenuItem(null);
                    setShowAddMenu(false);
                  }
                }}
              >
                {editingMenuItem?.id ? "Güncelle" : "Kaydet"}
              </button>
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded"
                onClick={() => {
                  setEditingMenuItem(null);
                  setShowAddMenu(false);
                }}
              >
                İptal
              </button>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {localContent.allMenuItems?.map((item, i: number) => (
            <div
              key={item.id || i}
              className="border rounded p-4 flex flex-col bg-gray-50 hover:bg-gray-100 transition"
            >
              <div className="flex justify-between items-start mb-2">
                <span className="font-semibold text-lg">{item.name}</span>
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      setEditingMenuItem(item);
                      setShowAddMenu(true);
                    }}
                    className="bg-blue-500 text-white px-2 py-1 rounded text-xs hover:bg-blue-600"
                    title="Düzenle"
                  >
                    ✏️
                  </button>
                  <button
                    onClick={() => {
                      if (window.confirm(`"${item.name}" ürününü silmek istediğinizden emin misiniz?`)) {
                        const updatedMenu = localContent.allMenuItems?.filter((_, index) => index !== i) || [];
                        setLocalContent({ ...localContent, allMenuItems: updatedMenu });
                      }
                    }}
                    className="bg-red-500 text-white px-2 py-1 rounded text-xs hover:bg-red-600"
                    title="Sil"
                  >
                    🗑️
                  </button>
                </div>
              </div>
              <span className="text-sm text-gray-600">{item.category}</span>
              <span className="font-medium text-red-600">{item.price} ₺</span>
              <span className="text-xs text-gray-500 mt-1">{item.description}</span>
            </div>
          ))}
        </div>
      </div>

      {/* İşlem Butonları */}
      <div className="flex justify-between mt-6">
        <button
          onClick={handleSave}
          disabled={isLoading}
          className={`px-6 py-2 rounded-lg font-semibold ${
            isLoading 
              ? 'bg-gray-400 cursor-not-allowed' 
              : 'bg-green-600 hover:bg-green-700'
          } text-white`}
        >
          {isLoading ? '💾 Kaydediliyor...' : '💾 Kalıcı Kaydet'}
        </button>
        <button
          onClick={handleReset}
          className="bg-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700"
        >
          Sıfırla
        </button>
        {onClose && (
          <button
            onClick={onClose}
            className="bg-gray-400 text-white px-6 py-2 rounded-lg font-semibold hover:bg-gray-500"
          >
            Kapat
          </button>
        )}
      </div>
    </div>
  );
}
