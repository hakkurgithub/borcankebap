'use client';

import Link from 'next/link'; // <-- Bunu ekledik!

export default function Header() {
  return (
    <header className="w-full bg-red-600 text-white shadow">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4">
        <Link href="/" className="text-2xl font-bold tracking-tight hover:opacity-90">
          Borcan Kebap
        </Link>
        <nav className="flex gap-6">
          <Link href="/menu" className="hover:underline">Menü</Link>
          <Link href="/reservation" className="hover:underline">Rezervasyon</Link>
          <Link href="/iletisim" className="hover:underline">İletişim</Link>
        </nav>
      </div>
    </header>
  );
}