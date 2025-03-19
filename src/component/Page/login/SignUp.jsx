import React, { useState } from "react";
import { FaTwitter, FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from 'react-router-dom';

const SignUp = ({ onSignUpSuccess }) => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [termsChecked, setTermsChecked] = useState(false);
    const [termsError, setTermsError] = useState("");
    const [newsletterChecked, setNewsletterChecked] = useState(false);
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const validateEmail = (value) => {
        setEmail(value);
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        setEmailError(emailPattern.test(value) ? "" : "Please enter a valid email address");
    };

    const validatePassword = (value) => {
        setPassword(value);
        setPasswordError(value.length >= 8 ? "" : "Password must be at least 8 characters");
    };

    const handleSignInClick = (e) => {
        e.preventDefault(); 
        let valid = true;
    
        if (!email) {
            setEmailError("Email is required");
            valid = false;
        } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
            setEmailError("Please enter a valid email address");
            valid = false;
        } else {
            setEmailError("");
        }
    
        if (!password) {
            setPasswordError("Password is required");
            valid = false;
        } else if (password.length < 8) {
            setPasswordError("Password must be at least 8 characters");
            valid = false;
        } else {
            setPasswordError("");
        }
    
        if (!termsChecked) {
            setTermsError("You must agree to the terms");
            valid = false;
        } else {
            setTermsError("");
        }
    
        if (valid) {
            console.log("Form Submitted:", { email, password });
            // navigate('/home');
            onSignUpSuccess?.();
        }
    };

    return (
        <div className="flex flex-col md:flex-row w-full min-h-screen">
            {/* Left Side Image */}
            <div className="hidden md:flex md:w-1/2 h-screen w-full bg-cover bg-center bg-no-repeat">
                <img
                    src="https://s3-alpha-sig.figma.com/img/9f91/4df4/eea76dc5260efee6392481867d9947a2?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=KtPxCNwpVlNo2iTkFCoI~0nT~mjBRPqWlPlseSJrs6fjFddPoImnggLwoPdmZGhwFeMh2mAX8tlJRJMVZOscE6-Eh6CJFX~mHygciTXuM8LHdwx8SdxegcE4VrplOwMXBMYXUJdT5infLk57EsxTXPyeITAeTw81fyJp80iK2hWY54b-U4oBPPoSRLZqfptd9tbMEU7FRPyhejaxSXFOHP3JssUd~Yc05ES4BHT4L0cA~dpw8SXLOeFqUErOx5Hd82VGRnIReMYfgizhWeCLktItzg2YWf3qj5i-mBwlFmNbB-xP~QGoCOGl4Ra7K3tlHyUktbWkt5GQpvc88qgZCw__"
                    className="h-full w-full object-fit"
                    alt="Background"
                />
            </div>

            {/* Right Side Form */}
            <div className="w-full md:w-1/2 flex items-center justify-center bg-white px-6 md:px-12 py-10">
                <div className="w-full max-w-sm sm:max-w-md">
                    <h2 className="text-3xl font-bold text-start mb-4">Sign Up</h2>
                    <p className="text-gray-600 text-start mb-6">
                        Sign up for free to access any of our products
                    </p>

                    {/* Social Logins */}
                    <button className="w-full border border-gray-300 text-[#8A33FD] py-2 px-4 rounded mb-3 flex items-center justify-center hover:bg-gray-100 transition">
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

                    {/* Form */}
                    <form >
                        {/* Email Field */}
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Email Address
                            </label>
                            <input
                                className={`w-full border rounded px-3 py-2 ${emailError ? "border-red-500" : ""}`}
                                type="email"
                                placeholder="designer@gmail.com"
                                value={email}
                                onChange={(e) => validateEmail(e.target.value)}
                                required
                            />
                            {emailError && <p className="text-red-500 text-xs mt-1">{emailError}</p>}
                        </div>

                        {/* Password Field */}
                        <div className="mb-4 relative">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    className={`w-full border rounded px-3 py-2 ${passwordError ? "border-red-500" : ""}`}
                                    type={passwordVisible ? "text" : "password"}
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(e) => validatePassword(e.target.value)}
                                    required
                                />
                                <span
                                    className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                                    onClick={togglePasswordVisibility}
                                >
                                    {passwordVisible ? (
                                        <FaEyeSlash className="text-gray-500" />
                                    ) : (
                                        <FaEye className="text-gray-500" />
                                    )}
                                </span>
                            </div>
                            {passwordError && <p className="text-red-500 text-xs mt-1">{passwordError}</p>}
                        </div>

                        {/* Terms & Newsletter Checkboxes */}
                        <div className="mb-4 flex items-start">
                            <input
                                type="checkbox"
                                className="mr-2 mt-1"
                                checked={termsChecked}
                                onChange={() => setTermsChecked(!termsChecked)}
                                required
                            />
                            <p className="text-sm text-gray-700">
                                Agree to our{" "}
                                <a href="#" className="text-black-600 underline">
                                    Terms of use
                                </a>{" "}
                                and{" "}
                                <a href="#" className="text-black-600 underline">
                                    Privacy Policy
                                </a>
                            </p>
                        </div>
                        {termsError && <p className="text-red-500 text-xs mt-1">{termsError}</p>}
                        <div className="mb-6 flex items-start">
                            <input
                                type="checkbox"
                                className="mr-2 mt-1"
                                checked={newsletterChecked}
                                onChange={() => setNewsletterChecked(!newsletterChecked)}
                            />
                            <p className="text-sm text-gray-700">Subscribe to our monthly newsletter</p>
                        </div>

                        <button
                            type="submit"
                            className="w-[40%] bg-purple-500 text-white py-2 rounded hover:bg-purple-700 transition"
                            onClick={handleSignInClick}
                        >
                            Sign Up
                        </button>
                        <p className="text-start text-gray-500 text-sm mt-4">
                            Already have an account?{" "}
                            <span onClick={()=>navigate("/signin")} className="text-blue-500 cursor-pointer">Login</span>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
