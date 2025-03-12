import React, { useState } from "react";
import { FaRegUser, FaRegHeart, FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import product1 from "../Image/product1.png";
import product2 from "../Image/product2.png";
import product3 from "../Image/product3.png";

const Wishlist = () => {
  const navigate = useNavigate();

  const [wishlistItems, setWishlistItems] = useState([
    { id: 1, name: "Blue Flower Print Crop Top", color: "Yellow", quantity: 1, price: 29.0, image: product1 },
    { id: 2, name: "Yellow Flower Print Dress", color: "Yellow", quantity: 1, price: 78.0, image: product2 },
    { id: 3, name: "White Hoodie long sleeve", color: "White", quantity: 1, price: 134.0, image: product3 },
    { id: 4, name: "Brown men’s long sleeve T-shirt", color: "Brown", quantity: 1, price: 93.0, image: product1 },
  ]);

  const removeFromWishlist = (id) => {
    setWishlistItems(wishlistItems.filter((item) => item.id !== id));
  };

  return (
    <div className="mx-auto py-10 px-8">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        <span className="cursor-pointer hover:underline" onClick={() => navigate("/")}>
          Home
        </span>{" "}
        &gt;{" "}
        <span className="cursor-pointer hover:underline" onClick={() => navigate("/account")}>
          My Account
        </span>{" "}
        &gt; <span className="text-black">Wishlist</span>
      </nav>

      <div className="flex flex-col md:flex-row gap-10">
        {/* Sidebar */}
        <aside className="w-full md:w-1/4 p-6 border-r border-gray-200">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <span className="w-2 h-6 bg-purple-500 rounded-full"></span> Hello Janvi
          </h2>
          <p className="text-sm text-gray-500 mb-6">Welcome to your Account</p>

          <nav className="space-y-4">
            <button className="flex items-center gap-3 text-[#807D7E] hover:text-black">
              <FaRegUser /> My Orders
            </button>
            <button className="flex items-center gap-3 text-black font-bold">
              <FaRegHeart /> Wishlist
            </button>
            <button className="flex items-center gap-3 text-[#807D7E] hover:text-black">
              <FaRegUser /> My Info
            </button>
            <button className="flex items-center gap-3 text-[#807D7E] hover:text-black">
              <FaSignOutAlt /> Sign Out
            </button>
          </nav>
        </aside>

        {/* Wishlist Content */}
        <div className="flex-1 p-6">
          <h2 className="text-2xl font-bold mb-4">Wishlist</h2>
          <div className="bg-white rounded-lg p-4">
            {wishlistItems.length === 0 ? (
              <p className="text-gray-500 text-center">Your wishlist is empty.</p>
            ) : (
              wishlistItems.map((item) => (
                <div key={item.id} className="flex items-center justify-between border-b border-[#EDEEF2] py-4">
                  <div className="flex items-center">
                    
                    <button
                      onClick={() => removeFromWishlist(item.id)}
                      className="mr-4 text-[#3C4242] hover:text-red-600 text-lg font-bold"
                    >
                      ✖
                    </button>
                    
                    <img src={item.image} alt={item.name} className="w-16 h-16 rounded-md" />
                   
                    <div className="ml-4">
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-gray-500 text-sm">Color: {item.color}</p>
                      <p className="text-gray-500 text-sm">Quantity: {item.quantity}</p>
                    </div>
                  </div>
                 
                  <div className="flex items-center">
                    <span className="font-semibold text-gray-700 text-lg">${item.price.toFixed(2)}</span>
                    <button className="ml-4 bg-purple-600 text-white px-4 py-2 rounded-md">
                      Add to cart
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
