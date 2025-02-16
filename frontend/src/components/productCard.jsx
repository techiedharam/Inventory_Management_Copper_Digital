import { useContext } from "react";
import { CartContext } from "../context/CartContextProvider";
const ProductCard = ({ id, title, category, price, image }) => {
  const { cartItems, AddToCart } = useContext(CartContext)
  const handleAddToCart = () => {
    // Create a product object with relevant details
    const product = {
      id,
      title,
      category,
      price,
      image,
    };
    AddToCart(product)

  };

  return (
    <div className="border rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300 bg-gray-800">
      {/* Product Card */}
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <p className="text-gray-400 text-sm">Product ID: {id}</p>
      <p className="text-sm font-semibold text-white">{title}</p>
      <p className="text-gray-300 text-sm mb-2">{category}</p>
      <h3 className="text-blue-500 font-bold text-xl mb-4">${price}</h3>
      <button
        onClick={handleAddToCart}
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
