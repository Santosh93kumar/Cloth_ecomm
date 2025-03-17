import React, { useState } from 'react';
import { EyeOff, Eye } from 'lucide-react';
import pass from "../../Image/password.png";


const Password = () => {
  const [password, setPassword] = useState('123456');
  const [confirmPassword, setConfirmPassword] = useState('123456');
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    checkPasswordsMatch(e.target.value, confirmPassword);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    checkPasswordsMatch(password, e.target.value);
  };

  const checkPasswordsMatch = (pass, confirmPass) => {
    setPasswordsMatch(pass === confirmPass);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <>
   
    <div className="flex flex-col md:flex-row h-screen">
     
      <div className="hidden md:block md:w-1/3 bg-contain bg-center bg-no-repeat">
        <img 
          src={pass}
          className="h-full w-full object-cover" 
          alt="Background"
        />
      </div>
    
      
      <div className="w-full md:w-2/3 flex h-full flex-col bg-white px-6 md:px-12 py-10">
        <div className="max-w-lg">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Create New Password</h1>
          <p className="text-gray-500 mb-8">Your new password must be different from previous used passwords.</p>
          
          <div className="mb-1">
            <label htmlFor="password" className="block text-gray-700 text-xl mb-2">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:outline-none"
                value={password}
                onChange={handlePasswordChange}
              />
              <button 
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
              >
                {showPassword ? 
                  <Eye size={24} /> : 
                  <EyeOff size={24} />
                }
              </button>
            </div>
          </div>
          <p className="text-gray-500 mb-6">Must be at least 8 characters.</p>
          
          <div className="mb-2">
            <label htmlFor="confirmPassword" className="block text-gray-700 text-xl mb-2">
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:outline-none"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
              />
              <button 
                type="button"
                onClick={toggleConfirmPasswordVisibility}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
              >
                {showConfirmPassword ? 
                  <Eye size={24} /> : 
                  <EyeOff size={24} />
                }
              </button>
            </div>
          </div>
          
          {!passwordsMatch && (
            <p className="text-red-600 mb-8">New password and confirm new password do not match</p>
          )}
          
          <div className="mt-12">
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-4 px-8 rounded-lg text-xl transition duration-200">
              Reset Password
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Password;