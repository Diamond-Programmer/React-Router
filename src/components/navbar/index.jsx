import React from "react";
import { NavbarWrapp } from "./styled";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <NavbarWrapp>
      <h2>
        <a href="#">Navbar</a>
      </h2>
      <div className="b">
        <Link to="/"><b>Home</b></Link>
        <Link to="/about"><b>AboutUs</b></Link>
        <Link to="/contact"><b>ContactUS</b></Link>
      </div>
    </NavbarWrapp>
  );
}

export default Navbar;
