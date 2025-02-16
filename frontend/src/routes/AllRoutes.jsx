// import React from 'react'
import { Routes, Route } from "react-router-dom"
import ProductList from "../pages/ProductList"
import Cart from "../components/Cart"
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ProductList />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  )
}

export default AllRoutes
