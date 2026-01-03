import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("evalUser");
    if (saved) setUser(JSON.parse(saved));
  }, []);

  const login = (email, password) => {
    const ADMIN = { email: "admin@gmail.com", password: "admin1234", role: "admin" };
    const CUSTOMER = { email: "customer@gmail.com", password: "customer1234", role: "customer" };
    
    let u = null;
    if (email === ADMIN.email && password === ADMIN.password) u = ADMIN;
    if (email === CUSTOMER.email && password === CUSTOMER.password) u = CUSTOMER;
    
    if (!u) {
      alert("Wrong email or password");
      return false;
    }
    
    setUser(u);
    localStorage.setItem("evalUser", JSON.stringify(u));
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("evalUser");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
