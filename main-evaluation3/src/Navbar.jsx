import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../AuthContext.jsx";

const Navbar = ({ filters, setFilters }) => {
  const { user, logout } = useContext(AuthContext);
  const searchRef = useRef(null);

  useEffect(() => {
    if (searchRef.current) searchRef.current.focus();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="navbar">
      <input
        ref={searchRef}
        name="q"
        placeholder="Search by name or address"
        value={filters.q}
        onChange={handleChange}
      />
      <select name="type" value={filters.type} onChange={handleChange}>
        <option value="">All Types</option>
        <option value="Rajasthani">Rajasthani</option>
        <option value="Gujarati">Gujarati</option>
        <option value="Mughlai">Mughlai</option>
        <option value="Jain">Jain</option>
        <option value="Thai">Thai</option>
        <option value="North Indian">North Indian</option>
        <option value="South Indian">South Indian</option>
      </select>
      <select name="parking" value={filters.parking} onChange={handleChange}>
        <option value="">All Parking</option>
        <option value="true">With Parking</option>
        <option value="false">Without Parking</option>
      </select>
      {user && (
        <>
          <span>Role: {user.role}</span>
          <button onClick={logout}>Logout</button>
        </>
      )}
    </div>
  );
};

export default Navbar;
