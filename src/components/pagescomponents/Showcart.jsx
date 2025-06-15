import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../../redux/cartslice";

const Showcart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleIncreaseQuantity = (id) => {
    dispatch(increaseQuantity(id));
  };

  const handleDecreaseQuantity = (id, quantity) => {
    if (quantity > 1) {
      dispatch(decreaseQuantity(id));
    }
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div className="max-w-5xl mx-auto mt-10 px-4">
      <h1 className="text-4xl font-bold mb-10 text-center text-gray-800 underline decoration-pink-500 underline-offset-4">
        🛒 Your Shopping Cart
      </h1>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-600 text-lg">
          Your cart is empty 😔
        </p>
      ) : (
        <div className="space-y-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row justify-between items-center bg-white shadow-lg rounded-2xl p-4 border border-pink-200"
            >
              {/* Left: Image and Info */}
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-24 h-24 object-contain border border-gray-200 rounded-lg shadow"
                />
                <div>
                  <h2 className="font-semibold text-gray-800 text-lg">
                    {item.title}
                  </h2>
                  <p className="text-sm text-gray-600 mt-1">
                    ₹{item.price} × {item.quantity} ={" "}
                    <span className="font-semibold text-blue-600">
                      ₹{(item.price * item.quantity).toFixed(2)}
                    </span>
                  </p>

                  <div className="flex gap-2 mt-2">
                    <button
                      onClick={() =>
                        handleDecreaseQuantity(item.id, item.quantity)
                      }
                      className="bg-yellow-400 text-white px-3 py-1 rounded-md text-sm hover:bg-yellow-500 transition"
                    >
                      ➖
                    </button>
                    <button
                      onClick={() => handleIncreaseQuantity(item.id)}
                      className="bg-pink-500 text-white px-3 py-1 rounded-md text-sm hover:bg-pink-600 transition"
                    >
                      ➕
                    </button>
                  </div>
                </div>
              </div>

              {/* Right: Remove */}
              <button
                onClick={() => handleRemoveFromCart(item.id)}
                className="mt-4 md:mt-0 bg-red-500 text-white w-32 h-10 text-sm font-medium rounded-md hover:bg-red-600 transition-all duration-200"
              >
                ❌ Remove
              </button>
            </div>
          ))}

          {/* Total Section */}
          <div className="text-right mt-10 border-t pt-6">
            <h2 className="text-2xl font-bold mb-10 text-gray-800">
              Total Amount:{" "}
              <span className="text-pink-600">
                ₹{calculateTotal().toFixed(2)}
              </span>
            </h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default Showcart;
