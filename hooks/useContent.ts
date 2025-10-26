// hooks/useContent.ts (DÜZELTİLMİŞ HALİ)

'use client';

import { useState, useEffect } from 'react';

// ADIM 1: Güncel menü listesini (MENU_ITEMS) ve tipini (MenuItem)
// 'lib/menuData.ts' dosyasından import ediyoruz.
import { MENU_ITEMS, MenuItem } from '../lib/menuData';

// ADIM 2: 'ContentData' interface'ini güncelliyoruz.
// 'allMenuItems' artık 'MenuItem[]' tipini kullanacak.
interface ContentData {
  restaurantName: string;
  heroTitle: string;
  heroSubtitle: string;
  aboutText: string;
  phone: string;
  address: string;
  menuItems?: Array<{ // Ana sayfa menüsü (bu kalabilir)
    id: string;
    name: string;
    price: number;
    description: string;
    category: string;
    image?: string;
    rating?: number;
  }>;
  aboutStats?: {
    experience: string;
    customers: string;
    menuCount: string;
    branches: string;
  };
  features?: Array<{
    id: string;
    title: string;
    description: string;
    icon: string;
  }>;
  socialMedia?: {
    facebook: string;
    instagram: string;
    twitter: string;
  };
  allMenuItems?: MenuItem[]; // <-- BU GÜNCELLENDİ (lib/menuData.ts'den gelen tipi kullanıyor)
}

// ADIM 3: Buradaki 48 ürünlük 'defaultAllMenuItems' listesi
// TAMAMEN SİLİNDİ. Artık buna gerek yok.
// const defaultAllMenuItems = [ ... ]; // <-- BU BLOK SİLİNDİ

// ADIM 4: 'defaultContent' objesi, 'allMenuItems' için
// artık import ettiğimiz 'MENU_ITEMS' listesini kullanacak.
const defaultContent: ContentData = {
  restaurantName: 'Borcan Kebap',
  heroTitle: 'Geleneksel Türk Lezzetleri',
  heroSubtitle: 'En taze malzemeler ile hazırlanan nefis kebaplarımızı denemeye davetlisiniz',
  aboutText: 'Ailemizin 40 yıllık deneyimi ile size en lezzetli kebapları sunuyoruz.',
  phone: '+90 212 423 3727',
  address: 'Beyoğlu Caddesi No: 35/A, Parseller, Avcılar/İstanbul',
  menuItems: [ // Ana sayfa menüsü (resim linkleri zaten günceldi)
    {
      id: '1',
      name: 'Adana Kebap',
      price: 450,
      description: 'Özel baharatlarla hazırlanmış geleneksel Adana kebap',
      category: 'Kebaplar',
      image: 'https://cdn.jsdelivr.net/gh/hakkurgithub/images@main/adana-porsiyon.jpg'
    },
    {
      id: '2',
      name: 'Karışık Pide',
      price: 400,
      description: 'Kaşar, sucuk ve yumurtalı özel pide',
      category: 'Pideler',
      image: 'https://cdn.jsdelivr.net/gh/hakkurgithub/images@main/karisik-pide.jpeg'
    },
    {
      id: '3',
      name: 'Lahmacun',
      price: 130,
      description: 'İnce hamur üzerine özel kıymalı lahmacun',
      category: 'Lahmacunlar',
      image: 'https://cdn.jsdelivr.net/gh/hakkurgithub/images@main/lahmacun.jpg'
    },
    {
      id: '4',
      name: 'Döner Kebap',
      price: 500,
      description: 'Taze döner eti, pilav ve salata ile servis',
      category: 'Kebaplar',
      // DİKKAT: Eski kodunuzda 'doner-kebap.jpg' vardı, ancak bu link
      // 'menuData.ts' listenizde yok. 'porsiyon-et-doner.jpg' ile değiştirdim.
      image: 'https://cdn.jsdelivr.net/gh/hakkurgithub/images@main/porsiyon-et-doner.jpg' 
    }
  ],
  
  allMenuItems: MENU_ITEMS, // <-- EN ÖNEMLİ DEĞİŞİKLİK BURADA
  
  aboutStats: {
    experience: '40+',
    customers: '50K+',
    menuCount: '100+',
    branches: '5'
  },
  features: [
    {
      id: '1',
      title: 'Taze Malzemeler',
      description: 'Her gün taze seçilen kaliteli malzemelerle hazırlanan lezzetli yemekler',
      icon: 'ri-restaurant-line'
    },
    {
      id: '2',
      title: 'Mangal Lezzeti',
      description: 'Geleneksel mangal ateşinde pişirilen eşsiz kebap lezzetleri',
      icon: 'ri-fire-line'
    },
    {
      id: "3",
      title: "Hızlı Teslimat",
      description: "Online siparişlerinizi kısa sürede sıcak olarak adresinize ulaştırıyoruz",
      icon: "ri-truck-line",
    },
  ],
  socialMedia: {
    facebook: 'https://www.facebook.com/brcnkbp',
    instagram: 'https://www.instagram.com/borcankebap/',
    twitter: '#'
  }
};

// ADIM 5: useContent hook'unun geri kalanı
export function useContent() {
  // 'defaultContent' artık 'MENU_ITEMS'ı içerdiği için 'useState' de doğru veriyle başlayacak.
  const [content, setContent] = useState<ContentData>(defaultContent);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedContent = localStorage.getItem('borcan_admin_content');
      if (savedContent) {
        try {
          const parsedContent = JSON.parse(savedContent);
          const mergedContent = { 
            ...defaultContent, 
            ...parsedContent,
            // localStorage'dan yüklerken bile 'allMenuItems'in
            // koddan gelen güncel listeyle (MENU_ITEMS) dolmasını garantiliyoruz.
            allMenuItems: parsedContent.allMenuItems || MENU_ITEMS 
          };
          setContent(mergedContent);
        } catch (error) {
          console.error('İçerik yüklenirken hata:', error);
          setContent(defaultContent); // Hata olursa varsayılanı temizle
        }
      }
    }
  }, []);

  const updateContent = (newContent: Partial<ContentData>) => {
    const updatedContent = { ...content, ...newContent };
    setContent(updatedContent);
    
    if (typeof window !== 'undefined') {
      localStorage.setItem('borcan_admin_content', JSON.stringify(updatedContent));
    }
  };

  const resetContent = () => {
    setContent(defaultContent); // Bu artık MENU_ITEMS'ı içeren varsayılan
    if (typeof window !== 'undefined') {
      localStorage.removeItem('borcan_admin_content');
    }
  };

  return { content, updateContent, resetContent };
}
