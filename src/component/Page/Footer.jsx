import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

          <div>
            <h3 className="font-bold text-lg mb-3">Need Help</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Contact Us</li>
              <li>Track Order</li>
              <li>Returns & Refunds</li>
              <li>FAQ's</li>
              <li>Career</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-3">Company</h3>
            <ul className="space-y-2 text-gray-300">
              <li>About Us</li>
              <li>euphoria Blog</li>
              <li>euphoriastan</li>
              <li>Collaboration</li>
              <li>Media</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-3">More Info</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Term and Conditions</li>
              <li>Privacy Policy</li>
              <li>Shipping Policy</li>
              <li>Sitemap</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-3">Location</h3>
            <p className="text-gray-300">support@euphoria.in</p>
            <p className="text-gray-300">Eklingpura Chouraha, Ahmedabad Main Road</p>
            <p className="text-gray-300">(NH 8- Near Mahadev Hotel) Udaipur, India- 313002</p>
          </div>
        </div>
        <div>

        <div className="flex space-x-4 mt-6">
          <div className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 cursor-pointer">
            <FaFacebookF className="text-white" />
          </div>
          <div className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 cursor-pointer">
            <FaInstagram className="text-white" />
          </div>
          <div className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 cursor-pointer">
            <FaTwitter className="text-white" />
          </div>
          <div className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 cursor-pointer">
            <FaLinkedinIn className="text-white" />
          </div>
        </div>

        <div className="mt-8">
          <h3 className="font-bold text-lg mb-3">Download The App</h3>
          <div className="flex space-x-4">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/1280px-Google_Play_Store_badge_EN.svg.png"
              alt="Google Play"
              className="w-36"
            />
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="App Store"
              className="w-36"
            />
          </div>
        </div>
    </div>

        
        <div className="mt-6 text-center text-gray-400 text-sm">
          Copyright © 2023 Euphoria Folks Pvt Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
