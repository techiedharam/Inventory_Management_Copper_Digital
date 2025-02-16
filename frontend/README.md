# Inventory Management System

## Description
This is a **Frontend Assignment** for building an **Inventory Management System** with the following core features:

1. **Product Listing**:
   - Display a list of products dynamically.
   - Each product includes:
     - Name
     - Price
     - Stock Availability
     - Add-to-Cart Button

2. **Cart Journey**:
   - Users can:
     - Add items to the cart.
     - Remove items from the cart.
     - Update quantities of items in the cart.
   - Cart calculates:
     - Subtotal
     - Total Quantity

3. **Inventory Updates**:
   - Stock count decreases when a product is added to the cart.
   - Stock count increases when a product is removed from the cart.

---

## Tech Stack

### Framework/Library
- React.js

### Styling
- Tailwind CSS

### State Management
- Context API or Redux (for cart and inventory updates)

### Mock API
- json-server or a mock backend with `data.json` for product inventory.

---

## Features

### Product Listing
- Fetch and display a list of products.
- Each product card includes:
  - Product name
  - Price
  - Available stock
  - "Add to Cart" button.

### Cart Management
- Show cart items dynamically.
- Allow users to:
  - Update quantities.
  - Remove products from the cart.
- Display:
  - Total price
  - Total item count.

### Inventory Updates
- Update stock count dynamically:
  - Decrease when added to cart.
  - Increase when removed from cart.

### Bonus Features
- **Search and Filter**: Users can search for products or filter by price/category.
- **Persist Cart**: Cart data is saved using LocalStorage.

---

## Folder Structure
```
src/
├── components/
│   ├── ProductList.js
│   ├── Cart.js
│   └── ProductCard.js
├── context/
│   ├── CartContext.js
├── App.js
├── index.js
└── styles/
    └── tailwind.css
```

---

## Setup Instructions
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd inventory-management
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm start
   ```

4. (Optional) Start a mock backend using `json-server`:
   ```bash
   npm install -g json-server
   json-server --watch data.json --port 5000
   ```

---

## Example Code Snippets

### **Cart Context (Context API Example)**
```javascript
import React, { createContext, useReducer } from "react";

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        items: [...state.items, action.payload],
        totalPrice: state.totalPrice + action.payload.price,
        totalQuantity: state.totalQuantity + 1,
      };
    case "REMOVE_FROM_CART":
      const updatedItems = state.items.filter(item => item.id !== action.payload.id);
      return {
        ...state,
        items: updatedItems,
        totalPrice: state.totalPrice - action.payload.price,
        totalQuantity: state.totalQuantity - 1,
      };
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
    totalPrice: 0,
    totalQuantity: 0,
  });

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
```

### **ProductList Component**
```javascript
import React, { useContext } from "react";
import CartContext from "../context/CartContext";

const ProductList = ({ products }) => {
  const { dispatch } = useContext(CartContext);

  const handleAddToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  return (
    <div className="grid grid-cols-3 gap-4">
      {products.map((product) => (
        <div key={product.id} className="border p-4 rounded">
          <h2 className="font-bold">{product.name}</h2>
          <p>Price: ${product.price}</p>
          <p>Stock: {product.stock}</p>
          <button
            className="mt-2 bg-blue-500 text-white py-1 px-4 rounded"
            onClick={() => handleAddToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
```

### **Cart Component**
```javascript
import React, { useContext } from "react";
import CartContext from "../context/CartContext";

const Cart = () => {
  const { state, dispatch } = useContext(CartContext);

  const handleRemoveFromCart = (product) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: product });
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Cart</h2>
      {state.items.length > 0 ? (
        state.items.map((item) => (
          <div key={item.id} className="flex justify-between my-2">
            <p>{item.name} (x{item.quantity})</p>
            <button
              className="text-red-500"
              onClick={() => handleRemoveFromCart(item)}
            >
              Remove
            </button>
          </div>
        ))
      ) : (
        <p>No items in cart.</p>
      )}
      <h3>Total Price: ${state.totalPrice}</h3>
    </div>
  );
};

export default Cart;
```

---

## Conclusion
This project demonstrates a functional Inventory Management System with a seamless cart journey. It uses React.js for the frontend, Tailwind CSS for styling, and Context API for state management. For backend-like functionality, a mock server with `json-server` can be used.