import React, { useState } from 'react';
import { Heart, ShoppingBag, Star, Play, ChevronRight } from 'lucide-react';
import im1 from "../Image/Rectangle 25.png";
import im2 from "../Image/product1.png";
import im3 from "../Image/product2.png";
import im4 from "../Image/product3.png";
import im5 from "../Image/product4.png";

const ProductDetail = () => {
    const [selectedColor, setSelectedColor] = useState('black');
    const [selectedSize, setSelectedSize] = useState('M');
    const [activeTab, setActiveTab] = useState('description');

    const colors = [
        { name: 'black', value: '#000000' },
        { name: 'red', value: '#FF0000' },
        { name: 'green', value: '#00FF00' },
        { name: 'blue', value: '#0000FF' },
        { name: 'yellow', value: '#FFFF00' },
    ];

    const sizes = ['XS', 'S', 'M', 'L', 'XL'];

    const products = [
        {
            id: 1,
            name: "White T-shirt",
            brand: "Helen's Brand",
            price: 11.00,
            image: im1,
            background: "bg-teal-200"
        },
        {
            id: 2,
            name: "Lavender Hoodie with Drawstrings",
            brand: "Nia's Brand",
            price: 19.00,
            image: im2,
            background: "bg-pink-300"
        },
        {
            id: 3,
            name: "Denim Jacket",
            brand: "Urban Wear",
            price: 35.00,
            image: im3,
            background: "bg-blue-200"
        },
        {
            id: 4,
            name: "Black Slim Fit Jeans",
            brand: "Classic Denim",
            price: 29.00,
            image: im4,
            background: "bg-gray-300"
        },
        {
            id: 5,
            name: "Red Summer Dress",
            brand: "Ella's Closet",
            price: 27.00,
            image: im1,
            background: "bg-red-200"
        },
        {
            id: 6,
            name: "Leather Wallet",
            brand: "Prestige",
            price: 15.00,
            image: im4,
            background: "bg-brown-300"
        },
        {
            id: 7,
            name: "Running Shoes",
            brand: "ActiveX",
            price: 45.00,
            image: im5,
            background: "bg-yellow-200"
        },
        {
            id: 8,
            name: "Smartwatch",
            brand: "TechGear",
            price: 59.00,
            image: im3,
            background: "bg-purple-300"
        },

    ];
    const [favorites, setFavorites] = useState([]);

    const toggleFavorite = (id) => {
        if (favorites.includes(id)) {
            setFavorites(favorites.filter(item => item !== id));
        } else {
            setFavorites([...favorites, id]);
        }
    };
    return (
        <div className="bg-gray-50 min-h-screen">
            
            <main  className='container mx-auto p-4'>
          
<div className="grid grid-cols-6 gap-8">
    
    {/* Product Images (1 fraction) */}
    <div className='bg-gray-50'>
    <div className="grid grid-rows-5 gap-2 m-10 ">
        {[1, 2, 3, 4].map((i) => (
            <div key={i} className={`border  w-24 h-24 rounded-lg overflow-hidden ${i === 1 ? 'border-purple-500' : ''}`}>
                <img
                    src={im1}
                    alt={`Raven Hoodie view ${i}`}
                    className="w-full h-full object-cover"
                />
            </div>
        ))}
    </div>
    </div>

    {/* Main Product Image (2 fractions) */}
    <div className="col-span-2 flex flex-col gap-4">
        <div className="bg-gray-100 rounded-lg overflow-hidden">
            <img
                src={im1}
                alt="Raven Hoodie"
                className="w-full h-full object-cover"
            />
        </div>
    </div>

    {/* Product Details (3 fractions) */}
    <div className="col-span-3">
    <nav className="mb-4 text-sm">
        <ol className="flex items-center">
          <li className="mr-2">
            <a href="#" className="text-gray-500 hover:text-gray-700">Shop</a>
          </li>
          <li className="before:content-['>'] before:mx-2 before:text-gray-500">
            <span className="text-gray-500 font-semibold">Woman</span>
          </li>
          <li className="before:content-['>'] before:mx-2 before:text-gray-500">
            <span className="text-gray-500 font-semibold">Top</span>
          </li>
        </ol>
      </nav>

        <h1 className="text-2xl font-semibold mb-2">Raven Hoodie With Black colored Design</h1>

        {/* Ratings */}
        <div className="flex items-center gap-2 mb-4">
            <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
            </div>
            <span className="text-gray-500 text-sm">(121 reviews)</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-4 mb-6">
            <span className="font-bold text-lg">$59.00</span>
            <span className="line-through text-gray-400">$69.00</span>
            <span className="bg-red-100 text-red-500 px-2 py-1 text-xs rounded">-15%</span>
        </div>

        {/* Size Selection */}
        <div className="mb-6">
            <div className="flex justify-between mb-2">
                <span className="text-gray-700">Select Size</span>
                <a href="#" className="text-purple-600 text-sm">Size Guide</a>
            </div>
            <div className="flex flex-wrap gap-2">
                {sizes.map((size) => (
                    <button
                        key={size}
                        className={`w-10 h-10 rounded-full flex items-center justify-center border ${selectedSize === size ? 'bg-black text-white' : 'bg-white text-black'}`}
                        onClick={() => setSelectedSize(size)}
                    >
                        {size}
                    </button>
                ))}
            </div>
        </div>

        {/* Color Selection */}
        <div className="mb-6">
            <p className="text-gray-700 mb-2">Colors available</p>
            <div className="flex gap-2">
                {colors.map((color) => (
                    <button
                        key={color.name}
                        className={`w-8 h-8 rounded-full ${selectedColor === color.name ? 'ring-2 ring-offset-2 ring-gray-400' : ''}`}
                        style={{ backgroundColor: color.value }}
                        onClick={() => setSelectedColor(color.name)}
                        aria-label={`Select ${color.name} color`}
                    />
                ))}
            </div>
        </div>

        {/* Add to Cart */}
        <div className="flex gap-4 mb-6">
            <button className="flex-1/2 bg-purple-600 text-white py-3 rounded-md font-medium">
                ADD TO CART
            </button>
            <button className=" flex-1/2 border border-gray-300 px-4 py-3 rounded-md">
                ${59.99}
            </button>
        </div>

        {/* Additional Info */}
        <div className="space-y-4 border-t pt-4">
            <div className="flex items-center gap-2">
                <div className="w-6 h-6 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <span className="text-sm text-gray-600">Secure payment</span>
            </div>
            <div className="flex items-center gap-2">
                <div className="w-6 h-6 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                    </svg>
                </div>
                <span className="text-sm text-gray-600">Shipping & Delivery</span>
            </div>
            <div className="flex items-center gap-2">
                <div className="w-6 h-6 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <span className="text-sm text-gray-600">Free Shipping & Returns</span>
            </div>
        </div>
    </div>
</div>

                {/* Product Description */}
                <div className="mt-12">
                    <div className="border-l-4 border-purple-600 pl-4 mb-6">
                        <h1 className="text-4xl font-bold text-gray-700">Product Description</h1>
                    </div>




                    <div className="mx-auto mt-8">
      
      
      {/* Content */}
      <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-between items-start">
        {/* Left Column - Description */}
        <div className="w-full ">
            {/* Tabs */}
      <div className=" mb-6">
        <div className="flex space-x-8">
          <button 
            className={`pb-2 relative ${activeTab === 'description' ? 'text-black font-medium border-b-2 border-black' : 'text-gray-500'}`}
            onClick={() => setActiveTab('description')}
          >
            Description
          </button>
          <button 
            className={`pb-2 relative flex items-center ${activeTab === 'comments' ? 'text-black font-medium border-b-2 border-black' : 'text-gray-500'}`}
            onClick={() => setActiveTab('comments')}
          >
            User comments
            <span className="ml-2 bg-purple-600 text-white text-xs w-4 h-4 rounded-sm flex items-center justify-center">
              4
            </span>
          </button>
          <button 
            className={`pb-2 relative flex items-center ${activeTab === 'qa' ? 'text-black font-medium border-b-2 border-black' : 'text-gray-500'}`}
            onClick={() => setActiveTab('qa')}
          >
            Question & Answer
            <span className="ml-2 bg-gray-800 text-white text-xs w-4 h-4 rounded-sm flex items-center justify-center">
              1
            </span>
          </button>
        </div>
      </div>
          <p className="text-gray-500 text-md mb-6">
            100% Bio-washed Cotton - makes the fabric extra soft & silky. Flexible ribbed crew neck. Precisely stitched with no pilling & no fading. Provides all-time comfort. Anytime, anywhere. Infinite range of matte-finish HD prints.
          </p>
          
          <div className="bg-gray-100 p-4 rounded-lg shadow-md w-full">
            <table className="w-full border-collapse text-sm">
              <tbody>
                <tr className="p-4">
                  <td className="px-4 py-2 font-medium border-r border-gray-200 text-gray-700">Fabric</td>
                  <td className="px-4 py-2 font-medium border-r border-gray-200 text-gray-700">Pattern</td>
                  <td className="px-4 py-2 font-medium text-gray-700">Fit</td>
                </tr>
                <tr className="p-4 border-b border-gray-200">
                  <td className="px-4 py-2 text-gray-900 border-r border-gray-200 font-semibold">Bio-washed Cotton</td>
                  <td className="px-4 py-2 text-gray-900 border-r border-gray-200 font-semibold">Printed</td>
                  <td className="px-4 py-2 text-gray-900 font-semibold">Regular-fit</td>
                </tr>
                <tr className="p-4">
                  <td className="px-4 py-2 font-medium border-r border-gray-200 text-gray-700">Neck</td>
                  <td className="px-4 py-2 font-medium border-r border-gray-200 text-gray-700">Sleeve</td>
                  <td className="px-4 py-2 font-medium text-gray-700">Style</td>
                </tr>
                <tr className="p-4">
                  <td className="px-4 py-2 text-gray-900 border-r border-gray-200 font-semibold">Round Neck</td>
                  <td className="px-4 py-2 text-gray-900 border-r border-gray-200 font-semibold">Half-sleeves</td>
                  <td className="px-4 py-2 text-gray-900 font-semibold">Casual Wear</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        {/* Right Column - Video */}
        <div className="relative rounded-lg overflow-hidden bg-gray-200 aspect-video w-full ">
          <img 
            src={im1}
            alt="Raven Hoodie"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-3 right-3 text-white text-sm bg-black bg-opacity-50 px-2 py-1 rounded">
            1:00 M
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="bg-white rounded-full p-3 shadow-md">
              <Play size={24} className="text-black" />
            </button>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white bg-gradient-to-t from-black/50 to-transparent">
            <p className="text-lg font-medium">Raven Hoodie with black colored design</p>
          </div>
        </div>
      </div>
    </div>
    </div>
                </div>

                {/* Similar Products */}
                <div className="mt-16">
                    <div className="border-l-4 border-purple-600 pl-4 mb-6">
                        <h1 className="text-4xl font-bold text-gray-700">Similar Products</h1>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                        {products.map((product) => (
                            <div
                                key={product.id}
                                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                            >

                                <div className="relative rounded-t-lg overflow-hidden">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-[470px] object-cover"
                                    />

                                    <button
                                        onClick={() => toggleFavorite(product.id)}
                                        className="absolute top-2 right-2 p-2 rounded-full bg-white/80 shadow"
                                        aria-label="Add to favorites"
                                    >
                                        <Heart
                                            size={20}
                                            fill={favorites.includes(product.id) ? "#FF0000" : "none"}
                                            stroke={favorites.includes(product.id) ? "#FF0000" : "currentColor"}
                                        />
                                    </button>
                                </div>


                                <div className="p-4 flex justify-between items-center">
                                    <div>
                                        <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
                                        <p className="text-xs text-gray-600">{product.brand}</p>
                                    </div>
                                    <div className="bg-gray-100 px-3 py-1 rounded-md">
                                        <p className="text-xs font-semibold">${product.price.toFixed(2)}</p>
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ProductDetail;