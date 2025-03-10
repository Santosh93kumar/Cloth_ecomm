import { useState } from "react";
import { FiSearch, FiHeart, FiUser, FiShoppingCart, FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md p-4 md:p-6 w-full">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-xl font-bold">
          <span className="italic">Euphoria</span>
        </div>


        <nav className="hidden md:flex space-x-6 text-[#807D7E] font-medium">
          <a href="#" className="hover:text-black" >Shop</a>
          <a href="#" className="hover:text-black">Men</a>
          <a href="#" className="hover:text-black">Women</a>
          <a href="#" className="hover:text-black">Combos</a>
          <a href="#" className="hover:text-black">Joggers</a>
        </nav>

        
        <div className="hidden md:flex items-center bg-gray-100 px-4 py-2 rounded-lg w-72">
          <FiSearch className="text-gray-500" />
          <input type="text" placeholder="Search" className="ml-2 bg-transparent outline-none w-full" />
        </div>

        
        <div className="hidden md:flex space-x-4 text-gray-700 text-xl">
          <FiHeart />
          <FiUser />
          <FiShoppingCart />
        </div>


        <button className="md:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white shadow-md p-4 mt-2 space-y-4 text-center">
          <a href="#" className="block font-bold">Shop</a>
          <a href="#" className="block">Men</a>
          <a href="#" className="block">Women</a>
          <a href="#" className="block">Combos</a>
          <a href="#" className="block">Joggers</a>
          <div className="flex justify-center space-x-6 text-2xl mt-4">
            <FiSearch />
            <FiHeart />
            <FiUser />
            <FiShoppingCart />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;