import React, { useState } from "react";
import { FaRegUser, FaRegHeart, FaSignOutAlt, FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import product1 from "../Image/product1.png";
import product2 from "../Image/product2.png";
import product3 from "../Image/product3.png";

const Wishlist = () => {
  const navigate = useNavigate();

  // Wishlist items
  const [wishlistItems, setWishlistItems] = useState([]);

  // Recently viewed items
  const [recentlyViewed, setRecentlyViewed] = useState([
    { id: 1, name: "Casual Shirt", price: "$19.99", brand: "Jhanvi’s Brand", image: product1 },
    { id: 2, name: "Sports Shoes", price: "$34.99", brand: "AS’s Brand", image: product2 },
    { id: 3, name: "Leather Jacket", price: "$59.99", brand: "MM’s Brand", image: product3 },
    { id: 4, name: "Classic Watch", price: "$79.99", brand: "Nike’s Brand", image: product1 },
  ]);

  const toggleWishlist = (product) => {
    const isAlreadyInWishlist = wishlistItems.some((item) => item.id === product.id);
    
    if (isAlreadyInWishlist) {
      setWishlistItems(wishlistItems.filter((item) => item.id !== product.id));
      toast.error("Removed from Wishlist");
    } else {
      setWishlistItems([...wishlistItems, product]);
      toast.success("Added to Wishlist");
    }
  };

  const removeFromWishlist = (id) => {
    setWishlistItems(wishlistItems.filter((item) => item.id !== id));
    toast.error("Removed from Wishlist");
  };

  return (
    <div className="mx-auto py-10 px-8">
      <ToastContainer position="top-right" autoClose={2000} />
      
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        <span className="cursor-pointer hover:underline" onClick={() => navigate("/")}>Home</span> &gt; 
        <span className="cursor-pointer hover:underline" onClick={() => navigate("/account")}>My Account</span> &gt; 
        <span className="text-black">Wishlist</span>
      </nav>
      

      <div className="flex flex-col md:flex-row gap-10">
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
              <div className="flex flex-col items-center justify-center text-center py-16">
                <div className="w-16 h-16 flex items-center justify-center border-2 border-green-500 rounded-full">
                  <FaRegHeart className="text-green-500 text-4xl" />
                </div>
                <h3 className="text-2xl font-bold mt-4">Your wishlist is empty.</h3>
                <p className="text-gray-500 mt-2">You don’t have any products in the wishlist yet.</p>
                <button onClick={() => navigate("/shop")} className="mt-6 bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700 transition">
                  Continue Shopping
                </button>
              </div>
            ) : (
              wishlistItems.map((item) => (
                <div key={item.id} className="flex items-center justify-between border-b border-[#EDEEF2] py-4">
                  <div className="flex items-center">
                    <button onClick={() => removeFromWishlist(item.id)} className="mr-4 text-[#3C4242] hover:text-red-600 text-lg font-bold">✖</button>
                    <img src={item.image} alt={item.name} className="w-16 h-16 rounded-md" />
                    <div className="ml-4">
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-gray-500 text-sm">{item.brand}</p>
                    </div>
                  </div>
                  <span className="font-semibold text-gray-700 text-lg">{item.price}</span>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Recently Viewed Section */}
      <div className="mx-auto py-10 px-8">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <span className="w-2 h-6 bg-purple-500 rounded-full"></span>Recently Viewed
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {recentlyViewed.map((product) => (
            <div key={product.id} className="rounded-xl p-4 relative">
              <button
                className="absolute top-8 right-8 rounded-full bg-white p-2 transition-transform duration-300 hover:scale-110"
                onClick={() => toggleWishlist(product)}
              >
                {wishlistItems.some((item) => item.id === product.id) ? (
                  <FaHeart className="text-red-500 text-xl" />
                ) : (
                  <FaRegHeart className="text-gray-400 text-xl" />
                )}
              </button>
              
              <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded-lg" />
              <div className="mt-3 flex place-content-between text-[#3C4242]">
                <div>
                  <h3 className="text-lg font-semibold truncate">{product.name}</h3>
                  <p className="text-gray-500">{product.brand}</p>
                </div>
                <p className="mt-1 text-lg font-bold">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;