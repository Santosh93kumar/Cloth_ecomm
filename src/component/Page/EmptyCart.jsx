import React from "react";
import emptycart from "../Image/EmptyCart.png"

const EmptyCart = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center px-4">
      <img
        src={emptycart}
        alt="Empty Cart"
        className="w-64 h-64 mb-6"
      />
      <h2 className="text-2xl font-bold text-gray-900">
        Your cart is empty and sad :(
      </h2>
      <p className="text-gray-500 mb-6">Add something to make it happy!</p>
      <button className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700">
        Continue Shopping
      </button>
    </div>
  );
};

export default EmptyCart;