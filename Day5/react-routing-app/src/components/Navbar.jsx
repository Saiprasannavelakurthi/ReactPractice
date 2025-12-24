import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/aboutus">About Us</NavLink>
      <NavLink to="/todos">Todos</NavLink>
    </div>
  );
}

export default Navbar;
