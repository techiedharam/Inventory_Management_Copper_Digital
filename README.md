# Inventory Management System Copper Digital

This project is an **Inventory Management System** that enables users to browse a list of products and manage their purchases using a shopping cart. The application is built with React, utilizing **Context API** and **Reducer Function** to handle global state management and cart functionality effectively.

## Features

1. **Product Listing**:
   - Displays a list of available products with details such as name, price, and description.
   - Users can add products to the cart directly from the product list.

2. **Cart Functionality**:
   - View items added to the cart.
   - Update the quantity of products in the cart.
   - Remove items from the cart.
   - Calculate the total price dynamically as items are added or removed.

3. **State Management**:
   - **Context API** is used to provide a global state for managing the cart and product list.
   - **Reducer Function** is implemented to handle state transitions for cart actions (add, update, remove).

4. **Responsive Design**:
   - Optimized for various screen sizes, ensuring a seamless user experience on mobile and desktop.

5. **Styling**:
   - Tailwind CSS is used for efficient and modern styling, ensuring a clean and responsive UI.

## Tech Stack

- **React**: Component-based UI library for building the frontend.
- **Context API**: For state management to share data across components.
- **Reducer Function**: To manage complex state transitions in the cart.
- **Tailwind CSS**: Utility-first CSS framework for designing modern and responsive layouts.

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/inventory-management-system.git
   ```

2. Navigate to the `frontend` folder:
   ```bash
   cd inventory-management-system/frontend
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open the app in your browser at:
   ```
   http://localhost:3000
   ```

## File Structure

```
frontend/
├── public/
│   └── index.html        // Main HTML file
├── src/
│   ├── assets/           // Static assets like images
│   ├── components/
│   │   ├── Cart.jsx      // Component for managing the shopping cart
│   │   ├── Error.jsx     // Component for handling errors
│   │   ├── Loading.jsx   // Component for loading state
│   │   ├── Navbar.jsx    // Component for the navigation bar
│   │   └── ProductCard.jsx // Component for individual product cards
│   ├── context/
│   │   └── CartContextProvider.jsx // Context and reducer for cart functionality
│   ├── pages/
│   │   └── ProductList.jsx // Page for displaying the list of products
│   ├── routes/
│   │   └── AllRoutes.jsx   // Routing configuration
│   ├── App.jsx             // Main application component
│   ├── App.css             // Global CSS styles
│   ├── index.css           // Tailwind CSS configuration
│   └── main.jsx            // Application entry point
├── .gitignore              // Git ignore file
├── eslint.config.js        // ESLint configuration
└── package.json            // Project dependencies and scripts
```

## How It Works

1. **Product Listing**:
   - Products are fetched from a static array or API and displayed using the `ProductList` component.

2. **Cart Management**:
   - Cart state is maintained globally using the Context API (`CartContextProvider.jsx`).
   - Reducer function is used to handle the following actions:
     - **Add to Cart**: Adds a product to the cart or updates the quantity if the product is already in the cart.
     - **Remove from Cart**: Removes a specific product from the cart.
     - **Update Quantity**: Adjusts the quantity of a product in the cart.

3. **State Flow**:
   - Components consume the context to display and modify the cart state dynamically.

## Future Enhancements

- Integrate a backend service for product data and cart persistence.
- Add user authentication to save cart data per user.
- Include product filters and search functionality.
- Add payment gateway integration for checkout.

## Contribution

Feel free to contribute to this project by submitting issues or pull requests. For major changes, please open an issue to discuss your ideas.

## License

This project is licensed under the MIT License.

---

Happy Coding! 😊

