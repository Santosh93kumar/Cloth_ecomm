import React from 'react';
import { Link } from 'react-router-dom';
import email from "../../Image/email1.png";
import { useNavigate } from "react-router-dom";

export default function Email() {

  const navigate= useNavigate()

  return (
    <div className="flex flex-col md:flex-row h-screen">
            {/* Left Section - Image */}
            <div className="hidden md:block md:w-1/3 bg-contain bg-center bg-no-repeat">
                <img 
                    src={email}
                    className="h-full w-full object-left object-scale-down" 
                    alt="Background"
                />
            </div>

            {/* Right Section - Sign-in Form */}
            <div className="w-full md:w-2/3 flex h-full flex-col  px-6 md:px-12 py-15 ">
        <div className="max-w-md w-full">
          <h1 className="text-2xl font-semibold py-8  text-gray-800 mb-4">
            Check Email
          </h1>
          
          <p className="text-gray-600 text-sm mb-2 leading-relaxed" onClick={()=>navigate('/varification')}>
            Please check your email inbox and click on the provided link to reset your 
            password. If you don't receive email,{' '}
            <Link to="/resend" className="text-purple-600 hover:underline font-medium" >
              Click here to resend
            </Link>
          </p>
          
          <div className="mt-6">
            <Link 
              to="/login" 
              className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-3 w-3 mr-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M15 19l-7-7 7-7" 
                />
              </svg>
              Back to Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
