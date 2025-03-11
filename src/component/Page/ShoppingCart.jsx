import React, { useState } from 'react';
import im1 from "../Image/Rectangle 25.png";
import im2 from "../Image/product1.png";
import im3 from "../Image/product2.png";
import del from "../Image/deletecon.png";

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Blue Flower Print Crop Top",
      color: "Yellow",
      size: "M",
      price: 29.00,
      quantity: 1,
      shipping: "FREE",
      image: im1
    },
    {
      id: 2,
      name: "Lavender Hoodie",
      color: "Lavender",
      size: "XXL",
      price: 119.00,
      quantity: 1,
      shipping: "FREE",
      image: im2
    },
    {
      id: 3,
      name: "Black Sweatshirt",
      color: "Black",
      size: "XXL",
      price: 123.00,
      quantity: 2,
      shipping: "$5.00",
      image: im3
    }
  ]);

  const [couponCode, setCouponCode] = useState('');

  return (
    <div className="container mx-auto max-w-full">
      
      <nav className="text-sm py-8 px-20">
        <ol className="flex items-center">
          <li className="mr-2">
            <a href="#" className="text-gray-500 hover:text-gray-700">Home</a>
          </li>
          <li className="flex items-center before:content-['>'] before:mx-2 before:text-gray-500">
            <span className="text-gray-700 font-semibold">Add To Cart</span>
          </li>
        </ol>
      </nav>

   
      <div className="mb-8 text-md text-gray-500 px-20">
        <p className="mb-1">Please fill in the fields below and click place order to complete your purchase!</p>
        <p>Already registered? <a href="#" className="text-purple-600 hover:underline">Please login here</a></p>
      </div>

      {/* Cart Table */}
      <div className="overflow-x-auto mb-8">
        <table className="w-full border-collapse shadow-md rounded-lg ">
         
          <thead className="bg-gray-800  text-white">
            <tr>
              <th className="py-4 px-20 text-left">PRODUCT DETAILS</th>
              <th className="py-4 px-4 text-left">PRICE</th>
              <th className="py-4 px-4 text-left">QUANTITY</th>
              <th className="py-4 px-4 text-left">SHIPPING</th>
              <th className="py-4 px-4 text-left">SUBTOTAL</th>
              <th className="py-4 px-4 text-left">ACTION</th>
            </tr>
          </thead>
          
          
          <tbody className="bg-white">
            {cartItems.map((item) => (
              <tr key={item.id} className="border-b border-gray-200 hover:bg-gray-50">
                <td className="py-4 px-20">
                  <div className="flex items-center ">
                    <img src={item.image} alt={item.name} className="w-20 h-20 rounded-lg mr-4 object-cover" />
                    <div>
                      <h3 className="font-medium text-gray-800">{item.name}</h3>
                      <p className="text-sm text-gray-500">Color: {item.color}</p>
                      <p className="text-sm text-gray-500">Size: {item.size}</p>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-4 text-gray-700">${item.price.toFixed(2)}</td>
                <td className="py-4 px-4">
                  <div className="flex items-center">
                    <button className="border border-gray-300 rounded-l px-3 py-1 text-gray-500 hover:bg-gray-100">
                      -
                    </button>
                    <span className="mx-3 text-gray-700">{item.quantity}</span>
                    <button className="border border-gray-300 rounded-r px-3 py-1 text-gray-500 hover:bg-gray-100">
                      +
                    </button>
                  </div>
                </td>
                <td className="py-4 px-4 text-gray-500 font-medium">{item.shipping}</td>
                <td className="py-4 px-4 text-gray-800 font-medium">${(item.price * item.quantity).toFixed(2)}</td>
                <td className="py-4 px-4">
                  <button className="text-purple-600 hover:text-purple-800 transition-colors">
                    <img src={del} alt="Remove item" className="w-6 h-6" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Order Summary and Checkout */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5 bg-gray-50 p-10 rounded-lg shadow-sm ">
    
        <div className="space-y-5 space-x-5 p-10">
          <h3 className="text-lg font-medium text-gray-800">Discount Codes</h3>
          <p className="text-sm text-gray-600">Enter your coupon code if you have one</p>
          <div className="flex max-w-md">
            <input
              type="text"
              className="border border-gray-300 p-2 rounded-l-lg flex-grow"
              placeholder="Enter coupon code"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
            />
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 text-sm rounded-r-lg transition-colors">
              Apply Coupon
            </button>
          </div>
          <button className="border border-gray-300 text-gray-700 hover:bg-gray-100 px-6 py-2 rounded-lg text-sm transition-colors">
            Continue Shopping
          </button>
        </div>

       
        <div className="lg:pl-8 p-10">
          <div className="space-y-5 space-x-5 max-w-xs ml-auto">
            <h3 className="text-lg font-medium text-gray-800 mb-4">Order Summary</h3>
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Sub Total</span>
              <span className="text-gray-800">$513.00</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Shipping</span>
              <span className="text-gray-800">$5.00</span>
            </div>
            <div className="flex justify-between font-bold text-lg border-t border-gray-300 pt-4 mt-4">
              <span>Grand Total</span>
              <span>$518.00</span>
            </div>
            <button className="w-full bg-purple-600 hover:bg-purple-700 rounded-lg text-white py-3 mt-4 transition-colors">
              Proceed To Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;