import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "../components/CartProvider";
import { pacifico, geistSans, geistMono } from "./fonts";

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
        {/* İkon seti (isteğe bağlı; çevrimdışı kalmak istersen bunu da kaldır) */}
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pacifico.variable} antialiased`}
      >
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}

