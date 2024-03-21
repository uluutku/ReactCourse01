import React from "react";
import { IoIosBasket } from "react-icons/io";
import { useSelector } from "react-redux";

function Navbar() {
  const { quantity } = useSelector((store) => store.cart);
  return (
    <nav>
      <div className="navbar-main">
        <h3>Kurs Uygulaması</h3>
        <div className="basket-container">
          <p className="basket-counter">{quantity}</p>
          <IoIosBasket className="icon" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
