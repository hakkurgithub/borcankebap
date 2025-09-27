// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "../components/CartProvider";
import { pacifico, geistSans, geistMono } from "./fonts";
import Header from "../components/Header"; // Header'ı eklendi

export const metadata: Metadata = {
  title: "Borcan Kebap - Geleneksel Türk Mutfağı",
  description:
    "1985'ten beri hizmet veren Borcan Kebap'ta geleneksel Türk lezzetlerini keşfedin. Rezervasyon ve online sipariş imkanı.",
  metadataBase:
    process.env.NEXT_PUBLIC_SITE_URL
      ? new URL(process.env.NEXT_PUBLIC_SITE_URL)
      : undefined,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <head>
        {/* Tamamen offline kalmak istersen bu linki kaldırabilirsin */}
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pacifico.variable} antialiased`}
      >
        <CartProvider>
          <Header /> {/* Header'ı burada ekledik */}
          {children}
        </CartProvider>
      </body>
    </html>
  );
}