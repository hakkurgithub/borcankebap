'use client';

import { useEffect, useState } from 'react';

const KEY = 'admin_authed_v1';

export function useAdminAuth() {
  const [authed, setAuthed] = useState(false);

  useEffect(() => {
    try {
      setAuthed(localStorage.getItem(KEY) === '1');
    } catch {}
  }, []);

  const login = (u: string, p: string): boolean => {
    const U = process.env.NEXT_PUBLIC_ADMIN_USER ?? 'admin';
    const P = process.env.NEXT_PUBLIC_ADMIN_PASS ?? '1234';
    if (u === U && p === P) {
      try {
        localStorage.setItem(KEY, '1');
      } catch {}
      setAuthed(true);
      return true;
    }
    return false;
  };

  const logout = (): void => {
    try {
      localStorage.removeItem(KEY);
    } catch {}
    setAuthed(false);
  };

  return { authed, login, logout };
}
