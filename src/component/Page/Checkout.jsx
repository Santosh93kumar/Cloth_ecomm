import React, { useState } from "react";
import product1 from "../Image/product1.png";
import product2 from "../Image/product2.png";
import product3 from "../Image/product3.png";
import { FaRegEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Checkout = () => {

  const navigate= useNavigate()

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    country: "",
    company: "",
    streetAddress: "",
    apt: "",
    city: "",
    state: "",
    postalCode: "",
    phone: "",
    saveInfo: false,
  });

  const [orderSummary] = useState([
    { product: "Blue Flower Print Crop Top", price: 29, color: "Yellow", quantity: 1, image: product1 },
    { product: "Lavender Hoodie", price: 119, color: "Lavender", quantity: 2, image: product2 },
    { product: "Black Sweatshirt", price: 123, color: "Black", quantity: 2, image: product3 },
  ]);

const [selectedAddress, setSelectedAddress] = useState("same");
  const [selectedPayment, setSelectedPayment] = useState("creditCard");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const subtotal = orderSummary.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const savings = 30; // Assuming a fixed discount
  const shipping = 5; // Assuming a fixed shipping cost
  const total = subtotal - savings - shipping;

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Breadcrumb */}
      <nav className="text-gray-500 text-sm mb-4">
        Home &gt; My Account &gt; <span className="text-black">Check Out</span>
      </nav>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <span className="w-2 h-6 bg-purple-500 rounded-full"></span> Check Out
        </h2>
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Billing Details</h3>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-medium">First Name*</label>
              <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" className="w-full bg-[#F6F6F6] p-3 rounded-lg"/>
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Last Name*</label>
              <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" className="w-full p-3 bg-[#F6F6F6] rounded-lg"/>
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Country / Region*</label>
              <input type="text" name="country" value={formData.country} onChange={handleChange} placeholder="Country / Region" className="w-full bg-[#F6F6F6] p-3 rounded-lg"/>
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Company Name</label>
              <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Company (optional)" className="w-full bg-[#F6F6F6] p-3 rounded-lg"/>
            </div>
            <div className="md:col-span-2">
              <label className="block text-gray-700 font-medium">Street Address*</label>
              <input type="text" name="streetAddress" value={formData.streetAddress} onChange={handleChange} placeholder="House number and street name" className="w-full bg-[#F6F6F6] p-3 rounded-lg"/>
            </div>
            <div className="md:col-span-2">
              <label className="block text-gray-700 font-medium">Apt, suite, unit</label>
              <input type="text" name="apt" value={formData.apt} onChange={handleChange} placeholder="Apartment, suite, unit, etc. (optional)" className="w-full p-3 bg-[#F6F6F6] rounded-lg"/>
            </div>
            <div className="md:col-span-2 flex gap-4">
              <div className="w-1/3">
                <label className="block text-gray-700 font-medium">City*</label>
                <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="Town / City" className="w-full p-3 bg-[#F6F6F6] rounded-lg"/>
              </div>
              <div className="w-1/3">
                <label className="block text-gray-700 font-medium">State*</label>
                <select name="state" value={formData.state} onChange={handleChange} className="w-full bg-[#F6F6F6] p-3 rounded-lg">
                  <option value="">Select State</option>
                </select>
              </div>
              <div className="w-1/3">
                <label className="block text-gray-700 font-medium">Postal Code*</label>
                <input type="text" name="postalCode" value={formData.postalCode} onChange={handleChange} placeholder="Postal Code" className="w-full bg-[#F6F6F6] p-3 rounded-lg"/>
              </div>
            </div>
            <div className="md:col-span-2">
              <label className="block text-gray-700 font-medium">Phone*</label>
              <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" className="w-full p-3 bg-[#F6F6F6] rounded-lg"/>
            </div>
            <div className="md:col-span-2">
              <button className="bg-purple-600 text-white p-3 rounded-lg font-semibold">
                Continue to delivery
              </button>
            </div>
            <div className="md:col-span-2 flex items-center">
              <input type="checkbox" name="saveInfo" checked={formData.saveInfo} onChange={handleChange} className="mr-2" />
              <span className="text-gray-700">Save my information for a faster checkout</span>
            </div>
          </form>
        </div>
        <div className="p-6 rounded-lg bg-white drop-shadow-xl h-fit">
          <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
          <div className="space-y-4">
            {orderSummary.map((item, index) => (
              <div key={index} className="flex items-center gap-4 border-b border-[#EDEEF2] pb-4">
                <img src={item.image} alt={item.product} className="w-16 h-16 rounded"/>
                <div className="flex-1">
                  <p className="font-semibold">{item.product} x {item.quantity}</p>
                  <p className="text-sm text-gray-500">Color: {item.color}</p>
                </div>
                <p className="font-semibold">${item.price}.00</p>
              </div>
            ))}
          </div>
          <div className="mt-4 border-b border-[#EDEEF2]">
            <div className="my-4 py-2border-b border-[#EDEEF2]">
            <p className="font-semibold text-[#3C4242]">Subtotal: <span className="text-black">${subtotal}.00</span></p>
            <p className="text-[#3C4242]">Savings: - <span className="text-black">${savings}.00</span></p>
            </div>
            <p className="text-[#3C4242] py-2">Shipping: - <span className="text-black">${shipping}.00</span></p>
            <p className="text-[#3C4242] text-lg py-2">Total: <span className="text-black">${total}.00</span></p>
          </div>
        </div>
      </div>



<div className=" mx-auto p-6">
      {/* Shipping Address */}
      <h2 className="text-lg font-semibold">Shipping Address</h2>
      <p className="text-sm text-gray-500">Select the address that matches your card or payment method.</p>
      <div className="mt-3 space-y-2">
        <label className="flex items-center space-x-2 cursor-pointer">
          <input
            type="radio"
            name="shippingAddress"
            value="same"
            checked={selectedAddress === "same"}
            onChange={() => setSelectedAddress("same")}
            className="w-4 h-4"
          />
          <span className="text-sm font-medium">Same as Billing address</span>
        </label>
        <label className="flex items-center space-x-2 cursor-pointer">
          <input
            type="radio"
            name="shippingAddress"
            value="different"
            checked={selectedAddress === "different"}
            onChange={() => setSelectedAddress("different")}
            className="w-4 h-4"
          />
          <span className="text-sm font-medium">Use a different shipping address</span>
        </label>
      </div>

      {/* Shipping Method */}
      <h2 className="mt-6 text-lg font-semibold">Shipping Method</h2>
      <div className="p-4 mt-2 bg-gray-100 rounded-md">
        <p className="font-medium">Arrives by Monday, June 7</p>
        <p className="text-sm mt-1">
          <span className="font-semibold">Delivery Charges</span> <span className="float-right font-bold">$5.00</span>
        </p>
        <p className="text-xs text-gray-500 mt-1">Additional fees may apply</p>
      </div>

      {/* Payment Method */}
      <h2 className="mt-6 text-lg font-semibold">Payment Method</h2>
      <p className="text-sm text-gray-500">All transactions are secure and encrypted.</p>

      <div className="p-4 mt-2 bg-gray-100 rounded-md">
        {/* Credit Card */}
        <label className="flex items-center space-x-2 cursor-pointer">
          <input
            type="radio"
            name="paymentMethod"
            value="creditCard"
            checked={selectedPayment === "creditCard"}
            onChange={() => setSelectedPayment("creditCard")}
            className="w-4 h-4"
          />
          <span className="text-sm font-medium">Credit Card</span>
        </label>
        <p className="text-xs text-gray-500 mt-1">We accept all major credit cards.</p>
        <div className="flex space-x-2 mt-2">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" alt="Visa" className="h-6" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-6" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Google_Pay_Logo.svg" alt="Google Pay" className="h-6" />
        </div>

        {/* Credit Card Fields */}
        <div className="grid grid-cols-2 gap-3 mt-3">
          <input type="text" placeholder="Card number" className="p-2 border rounded-md w-full text-sm" />
          <input type="text" placeholder="Name of card" className="p-2 border rounded-md w-full text-sm" />
          <input type="text" placeholder="Expiration date (MM/YY)" className="p-2 border rounded-md w-full text-sm" />
          <div className="relative">
            <input type="password" placeholder="Security Code" className="p-2 border rounded-md w-full text-sm pr-8" />
            <FaRegEye className="absolute right-3 top-3 text-gray-500 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Cash on Delivery */}
      <label className="flex items-center space-x-2 mt-4 cursor-pointer">
        <input
          type="radio"
          name="paymentMethod"
          value="cash"
          checked={selectedPayment === "cash"}
          onChange={() => setSelectedPayment("cash")}
          className="w-4 h-4"
        />
        <span className="text-sm font-medium">Cash on delivery</span>
      </label>
      <p className="text-xs text-gray-500 ml-6">Pay with cash upon delivery.</p>

      {/* PayPal */}
      <label className="flex items-center space-x-2 mt-2 cursor-pointer">
        <input
          type="radio"
          name="paymentMethod"
          value="paypal"
          checked={selectedPayment === "paypal"}
          onChange={() => setSelectedPayment("paypal")}
          className="w-4 h-4"
        />
        <span className="text-sm font-medium">PayPal</span>
      </label>

      {/* Pay Now Button */}
      <button className="mt-6 p-4 bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 rounded-md" onClick={()=>navigate('/home/confirmed')}>
        Pay Now
      </button>
    </div>
    </div>
  );
};

export default Checkout;



