import React, { useState } from 'react';
import { FaTwitter, FaEye, FaEyeSlash } from 'react-icons/fa';
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from 'react-router-dom';

const SignIn = ({ onLoginSuccess }) => { // Add onLoginSuccess prop
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [formData, setFormData] = useState({ username: "", password: "" });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleSignUpClick = () => {
        navigate('/sign-up');
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" }); // Clear error on input change
    };

    const validateForm = () => {
        let tempErrors = {};
        if (!formData.username.trim()) tempErrors.username = "Username or Email is required";
        if (!formData.password.trim()) tempErrors.password = "Password is required";
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log("Form Submitted:", formData);
            // Call the onLoginSuccess callback to update the parent state
            onLoginSuccess();
        }
    };

    return (
        <div className="flex flex-col md:flex-row h-screen">
            {/* Left Section - Image */}
            <div className="hidden md:block md:w-1/2 bg-contain bg-center bg-no-repeat">
                <img 
                    src="https://s3-alpha-sig.figma.com/img/d9c7/44e3/7957a494304dd200153b27e7be069984?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=HsfH5SIrcxUKWFj3utsKaJ108hWKRiO00gnDVmNt-uGld~M3WsdW-N05iCZ-JEizbbjml7Pe2nGQXZqgUf~2mIutXtsf23bVvseAZVh83FOGZWh22cYfobrjizNH9-WM6zN-54l5SHStiYfrclCUZZdrcPJW1~blsrPQN6l9H-U-pcad7y8Sm4Vj5Uy3T28zV65XGlC6gueg6P-Gpai18fODn6PcDJxC9XvAS5lrOYt4I4jefvwbhO0iJXKQkN4Ng-vHfx34u157UJIJhMuFIR-ZK6TjTc02r9pSoJdH6uo5H3LwtHytOgo1C60oCIXuQTVfN355tuGgLUnpmVRk3Q__" 
                    className="h-full w-full object-cover" 
                    alt="Background"
                />
            </div>

            {/* Right Section - Sign-in Form */}
            <div className="w-full md:w-1/2 flex h-full flex-col justify-center items-center bg-white px-6 md:px-12 py-12">
                <div className="w-full max-w-md">
                    <h2 className="text-2xl md:text-3xl font-bold mb-6 text-start">Sign In Page</h2>
                    
                    <button className="w-full border border-gray-300 text-[#8A33FD] py-2 px-4 rounded mb-4 flex items-center justify-center hover:bg-gray-100 transition">
                        <FcGoogle className="mr-2" /> Continue With Google
                    </button>
                    <button className="w-full border border-gray-300 text-[#8A33FD] py-2 px-4 rounded mb-4 flex items-center justify-center hover:bg-gray-100 transition">
                        <FaTwitter className="mr-2 text-blue-500 text-xl" /> Continue With Twitter
                    </button>
                    
                    <div className="flex items-center my-4">
                        <hr className="flex-grow border-gray-300" />
                        <span className="mx-2 text-gray-500">OR</span>
                        <hr className="flex-grow border-gray-300" />
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                User name or email address
                            </label>
                            <input
                                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.username ? "border-red-500" : ""}`}
                                id="username"
                                name="username"
                                type="text"
                                placeholder="Username or Email"
                                value={formData.username}
                                onChange={handleChange}
                            />
                            {errors.username && <p className="text-red-500 text-xs mt-1">{errors.username}</p>}
                        </div>

                        <div className="mb-6 relative">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pr-10 ${errors.password ? "border-red-500" : ""}`}
                                    id="password"
                                    name="password"
                                    type={passwordVisible ? "text" : "password"}
                                    placeholder="Enter your password"
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                                <span className="absolute inset-y-0 right-3 flex items-center text-sm leading-5 cursor-pointer" onClick={togglePasswordVisibility}>
                                    {passwordVisible ? <FaEyeSlash className="text-gray-500" /> : <FaEye className="text-gray-500" />}
                                </span>
                            </div>
                            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
                            <p className="text-right text-black-500 text-sm mt-2 underline">
                                <a href="#" onClick={()=>navigate("/forgot-password")}>Forgot your password?</a>
                            </p>
                        </div>

                        <div className="flex items-center justify-between">
                            <button
                                className="w-[40%] bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="submit"
                                onClick={()=>navigate("/signin")}
                            >
                                Sign In
                            </button>
                        </div>

                        <p className="text-start text-gray-500 text-xs mt-4">
                            Don’t have an account? <span onClick={handleSignUpClick} className="text-blue-500 cursor-pointer">Sign up</span>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignIn;