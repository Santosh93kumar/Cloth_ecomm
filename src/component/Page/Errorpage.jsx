import React from 'react';
import { useNavigate } from 'react-router-dom';
import error from "../Image/404.png";

export default function ErrorPage() {
  const navigate = useNavigate();

  const handleNavigateHome = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-4 bg-gray-50">
      <div className="container mx-auto max-w-lg">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6">
            <img 
              src={error} 
              alt="Error 404" 
              className="w-3xl max-w-md h-3xl object-contain"
            />
          </div>
          
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              Oops! Page not found
            </h1>
            <p className="text-lg text-gray-600">
              The page you are looking for might have been removed or
              temporarily unavailable.
            </p>
          </div>
          
          <div>
            <button 
              onClick={handleNavigateHome}
              className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-8 rounded-lg transition duration-300 shadow-md"
            >
              Back in home page
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}