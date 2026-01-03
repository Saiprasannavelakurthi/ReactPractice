import React, { useEffect, useState } from "react";

const TYPE_OPTIONS = [
  "Rajasthani", "Gujarati", "Mughlai", "Jain", "Thai", "North Indian", "South Indian"
];

const DEFAULT_IMAGE = "https://coding-platform.s3.amazonaws.com/dev/lms/tickets/752d4f6e-46fa-4506-87f6-ecaa9f4f89b2.png";

const RestaurantForm = ({ onSubmit, initial }) => {
  const [form, setForm] = useState({
    restaurantName: "",
    address: "",
    type: TYPE_OPTIONS[0],
    parkingLot: true,
    image: DEFAULT_IMAGE,
  });

  useEffect(() => {
    if (initial) {
      setForm({
        restaurantName: initial.restaurantName || "",
        address: initial.address || "",
        type: initial.type || TYPE_OPTIONS[0],
        parkingLot: initial.parkingLot !== false,
        image: initial.image || DEFAULT_IMAGE,
      });
    }
  }, [initial]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "parkingLot") {
      setForm((p) => ({ ...p, [name]: value === "true" }));
    } else {
      setForm((p) => ({ ...p, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.restaurantName || !form.address) {
      alert("Please fill name and address");
      return;
    }
    onSubmit(form);
    if (!initial) {
      setForm({
        restaurantName: "",
        address: "",
        type: TYPE_OPTIONS[0],
        parkingLot: true,
        image: DEFAULT_IMAGE,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="restaurant-form">
      <h3>{initial ? "Update Restaurant" : "Add Restaurant"}</h3>
      <input name="restaurantName" placeholder="Restaurant Name" value={form.restaurantName} onChange={handleChange} />
      <input name="address" placeholder="Address" value={form.address} onChange={handleChange} />
      <select name="type" value={form.type} onChange={handleChange}>
        {TYPE_OPTIONS.map((type) => (
          <option key={type} value={type}>{type}</option>
        ))}
      </select>
      <select name="parkingLot" value={String(form.parkingLot)} onChange={handleChange}>
        <option value="true">Parking Available</option>
        <option value="false">No Parking</option>
      </select>
      <input name="image" placeholder="Image URL" value={form.image} onChange={handleChange} />
      <button type="submit">{initial ? "Update" : "Add"}</button>
    </form>
  );
};

export default RestaurantForm;
