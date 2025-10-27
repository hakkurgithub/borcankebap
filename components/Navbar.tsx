"use client";

import Link from "next/link";
import { useCart } from "./CartProvider";
import { useContent } from "../hooks/useContent";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, Phone, MessageCircle } from "lucide-react";

export default function Navbar() {
  const { content } = useContent();
  const { getTotalItems } = useCart();
  const [itemCount, setItemCount] = useState(0);
  const [animate, setAnimate] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // Bu state'i kullanmaya devam ediyoruz
  const pathname = usePathname();

  useEffect(() => {
    const count = getTotalItems();
    if (count !== itemCount) {
      setAnimate(true);
      setTimeout(() => setAnimate(false), 300);
      setItemCount(count);
    }
  }, [getTotalItems, itemCount]);

  const phoneNumber = content.phone.replace(/[^0-9]/g, "");
  const whatsappMessage = encodeURIComponent(
    "Merhaba, sipariş vermek istiyorum."
  );

  return (
    // nav etiketi header olarak değiştirilmedi, orijinal kodunuz korundu.
    <nav className="bg-red-700 text-white py-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link
          href="/"
          className="text-2xl font-bold tracking-wide hover:text-yellow-300 transition"
        >
          {content.restaurantName}
        </Link>

        {/* === MASAÜSTÜ MENÜ === (Değişiklik yok) */}
        <div className="hidden md:flex space-x-6 items-center">
          <NavLink href="/" label="Ana Sayfa" active={pathname === "/"} />
          <NavLink href="/menu" label="Menü" active={pathname === "/menu"} />
          <NavLink
            href="/about"
            label="Hakkımızda"
            active={pathname === "/about"}
          />
          <NavLink
            href="/contact"
            label="İletişim"
            active={pathname === "/contact"}
          />

          <Link
            href="/cart"
            className={`relative bg-yellow-400 text-red-900 px-4 py-2 rounded-full font-semibold hover:bg-yellow-300 transition ${
              animate ? "scale-110 transition-transform" : ""
            }`}
          >
            🛒 Sepetim
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </Link>
        </div>

        {/* === MOBİL MENÜ BUTONU (HAMBURGER) === */}
        {/* Tıklandığında menüyü açar, X ikonu buradan kaldırıldı */}
        <button
          className="md:hidden text-white text-3xl focus:outline-none"
          onClick={() => setMenuOpen(true)} // Sadece açar (true)
          aria-label="Menüyü aç"
        >
          <Menu size={28} />
        </button>
      </div>

      {/* === SOLDAN AÇILAN MOBİL MENÜ === */}
      {/* 1. Arka Plan Karartma (Overlay) */}
      {/* menuOpen true ise görünür */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity md:hidden"
          onClick={() => setMenuOpen(false)} // Dışarı tıklayınca kapatır
        ></div>
      )}

      {/* 2. Menü İçeriği (Soldan Kayan Panel) */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-red-800 text-white shadow-xl z-50 p-6
                   transition-transform duration-300 ease-in-out md:hidden
                   ${menuOpen ? "translate-x-0" : "-translate-x-full"}`} // menuOpen durumuna göre kayar
      >
        {/* Kapatma Butonu (X) */}
        <button
          onClick={() => setMenuOpen(false)} // Menüyü kapatır (false)
          className="absolute top-4 right-4 text-white hover:text-yellow-300"
          aria-label="Menüyü kapat"
        >
          <X size={28} />
        </button>

        {/* Mobil Menü Linkleri */}
        {/* Orijinal menü içeriğiniz buraya taşındı */}
        <div className="flex flex-col gap-4 mt-10 space-y-4">
          <MobileLink href="/" label="Ana Sayfa" setMenuOpen={setMenuOpen} />
          <MobileLink href="/menu" label="Menü" setMenuOpen={setMenuOpen} />
          <MobileLink
            href="/about"
            label="Hakkımızda"
            setMenuOpen={setMenuOpen}
          />
          <MobileLink
            href="/contact"
            label="İletişim"
            setMenuOpen={setMenuOpen}
          />

          <Link
            href="/cart"
            onClick={() => setMenuOpen(false)} // Linke tıklayınca menüyü kapatır
            className={`relative bg-yellow-400 text-red-900 px-4 py-2 rounded-full font-semibold hover:bg-yellow-300 transition block text-center ${
              animate ? "scale-110 transition-transform" : ""
            }`}
          >
            🛒 Sepetim
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </Link>
        </div>
      </div>
      {/* === MOBİL MENÜ BİTİŞİ === */}

      {/* === MOBİL İÇİN ALTTA SABİT BUTONLAR === (Değişiklik yok) */}
      <div className="fixed bottom-4 left-0 right-0 flex justify-center space-x-4 md:hidden z-50">
        <a
          href={`tel:${phoneNumber}`}
          className="bg-green-600 text-white flex items-center gap-2 px-5 py-3 rounded-full shadow-lg hover:bg-green-500 transition"
        >
          <Phone size={18} /> Ara
        </a>

        <a
          href={`https://wa.me/${phoneNumber}?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-emerald-500 text-white flex items-center gap-2 px-5 py-3 rounded-full shadow-lg hover:bg-emerald-400 transition"
        >
          <MessageCircle size={18} /> WhatsApp
        </a>
      </div>
    </nav>
  );
}

// === YARDIMCI BİLEŞENLER === (Değişiklik yok)
function NavLink({
  href,
  label,
  active,
}: {
  href: string;
  label: string;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      className={`hover:text-yellow-300 transition ${
        active ? "text-yellow-300 font-semibold" : ""
      }`}
    >
      {label}
    </Link>
  );
}

function MobileLink({
  href,
  label,
  setMenuOpen,
}: {
  href: string;
  label: string;
  setMenuOpen: (open: boolean) => void;
}) {
  return (
    <Link
      href={href}
      onClick={() => setMenuOpen(false)} // Linke tıklanınca menüyü kapatır
      className="block hover:text-yellow-300 transition"
    >
      {label}
    </Link>
  );
}
