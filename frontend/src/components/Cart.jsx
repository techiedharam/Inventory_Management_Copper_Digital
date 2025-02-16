import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContextProvider";

const Cart = () => {
  const { cartItems, DeleteCart, ClearCart } = useContext(CartContext);
  const [quantities, setQuantities] = useState(
    cartItems.reduce((acc, item) => {
      acc[item.id] = 1; // Default quantity is 1 for all items
      return acc;
    }, {})
  );

  // Calculate total amount
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * quantities[item.id],
    0
  );

  // Handle quantity change
  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity < 1) return; // Prevent quantities less than 1
    setQuantities((prev) => ({
      ...prev,
      [id]: newQuantity,
    }));
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white py-6">
      <h1 className="text-3xl font-bold text-center mb-6">Your Cart</h1>

      {cartItems.length === 0 ? (
        <div className="text-center">
          <p className="text-lg mb-4">Your cart is empty!</p>
          <Link
            to="/"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Back to Shopping
          </Link>
        </div>
      ) : (
        <div className="w-[90%] mx-auto">
          <div className="grid grid-cols-1 gap-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between bg-gray-800 p-4 rounded-lg shadow"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-sm text-gray-400">{item.category}</p>
                    <p className="font-bold text-blue-500">
                      ${item.price.toFixed(2)}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  {/* Quantity Selector */}
                  <button
                    onClick={() =>
                      handleQuantityChange(item.id, quantities[item.id] - 1)
                    }
                    className="bg-gray-600 text-white px-2 py-1 rounded hover:bg-gray-700 transition"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    value={quantities[item.id]}
                    onChange={(e) =>
                      handleQuantityChange(item.id, parseInt(e.target.value))
                    }
                    className="w-12 text-center bg-gray-700 text-white border border-gray-600 rounded"
                  />
                  <button
                    onClick={() =>
                      handleQuantityChange(item.id, quantities[item.id] + 1)
                    }
                    className="bg-gray-600 text-white px-2 py-1 rounded hover:bg-gray-700 transition"
                  >
                    +
                  </button>
                </div>

                {/* Delete Button */}
                <button
                  onClick={() => DeleteCart(item)}
                  className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>

          {/* Total Amount */}
          <div className="text-right text-lg font-bold mt-6 text-blue-400">
            Total: ${totalAmount.toFixed(2)}
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between items-center mt-6">
            <Link
              to="/"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Back to Shopping
            </Link>
            <button
              onClick={ClearCart}
              className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition"
            >
              Clear Cart
            </button>
            <Link
              to="/checkout"
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
