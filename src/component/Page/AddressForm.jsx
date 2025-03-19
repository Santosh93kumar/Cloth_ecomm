import React from 'react';
import { FaRegUser, FaRegHeart, FaSignOutAlt } from "react-icons/fa";

const AddressForm = () => {
  return (
    <div className="mx-auto py-6 px-4 md:px-8 max-w-7xl">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6 flex flex-wrap">
        <span className="cursor-pointer hover:underline">Home</span>
        <span className="mx-2">&gt;</span>
        <span className="cursor-pointer hover:underline">My Account</span>
        <span className="mx-2">&gt;</span>
        <span className="text-black">Personal Info</span>
      </nav>

      <div className="flex flex-col md:flex-row gap-6 md:gap-10">
        {/* Sidebar */}
        <aside className="w-full md:w-1/4 p-4 md:p-6 border border-gray-200 rounded-lg md:border-r mb-6 md:mb-0 h-fit">
          <h2 className="text-xl md:text-2xl font-bold flex items-center gap-2">
            <span className="w-2 h-6 bg-purple-500 rounded-full"></span> Hello Janvi
          </h2>
          <p className="text-sm text-gray-500 mb-6">Welcome to your Account</p>

          <nav className="space-y-4">
            <button className="flex items-center gap-3 text-[#807D7E] hover:text-black w-full text-left">
              <FaRegUser /> My Orders
            </button>
            <button className="flex items-center gap-3 text-[#807D7E] hover:text-black w-full text-left">
              <FaRegHeart /> Wishlist
            </button>
            <button className="flex items-center gap-3 text-black font-bold w-full text-left">
              <FaRegUser /> My Info
            </button>
            <button className="flex items-center gap-3 text-[#807D7E] hover:text-black w-full text-left">
              <FaSignOutAlt /> Sign Out
            </button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="w-full md:w-3/4">
          <div className="p-4 md:p-6 max-w-4xl mx-auto">
            <div className="mb-8">
              <div>
                <h3 className="text-md font-bold mb-4 text-gray-700">Add Address</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="text-sm mb-1 block text-gray-700">First Name</label>
                    <input type="text" placeholder="First Name" className="w-full p-2 bg-gray-100 rounded border border-gray-200" />
                  </div>
                  <div>
                    <label className="text-sm mb-1 block text-gray-700">Last Name</label>
                    <input type="text" placeholder="Last Name" className="w-full p-2 bg-gray-100 rounded border border-gray-200" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="text-sm mb-1 block text-gray-700">Country / Region</label>
                    <input type="text" placeholder="Country / Region" className="w-full p-2 bg-gray-100 rounded border border-gray-200" />
                  </div>
                  <div>
                    <label className="text-sm mb-1 block text-gray-700">Company Name</label>
                    <input type="text" placeholder="Company (optional)" className="w-full p-2 bg-gray-100 rounded border border-gray-200" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="text-sm mb-1 block text-gray-700">Street Address</label>
                    <input type="text" placeholder="House number and street name" className="w-full p-2 bg-gray-100 rounded border border-gray-200" />
                  </div>
                  <div>
                    <label className="text-sm mb-1 block text-gray-700">Apt, suite, unit</label>
                    <input type="text" placeholder="apartment, suite, unit (optional)" className="w-full p-2 bg-gray-100 rounded border border-gray-200" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="text-sm mb-1 block text-gray-700">City</label>
                    <input type="text" placeholder="Town / City" className="w-full p-2 bg-gray-100 rounded border border-gray-200" />
                  </div>
                  <div>
                    <label className="text-sm mb-1 block text-gray-700">State</label>
                    <select className="w-full p-2 bg-gray-100 rounded border border-gray-200 appearance-none">
                      <option>State</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="text-sm mb-1 block text-gray-700">Phone</label>
                    <input type="text" placeholder="Phone" className="w-full p-2 bg-gray-100 rounded border border-gray-200" />
                  </div>
                  <div>
                    <label className="text-sm mb-1 block text-gray-700">Postal Code</label>
                    <input type="text" placeholder="Postal Code" className="w-full p-2 bg-gray-100 rounded border border-gray-200" />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="text-sm mb-1 block text-gray-700">Delivery Instruction</label>
                  <textarea placeholder="Delivery Instruction" className="w-full p-2 bg-gray-100 rounded border border-gray-200 h-24"></textarea>
                </div>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center">
                    <input type="checkbox" id="defaultShipping" className="mr-2" />
                    <label htmlFor="defaultShipping" className="text-sm text-gray-700">Set as default shipping address</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="defaultBilling" className="mr-2" />
                    <label htmlFor="defaultBilling" className="text-sm text-gray-700">Set as default billing address</label>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <button className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 transition-colors">Save</button>
                  <button className="text-gray-600 px-4 py-2 hover:text-gray-800 transition-colors">Cancel</button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AddressForm;