import { useParams, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartslice";

const ShopSection = () => {
  const { category } = useParams();
  const [items, setItems] = useState([]);
  const [sortOrder, setSortOrder] = useState("default");
  const dispatch = useDispatch();

  useEffect(() => {
    const DataFetch = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setItems(data);
    };
    DataFetch();
  }, [category]);

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  const filteredItems = items.filter((item) => {
    if (!category) return true;
    if (category === "men") return item.category === "men's clothing";
    if (category === "women") return item.category === "women's clothing";
    if (category === "electronics") return item.category === "electronics";
    return true;
  });

  const getSortedItems = () => {
    if (sortOrder === "lowToHigh") {
      return [...filteredItems].sort((a, b) => a.price - b.price);
    } else if (sortOrder === "highToLow") {
      return [...filteredItems].sort((a, b) => b.price - a.price);
    } else {
      return filteredItems;
    }
  };

  const finalItems = getSortedItems();

  return (
    <div className="w-full bg-gradient-to-t from-[#ffff] to-[#f1f1f0] min-h-screen">
      <div className=" flex justify-between p-5">
        <h1 className="text-2xl ml-1  lg:text-4xl tracking-tight uppercase font-bold">
          sh<span className="text-orange-400">o</span>p n
          <span className="text-orange-400">o</span>w
        </h1>
        {/* Sorting Dropdown */}
        <div className="">
          <select
            className="p-2 rounded border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="default">Sort by</option>
            <option value="lowToHigh">Price: Low to High</option>
            <option value="highToLow">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Grid Cards Container */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {finalItems.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border"
          >
            {/* Image */}
            <Link to={`/product/${product.id}`}>
              <div className="w-full h-48 sm:h-56 md:h-64 flex items-center justify-center overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="object-contain h-full max-w-full transition-transform duration-300 hover:scale-105"
                />
              </div>
            </Link>

            {/* Info */}
            <div className="p-4">
              <Link to={`/product/${product.id}`}>
                <div className="flex justify-between items-center">
                  <p className="text-pink-600 text-sm hover:underline">
                    See more
                  </p>
                  <div className="text-yellow-500 text-sm flex items-center gap-1">
                    ⭐ {product.rating?.rate || 4.3}
                  </div>
                </div>
                <p className="text-gray-900 font-semibold text-lg mt-2">
                  ₹{product.price}
                </p>
              </Link>

              {/* Add to Cart */}
              <button
                onClick={() => handleAddToCart(product)}
                className="mt-4 w-full bg-pink-600 hover:bg-pink-700 text-white text-sm py-2 rounded-lg transition-all duration-200"
              >
                ➕ Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopSection;
