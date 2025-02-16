import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react"
import { useContext } from "react";
import { CartContext } from "../context/CartContextProvider";

const Navbar = () => {
  const { cartItems } = useContext(CartContext)
  const count = cartItems.length;
  var flag = false
  if (count > 0) {
    flag = true;
  }
  else {
    flag = false;
  }
  return (
    <nav className="bg-blue-600 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-10">
        <h1 className="text-2xl font-bold">
          <Link to="/">Shop Now</Link>
        </h1>
        <div className="flex space-x-4">
          <Link
            to="/cart"
            className="hover:text-blue-300 transition duration-200"
          >
            <div className=" absolute right-12 top-1">
              {flag ? count : null}
            </div>
            <ShoppingCart />

          </Link>
        </div>
      </div>
    </nav >
  );
};

export default Navbar;
