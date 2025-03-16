import { useState } from "react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [language, setLanguage] = useState("English (United States)");
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeButton, setActiveButton] = useState(null);
  const navigate = useNavigate();

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center w-full sticky top-0 z-10">
      {/* Left: Logo */}
      <div className="text-2xl font-bold italic">
        <span className="text-black">Euphoria</span>
        <p className="text-xs text-gray-500">Keep it classy</p>
      </div>

      {/* Middle: Search Bar (Hidden on Small Screens) */}
      <div className="hidden md:flex relative w-64">
        <input
          type="text"
          placeholder="Search"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
        />
        <FaSearch className="absolute right-3 top-3 text-gray-400" />
      </div>

      {/* Right: Language Selector & Buttons */}
      <div className="hidden md:flex items-center space-x-4">
        {/* Language Selector */}
        <select
          className="px-4 py-2 border rounded-lg bg-white cursor-pointer"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option>English (United States)</option>
          <option>Hindi</option>
          <option>French</option>
        </select>

        {/* Login & Signup Buttons */}
        <button
          className={`px-4 py-2 border border-gray-400 rounded-lg ${
            activeButton === "login" ? "bg-purple-600 text-white" : "text-gray-700 hover:bg-gray-100"
          }`}
          onClick={() => {
            setActiveButton("login");
            navigate("/sign-in");
          }}
        >
          Login
        </button>
        <button
          className={`px-4 py-2 border-gray-400 rounded-lg ${
            activeButton === "signup" ? "bg-purple-700 text-white" : "text-gray-700 hover:bg-gray-100"
          }`}
          onClick={() => {
            setActiveButton("signup");
            navigate("/sign-up");
          }}
        >
          Sign Up
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-gray-700 text-xl"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md p-4 flex flex-col items-center space-y-4 md:hidden">
          <input
            type="text"
            placeholder="Search"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
          />
          <select
            className="w-full px-4 py-2 border rounded-lg bg-white cursor-pointer"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option>English (United States)</option>
            <option>Hindi</option>
            <option>French</option>
          </select>
          <button
            className={`w-full px-4 py-2 border border-gray-400 rounded-lg ${
              activeButton === "login" ? "bg-purple-700 text-white" : "text-gray-700 hover:bg-gray-100"
            }`}
            onClick={() => {
              setActiveButton("login");
              navigate("/sign-in");
              setMenuOpen(false);
            }}
          >
            Login
          </button>
          <button
            className={`w-full px-4 py-2 rounded-lg ${
              activeButton === "signup" ? "bg-purple-700 text-white" : "text-gray-700 hover:bg-gray-100"
            }`}
            onClick={() => {
              setActiveButton("signup");
              navigate("/sign-up");
              setMenuOpen(false);
            }}
          >
            Sign Up
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
