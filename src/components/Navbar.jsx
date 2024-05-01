import { FaCartShopping } from "react-icons/fa6";
import { useProductData } from "../context/ProductContext";
import { useState } from "react";
import Cart from "./Cart";

const Navbar = () => {
  const [showCart, setShowCart] = useState(false);
  const { cartValue } = useProductData();

  const toggle = () => {
    setShowCart(!showCart);
  };

  return (
    <div className="w-full flex justify-between items-center bg-slate-900 text-white text-2xl py-3 px-7">
      <div>
        <h4>Shopping Cart</h4>
      </div>
      <div>
        <ul className="flex gap-10">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Products</a>
          </li>
          <li>
            <a href="#">About us</a>
          </li>
        </ul>
      </div>
      <div>
        <button onClick={toggle}>
          <FaCartShopping className="relative" />
        </button>
        <div className="absolute top-0 right-2">{cartValue}</div>
      </div>
      <Cart showCart={showCart} toggle={toggle} />
    </div>
  );
};

export default Navbar;
