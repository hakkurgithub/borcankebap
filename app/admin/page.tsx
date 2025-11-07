"use client";

import React, { useState, useEffect } from "react";
import { adminConfig } from "../../lib/admin";
import AdminPanel from "../../components/AdminPanel";

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (username === adminConfig.username && password === adminConfig.password) {
      setIsAuthenticated(true);
      setError("");
      // Session'ı localStorage'a kaydet
      localStorage.setItem(adminConfig.sessionKey, "true");
    } else {
      setError("Kullanıcı adı veya şifre hatalı!");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUsername("");
    setPassword("");
    localStorage.removeItem(adminConfig.sessionKey);
  };

  // Sayfa yüklendiğinde session kontrolü
  useEffect(() => {
    const session = localStorage.getItem(adminConfig.sessionKey);
    if (session === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  if (isAuthenticated) {
    return <AdminPanel isOpen={true} onClose={handleLogout} />;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
          🔐 Admin Girişi
        </h1>
        
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
              Kullanıcı Adı
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>
          
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Şifre
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>
          
          {error && (
            <div className="text-red-600 text-sm text-center">
              {error}
            </div>
          )}
          
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition"
          >
            Giriş Yap
          </button>
        </form>
      </div>
    </div>
  );
}