
import { useState } from "react";
import { FiSearch, FiHeart, FiUser, FiShoppingCart, FiMenu, FiX } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="bg-white shadow-md p-4 md:p-6 w-full">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-xl font-bold cursor-pointer" onClick={() => navigate("/home")}>
          <span className="italic">Euphoria</span>
        </div>

        <nav className="hidden md:flex space-x-6 text-[#807D7E] font-medium">
          <a href="#" className="hover:text-black" onClick={()=>navigate('/home')}>Shop</a>
          <a href="#" className="hover:text-black">Men</a>
          <a href="#" className="hover:text-black" onClick={()=>navigate('/home/product-list')}>Women</a>
          <a href="#" className="hover:text-black">Combos</a>
          <a href="#" className="hover:text-black">Joggers</a>
        </nav>

        <div className="hidden md:flex items-center bg-gray-100 px-4 py-2 rounded-lg w-72">
          <FiSearch className="text-gray-500" />
          <input type="text" placeholder="Search" className="ml-2 bg-transparent outline-none w-full" />
        </div>

        <div className="hidden md:flex space-x-4 text-gray-700 text-xl">
          <FiHeart className="cursor-pointer" onClick={() => navigate("/home/wishlist")} />
          <FiUser className="cursor-pointer" onClick={() => navigate("/home/order")} />
          <FiShoppingCart className="cursor-pointer" onClick={() => navigate("/home/cart")} />
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
            <FiSearch />
            <FiHeart onClick={() => navigate('/home/wishlist')} className="cursor-pointer" />
            <FiUser onClick={() => navigate("/home/order")} className="cursor-pointer" />
            <FiShoppingCart onClick={() => navigate("/home/cart")} className="cursor-pointer" />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
