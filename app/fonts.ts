import localFont from "next/font/local";

/** Pacifico (regular) */
export const pacifico = localFont({
  src: "/fonts/pacifico-regular.woff2",
  variable: "--font-pacifico",
  style: "normal",
  weight: "400",
  display: "swap",
  preload: true,
});

/** Geist Sans (regular) */
export const geistSans = localFont({
  src: "/fonts/geist-regular.woff2",
  variable: "--font-geist-sans",
  style: "normal",
  weight: "400",
  display: "swap",
  preload: true,
});

/** Geist Mono (regular) */
export const geistMono = localFont({
  src: "/fonts/geist-mono-regular.woff2",
  variable: "--font-geist-mono",
  style: "normal",
  weight: "400",
  display: "swap",
  preload: true,
});

