import React, { useEffect, useMemo, useState } from "react";
import Navbar from "./Navbar.jsx";
import RestaurantCard from "./RestaurantCard.jsx";
import { getRestaurants } from "./utils.js";

const CustomerDashboard = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filters, setFilters] = useState({ q: "", type: "", parking: "" });

  useEffect(() => {
    setRestaurants(getRestaurants());
  }, []);

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
      <Navbar filters={filters} setFilters={setFilters} />
      <div className="restaurant-grid">
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.restaurantID}
            item={restaurant}
            isAdmin={false}
          />
        ))}
      </div>
    </div>
  );
};

export default CustomerDashboard;
