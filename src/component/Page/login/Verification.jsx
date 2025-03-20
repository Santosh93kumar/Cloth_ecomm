import React from 'react'
import email2 from "../../Image/email2.png"
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function Verification() {
  const [code, setCode] = useState('0757');
  const navigate = useNavigate()

  const handleChange = (e) => {
    setCode(e.target.value);
  };
  return (
    <div className="flex flex-col md:flex-row h-screen">
              
                <div className="hidden md:block md:w-1/3 bg-contain bg-center bg-no-repeat">
                    <img 
                        src={email2}
                        className="h-full w-full object-left object-scale-down" 
                        alt="Background"
                    />
                </div>
    
                
                <div className="w-full md:w-2/3 flex h-full flex-col  px-6 md:px-12 py-15 ">
                <div className="max-w-md p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">Verification</h1>
      <p className="text-gray-600 mb-6">Verify your code.</p>
      
      <div className="mb-4">
        <label htmlFor="verificationCode" className="block text-gray-700 mb-2">
          Verification Code
        </label>
        <input
          type="text"
          id="verificationCode"
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-purple-500"
          value={code}
          onChange={handleChange}
        />
      </div>
      
      <button className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-3 px-6 rounded transition duration-200" onClick={()=>navigate('/reset-password')}>
        Verify Code
      </button>
    </div>
          </div>
  </div>
  )
}
