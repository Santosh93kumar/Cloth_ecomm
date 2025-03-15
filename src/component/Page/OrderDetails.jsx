import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const OrderDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const order = location.state?.order;

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
  const lastCompletedIndex = completedSteps - 1.20;
  const arrowPosition = (lastCompletedIndex / (steps.length - 1)) * 100;

  return (
    <div className="p-4 md:p-6 max-w-3xl mx-auto">
      <button
        onClick={() => navigate("/")}
        className="text-sm text-blue-500 hover:underline mb-4 flex items-center gap-2"
      >
        <ArrowLeft size={16} /> 
      </button>

      <h1 className="text-2xl font-semibold mb-4">Order Details</h1>

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
        {completedSteps > 0 && (
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
                className="w-24 h-24 object-contain rounded-lg"
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
  );
};

export default OrderDetails;