import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartslice";
import Navbar from "../Navbar";
import FeatureSection from "../FeatureSection";
import Footer from "../Footer";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await res.json();
      setProduct(data);
    };
    fetchProduct();
  }, [id]);

  if (!product) {
    return (
      <p className="text-center text-lg text-gray-500 mt-10 animate-pulse">
        Loading product details...
      </p>
    );
  }

  return (
    <>
      <Navbar />

      {/* Product Detail Section */}
      <div className="max-w-6xl mx-auto mt-10 p-4 md:p-8 bg-white ">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          {/* Product Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={product.image}
              alt={product.title}
              className="w-[250px] h-[250px] md:w-[300px] md:h-[300px] object-contain"
            />
          </div>

          {/* Product Info */}
          <div className="w-full md:w-1/2 space-y-4">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
              {product.title}
            </h1>

            <p className="text-sm text-gray-500">
              Category: <span className="capitalize">{product.category}</span>
            </p>

            <div className="flex items-center gap-2">
              <p className="text-yellow-500 text-sm">
                ⭐ {product.rating?.rate || 4.3}
              </p>
              <p className="text-gray-400 text-sm">
                ({product.rating?.count || 100} reviews)
              </p>
            </div>

            <p className="text-xl font-semibold text-pink-600">
              ₹{product.price}
            </p>

            <p className="text-sm text-green-600">
              ✅ In Stock - Delivery in 3-5 days
            </p>

            <p className="text-gray-700 text-sm leading-relaxed">
              {product.description}
            </p>

            <button
              onClick={() => dispatch(addToCart(product))}
              className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded-lg transition-all"
            >
              ➕ Add to Cart
            </button>
          </div>
        </div>
      </div>

      <FeatureSection />
      <Footer />
    </>
  );
};

export default ProductDetails;
