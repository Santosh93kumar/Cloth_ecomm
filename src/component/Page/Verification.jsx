import React from 'react'
import email2 from "../Image/email2.png"

export default function Verification() {
  return (
    <div className="grid grid-cols-10 h-screen w-full">
      
    <div className="hidden md:block col-span-4 bg-amber-500">
      <img 
        src={email2}
        alt="Friends smiling" 
        className="w-full h-screen object-cover object-center"
      />
    </div>
    
    
    <div className="col-span-10 md:col-span-6 flex flex-col  px-8 md:px-16 bg-white">
      <div className="max-w-md">
        <h1 className="text-2xl font-semibold py-8  text-gray-800 mb-4">
          Check Email
        </h1>
        
        <p className="text-gray-600 text-sm mb-2 leading-relaxed">
          Please check your email inbox and click on the provided link to reset your 
          password. If you don't receive email,{' '}
          <Link to="/resend" className="text-purple-600 hover:underline font-medium">
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
  )
}
