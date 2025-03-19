import React from "react";

function Navbar() {
    return (
      <nav className="navbar">
        <div className="logo">
          <h2>Car Parts Store</h2>
        </div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    );
  }

  
  export default Navbar;