import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import RestaurantForm from "./RestaurantForm.jsx";
import RestaurantCard from "./RestaurantCard.jsx";
import Navbar from "./Navbar.jsx";
import { getRestaurants, saveRestaurants } from "./utils.js";

const AdminDashboard = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [editing, setEditing] = useState(null);
  const [filters, setFilters] = useState({ q: "", type: "", parking: "" });
  const navigate = useNavigate();

  useEffect(() => {
    setRestaurants(getRestaurants());
  }, []);

  const handleAdd = (data) => {
    const newRestaurant = { ...data, restaurantID: Date.now() };
    const updated = [...restaurants, newRestaurant];
    setRestaurants(updated);
    saveRestaurants(updated);
    alert("Restaurant added successfully");
  };

  const handleUpdate = (data) => {
    const updated = restaurants.map((r) =>
      r.restaurantID === editing.restaurantID ? { ...r, ...data } : r
    );
    setRestaurants(updated);
    saveRestaurants(updated);
    alert("Restaurant updated successfully");
    setEditing(null);
    navigate("/admin/dashboard");
  };

  const handleDelete = (id) => {
    const updated = restaurants.filter((r) => r.restaurantID !== id);
    setRestaurants(updated);
    saveRestaurants(updated);
    alert("Restaurant deleted successfully");
  };

  const startEdit = (id) => {
    const restaurant = restaurants.find((r) => r.restaurantID === id);
    setEditing(restaurant);
    navigate("/admin/restaurants/update");
  };

  const filteredRestaurants = useMemo(() => {
    return restaurants.filter((r) => {
      if (filters.type && r.type !== filters.type) return false;
      if (filters.parking !== "") {
        const need = filters.parking === "true";
        if (r.parkingLot !== need) return false;
      }
      if (filters.q) {
        const q = filters.q.toLowerCase();
        if (!r.restaurantName.toLowerCase().includes(q) && !r.address.toLowerCase().includes(q)) {
          return false;
        }
      }
      return true;
    });
  }, [restaurants, filters]);

  return (
    <div className="dashboard">
      <div className="sidebar">
        <RestaurantForm onSubmit={editing ? handleUpdate : handleAdd} initial={editing} />
      </div>
      <div className="main-content">
        <Navbar filters={filters} setFilters={setFilters} />
        <div className="restaurant-grid">
          {filteredRestaurants.map((restaurant) => (
            <RestaurantCard
              key={restaurant.restaurantID}
              item={restaurant}
              isAdmin={true}
              onUpdate={startEdit}
              onDelete={handleDelete}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
