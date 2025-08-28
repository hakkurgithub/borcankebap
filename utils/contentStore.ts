'use client';

export type SiteContent = any;

const KEY = 'site_content_v1';

/**
 * LocalStorage'dan içerik yükle
 */
export function loadContent(): SiteContent | null {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) return JSON.parse(raw);
  } catch {}
  return null;
}

/**
 * İlk yükleme: önce localStorage, sonra public/content.json
 */
export async function initialContent(): Promise<SiteContent> {
  const local = loadContent();
  if (local) return local;

  try {
    const res = await fetch('/content.json', { cache: 'no-store' });
    if (res.ok) return await res.json();
  } catch {}

  return {};
}

/**
 * LocalStorage'a kaydet
 */
export function saveContent(content: SiteContent) {
  try {
    localStorage.setItem(KEY, JSON.stringify(content));
  } catch {}
}
