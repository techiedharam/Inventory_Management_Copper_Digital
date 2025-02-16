import { useState, useEffect } from "react";
// Local Imports
import ProductCard from "../components/productCard";
import Loading from "../components/Loading";
import Error from "../components/Error";

const ProductList = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const finalResponse = await response.json();
      setProducts(finalResponse);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <div className="bg-gray-900 text-gray-200 min-h-screen py-8">
      <h2 className="text-2xl font-bold text-center mb-6">
        Inventory Management - Copper Digital Assignment
      </h2>
      <div className="w-[80%] mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard {...product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
