import { createContext, useReducer } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  // Reducer function to handle cart actions
  const reducer = (state, action) => {
    switch (action.type) {
      case "AddToCart":
        // Check if the product already exists in the cart
        const existingItem = state.find((item) => item.id === action.payload.id);
        if (existingItem) {
          // If it exists, increment the quantity
          return state.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
        }
        // If it doesn't exist, add it with a quantity of 1
        return [...state, { ...action.payload, quantity: 1 }];

      case "UpdateQuantity":
        // Update the quantity of a specific item
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        );

      case "DeleteCartItem":
        // Remove the item from the cart
        return state.filter((item) => item.id !== action.payload.id);

      case "ClearCart":
        // Clear the entire cart
        return [];

      default:
        return state; // Return current state for unknown actions
    }
  };

  const [cartItems, dispatch] = useReducer(reducer, []); // Initial cart state is an empty array

  // Function to add a product to the cart
  const AddToCart = (product) => {
    dispatch({
      type: "AddToCart",
      payload: product,
    });
  };

  // Function to update the quantity of a product
  const UpdateQuantity = (id, quantity) => {
    if (quantity < 1) return; // Prevent quantities less than 1
    dispatch({
      type: "UpdateQuantity",
      payload: { id, quantity },
    });
  };

  // Function to delete a product from the cart
  const DeleteCart = (product) => {
    dispatch({
      type: "DeleteCartItem",
      payload: product,
    });
  };

  // Function to clear all items in the cart
  const ClearCart = () => {
    dispatch({
      type: "ClearCart",
    });
  };

  const contextValue = {
    cartItems, // Current cart state
    AddToCart, // Add item function
    UpdateQuantity, // Update quantity function
    DeleteCart, // Delete item function
    ClearCart, // Clear cart function
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
