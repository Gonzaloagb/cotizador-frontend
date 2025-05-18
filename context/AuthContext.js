import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null);

  const fetchUsuario = async (token) => {
    if (!token || token === 'undefined' || token === 'null') return;

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/me`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = await res.json();
      if (res.ok) setUsuario(data);
      else console.warn("⚠ No se pudo obtener el usuario:", data);
    } catch (err) {
      console.warn("❌ Error en fetchUsuario:", err.message);
    }
  };

  const login = async (token) => {
    if (!token || !token.access_token) return;
    localStorage.setItem('access', token.access_token);
    await fetchUsuario(token.access_token);
  };

  const logout = () => {
    localStorage.removeItem('access');
    setUsuario(null);
    window.location.href = '/';
  };

  useEffect(() => {
    const token = localStorage.getItem('access');
    if (token) fetchUsuario(token);
  }, []);

  return (
    <AuthContext.Provider value={{ usuario, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
