// app/fonts.ts
import localFont from "next/font/local";

/** Dosyalar artık app/fontfiles altında, göreli path kullanıyoruz. */

export const pacifico = localFont({
  src: "./fontfiles/Pacifico-Regular.ttf", // <-- .ttf olarak düzeltildi
  variable: "--font-pacifico",
  style: "normal",
  weight: "400",
  display: "swap",
  preload: true,
});

export const geistSans = localFont({
  src: "./fontfiles/geist-regular.woff2",
  variable: "--font-geist-sans",
  style: "normal",
  weight: "400",
  display: "swap",
  preload: true,
});

export const geistMono = localFont({
  src: "./fontfiles/geist-mono-regular.woff2",
  variable: "--font-geist-mono",
  style: "normal",
  weight: "400",
  display: "swap",
  preload: true,
});
