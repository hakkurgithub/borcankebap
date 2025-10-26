'use client';

import { useState, useEffect } from "react";
import Image from "next/image"; // ✅ Next.js Image bileşenini import et
import { useCart } from "@/components/CartProvider";
import { useContent } from "@/hooks/useContent";

// Tipleri tanımla (veya varsa menuData.ts'den import et)
type MenuCategory =
  | "Kebaplar & Izgaralar"
  | "Pide & Lahmacun"
  | "Döner"
  | "Dürüm"
  | "Çorbalar"
  | "Yan Ürünler"
  | "Tatlılar"
  | "İçecekler";

interface MenuItem {
  id: string;
  name: string;
  price: number;
  description: string;
  category: MenuCategory;
  image?: string; // Resmin opsiyonel olduğunu belirt
  rating: number;
}

export default function MenuPage() {
    const { content } = useContent();
    const { addItem, items } = useCart();
    const [activeCategory, setActiveCategory] = useState<MenuCategory | "all">("all");
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const categories: (MenuCategory | "all")[] = [
        "all",
        "Kebaplar & Izgaralar",
        "Pide & Lahmacun",
        "Döner",
        "Dürüm",
        "Çorbalar",
        "Yan Ürünler",
        "Tatlılar",
        "İçecekler"
    ];

    // ✅ 'any' tipi yerine 'MenuItem' kullanıldı
    const filteredItems = content.allMenuItems?.filter((item: MenuItem) =>
        activeCategory === "all" ? true : item.category === activeCategory
    );

    // ✅ 'any' tipi yerine 'MenuItem' kullanıldı
    const handleAddToCart = (item: MenuItem) => {
        addItem({
            id: item.id,
            name: item.name,
            price: item.price,
        });
    };

    if (!isClient) {
        return null; // Sunucu tarafında render edilmesini engelle (hydration hatası için)
    }

    return (
        <div className="bg-gray-50 min-h-screen">
            <div className="container mx-auto px-4 sm:px-6 py-12">
                <h1 className="text-4xl font-bold text-center text-red-600 mb-8">
                    Menü
                </h1>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                                activeCategory === category
                                    ? "bg-red-600 text-white"
                                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                            }`}
                        >
                            {category === "all" ? "Tümü" : category}
                        </button>
                    ))}
                </div>

                {/* Menu Items Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* ✅ 'any' tipi yerine 'MenuItem' kullanıldı */}
                    {filteredItems?.map((item: MenuItem, index: number) => {
                        const cartItem = items.find(cartItem => cartItem.id === item.id);
                        
                        return (
                            <div
                                key={item.id}
                                className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col hover:shadow-2xl transition-shadow duration-300"
                            >
                                {/* ▼▼▼ <img> DEĞİŞİKLİĞİ BURADA BAŞLIYOR ▼▼▼ */}
                                <div className="relative w-full h-48 bg-gray-200">
                                    {item.image ? (
                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            fill // Konteyneri doldur (width/height yerine)
                                            className="object-cover" // object-fit: cover
                                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" // Farklı ekran boyutları için optimizasyon
                                            priority={index < 3} // İlk 3 resmi öncelikli yükle
                                        />
                                    ) : (
                                        // Resim yoksa bir placeholder (yer tutucu) göster
                                        <div className="flex items-center justify-center h-full">
                                            <i className="ri-image-line text-4xl text-gray-400"></i>
                                        </div>
                                    )}
                                </div>
                                {/* ▲▲▲ <img> DEĞİŞİKLİĞİ BURADA BİTİYOR ▲▲▲ */}

                                <div className="p-5 flex-1 flex flex-col">
                                    <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                                    <p className="text-gray-600 text-sm flex-1">{item.description}</p>
                                    <div className="flex justify-between items-center mt-4">
                                        <span className="text-2xl font-bold text-red-600">
                                            {item.price}₺
                                        </span>
                                        <div className="relative">
                                            <button
                                                onClick={() => handleAddToCart(item)}
                                                className="bg-red-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors"
                                            >
                                                <i className="ri-shopping-cart-fill mr-2"></i>Ekle
                                            </button>
                                            {cartItem && (
                                                <span className="absolute -top-2 -right-2 bg-yellow-400 text-red-900 text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                                                    {cartItem.quantity}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}