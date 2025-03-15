import React from 'react';

const AddressForm = () => {
  return (
    <div className=" p-6 max-w-4xl mx-auto h-screen">
      <div className="flex mb-8">
      </div>
      
      <div className="mb-6">
        <h3 className="text-md font-bold mb-4 text-gray-700">Add Address</h3>
        
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="text-sm mb-1 block text-gray-700">First Name</label>
            <input type="text" placeholder="First Name" className="w-full p-2 bg-gray-100 rounded border border-gray-200"  />
          </div>
          <div>
            <label className="text-sm mb-1 block  text-gray-700">Last Name</label>
            <input type="text" placeholder="Last Name" className="w-full p-2 bg-gray-100 rounded border border-gray-200" />
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="text-sm mb-1 block  text-gray-700">Country / Region</label>
            <input type="text" placeholder="Country / Region" className="w-full p-2 bg-gray-100 rounded border border-gray-200" />
          </div>
          <div>
            <label className="text-sm mb-1 block  text-gray-700">Company Name</label>
            <input type="text" placeholder="Company (optional)" className="w-full p-2 bg-gray-100 rounded border border-gray-200" />
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="text-sm mb-1 block  text-gray-700">Street Address</label>
            <input type="text" placeholder="House number and street name" className="w-full p-2 bg-gray-100 rounded border border-gray-200" />
          </div>
          <div>
            <label className="text-sm mb-1 block  text-gray-700">Apt, suite, unit</label>
            <input type="text" placeholder="apartment, suite, unit (optional)" className="w-full p-2 bg-gray-100 rounded border border-gray-200" />
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="text-sm mb-1 block  text-gray-700 ">City</label>
            <input type="text" placeholder="Town / City" className="w-full p-2 bg-gray-100 rounded border border-gray-200" />
          </div>
          <div>
            <label className="text-sm mb-1 block">State</label>
            <div className="relative">
              <select className="w-full p-2 bg-gray-100 rounded border border-gray-200 appearance-none">
                <option>State</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="text-sm mb-1 block  text-gray-700">Phone</label>
            <input type="text" placeholder="Phone" className="w-full p-2 bg-gray-100 rounded border border-gray-200" />
          </div>
          <div>
            <label className="text-sm mb-1 block  text-gray-700 ">Postal Code</label>
            <input type="text" placeholder="Postal Code" className="w-full p-2 bg-gray-100 rounded border border-gray-200" />
          </div>
        </div>
        
        <div className="mb-4">
          <label className="text-sm mb-1 block  text-gray-700">Delivery Instruction</label>
          <textarea placeholder="Delivery Instruction" className="w-full p-2 bg-gray-100 rounded border border-gray-200 h-24"></textarea>
        </div>
        
        <div className="space-y-2 mb-6">
          <div className="flex items-center">
            <input type="checkbox" id="defaultShipping" className="mr-2" />
            <label htmlFor="defaultShipping" className="text-sm  text-gray-700">Set as default shipping address</label>
          </div>
          <div className="flex items-center">
            <input type="checkbox" id="defaultBilling" className="mr-2  text-gray-700 " />
            <label htmlFor="defaultBilling" className="text-sm  text-gray-700">Set as default billing address</label>
          </div>
        </div>
        
        <div className="flex gap-4">
          <button className="bg-purple-600 text-white px-6 py-2 rounded">Save</button>
          <button className="text-gray-600 px-4 py-2">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default AddressForm;