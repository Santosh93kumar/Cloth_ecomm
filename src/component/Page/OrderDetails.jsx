import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {  Menu, X } from "lucide-react";
import { FaAngleLeft } from "react-icons/fa6";

const OrderDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const order = location.state?.order;
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  if (!order) {
    return <p className="text-center text-gray-500">No order details found.</p>;
  }

  const cartItems = order.items || [];

  const steps = [
    { label: "Order Placed", completed: true },
    { label: "In Progress", completed: true },
    { label: "Shipped", completed: true },
    { label: "Delivered", completed: false },
  ];

  const completedSteps = steps.filter((step) => step.completed).length;
  const lastCompletedIndex = Math.max(completedSteps - 1, 0.4);
  const arrowPosition = (lastCompletedIndex / (steps.length - 1)) * 100;

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6 flex flex-col md:flex-row">
      {/* Hamburger Icon for Mobile */}
      {/* <div className="md:hidden flex justify-between items-center w-full h-full mb-4">
        <h2 className="text-lg font-semibold">Hello Jhanvi</h2>
        <Menu onClick={toggleSidebar} className="text-gray-700 cursor-pointer" />
      </div> */}

      {/* Sidebar */}
      {/* <aside
        className={`fixed inset-y-0 left-0  w-3/4 sm:w-1/2 md:w-1/4 p-6 bg-white shadow-lg transform transition-transform z-1  md:relative md:translate-x-0 
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} md:block top-2 `}
      >
        {/* Close Button 
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Hello Jhanvi</h2>
          <X onClick={closeSidebar} className="text-gray-700 cursor-pointer md:hidden" />
        </div>

        <p className="text-gray-500 mb-6  " >Welcome to your Account</p>
        <ul>
          <li className="py-2 text-gray-700 flex items-center cursor-pointer hover:bg-gray-200 rounded-md" onClick={() => navigate("/my-order")}>📦 My orders</li>
          <li className="py-2 text-gray-700 flex items-center cursor-pointer hover:bg-gray-200 rounded-md">❤️ Wishlist</li>
          <li className="py-2 text-gray-700 flex items-center cursor-pointer hover:bg-gray-200 rounded-md" onClick={() => navigate("/my-info")}>👤 My info</li>
          <li className="py-2 text-gray-700 flex items-center cursor-pointer hover:bg-gray-200 rounded-md">🔓 Sign out</li>
        </ul>
      </aside> */}

      <main className="w-full md:w-3/4 p-6 bg-white shadow-md rounded-lg mt-6 md:mt-0 md:ml-6">
        <div className="p-4 md:p-6 max-w-3xl mx-auto">

        <h1 className="text-2xl font-semibold  mb-4 flex items-center gap-2" onClick={() => navigate("/my-order")}><FaAngleLeft sixe={25}/>Order Details</h1>

          <div className="bg-gray-100 p-4 rounded-md shadow-sm mb-6">
            <div className="flex flex-col md:flex-row justify-between">
              <div>
                <p>
                  Order no: <span className="font-bold">#{order?.id}</span>
                </p>
                <p className="text-sm text-gray-500">Placed On: {order?.date}</p>
                <p className="text-sm text-gray-500">
                  Estimated Delivery: {order?.deliveryDate}
                </p>
              </div>
              <div>
                <p className="font-bold text-lg mt-2 md:mt-0">
                  Total: ${
                    cartItems.reduce((total, item) => total + item.price * item.qty, 0).toFixed(2)
                  }
                </p>
                <p className="text-sm text-gray-500">Payment: {order?.paymentMethod}</p>
              </div>
            </div>
          </div>

          {/* Progress Steps */}
          <div className="relative flex items-center justify-between w-full max-w-md mx-auto mb-6 overflow-x-auto">
            <div className="absolute top-3 left-8 right-8 h-[2px] bg-gray-300 transform -translate-y-1/2 z-0"></div>

            {steps.map((step, index) => (
              <div key={index} className="relative flex flex-col items-center text-center z-10">
                <div
                  className={`w-6 h-6 md:w-5 md:h-5 rounded-full flex items-center justify-center  
              ${step.completed ? "bg-gray-900 text-white" : "bg-gray-300"} z-10 relative`}
                ></div>
                <p className={`mt-2 text-xs md:text-sm ${step.completed ? "text-black font-semibold" : "text-gray-400"}`}>
                  {step.label}
                </p>
              </div>
            ))}
          </div>

          {/* Status Update */}
          <div className="flex flex-col md:flex-row items-center space-x-4 shadow-sm mb-6 w-full max-w-lg mx-auto bg-gray-100 p-4 rounded-lg relative text-center text-sm">
          {completedSteps > 0 && completedSteps < steps.length && (
              <div
                className="absolute top-0 w-4 h-4 bg-gray-100 rotate-45"
                style={{
                  left: `${arrowPosition}%`,
                  transform: 'translate(-50%, -50%)'
                }}
              ></div>
            )}
            <p className="text-gray-500 text-xs md:text-sm">8 June 2023 3:40 PM</p>

            <p className="text-gray-800 font-medium">
              {completedSteps === 1
                ? "Your order has been successfully placed."
                : completedSteps === 2
                  ? "Your order is in progress."
                  : completedSteps === 3
                    ? "Your order has been shipped."
                    : "Your order has been delivered."}
            </p>
          </div>

          {/* Order Items */}
          <div className="w-full max-w-3xl bg-white shadow-md rounded-lg p-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col md:flex-row items-center justify-between p-4 border-b border-gray-300 last:border-none"
              >
                <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full md:w-20 md:h-25 object-cover rounded"
                  />
                  <div className="text-center md:text-left">
                    <h2 className="font-semibold text-gray-800">{item.name}</h2>
                    <p className="text-gray-500 text-sm">Color: {item.color}</p>
                  </div>
                </div>
                <div className="flex justify-between items-center w-full md:w-auto mt-2 md:mt-0 mr-4 gap-8">
                  <p className="text-gray-700 text-sm md:text-base">Qty: {item.qty}</p>
                  <p className="font-bold text-sm md:text-base ml-4">${item.price.toFixed(2)}</p>
                </div>
                <button className="text-gray-500 hover:text-red-500 transition ml-4">
                  ✖
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default OrderDetails;
