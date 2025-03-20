
import { useState } from "react";
import { FiSearch, FiHeart, FiUser, FiShoppingCart, FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md p-4 md:p-6 w-full">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-xl font-bold">
          <Link to="/home" className="italic">Euphoria</Link>
        </div>

        <nav className="hidden md:flex space-x-6 text-[#807D7E] font-medium">
          <Link to="/home" className="hover:text-black">Shop</Link>
          <Link to="men" className="hover:text-black">Men</Link>
          <Link to="/women" className="hover:text-black">Women</Link>
          <Link to="/home/product-list" className="hover:text-black">Products</Link>
          <Link to="/home/order" className="hover:text-black">Orders</Link>
        </nav>
        
        <div className="hidden md:flex items-center bg-gray-100 px-4 py-2 rounded-lg w-72">
          <FiSearch className="text-gray-500" />
          <input type="text" placeholder="Search" className="ml-2 bg-transparent outline-none w-full" />
        </div>
        
        <div className="hidden md:flex space-x-4 text-gray-700 text-xl">
          <Link to="/home/wishlist" className="hover:text-black">
            <FiHeart />
          </Link>
          <Link to="/account" className="hover:text-black">
            <FiUser />
          </Link>
          <Link to="/home/cart" className="hover:text-black">
            <FiShoppingCart />
          </Link>
        </div>

        <button className="md:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white shadow-md p-4 mt-2 space-y-4 text-center">
          <Link to="/shop" className="block font-bold">Shop</Link>
          <Link to="/men" className="block">Men</Link>
          <Link to="/women" className="block">Women</Link>
          <Link to="/home/product-list" className="block">Products</Link>
          <Link to="/home/order" className="block">Orders</Link>
          <div className="flex justify-center space-x-6 text-2xl mt-4">
            <Link to="/search">
              <FiSearch />
            </Link>
            <Link to="/home/wishlist">
              <FiHeart />
            </Link>
            <Link to="/account">
              <FiUser />
            </Link>
            <Link to="/home/cart">
              <FiShoppingCart />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;