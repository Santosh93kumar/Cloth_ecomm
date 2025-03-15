import React, { useState } from 'react';
import { Heart, ShoppingBag, Star, Play, ChevronRight } from 'lucide-react';
import im1 from "../Image/Rectangle 25.png";
import im2 from "../Image/product1.png";
import im3 from "../Image/product2.png";
import im4 from "../Image/product3.png";
import im5 from "../Image/product4.png";
import f1 from "../Image/Frame 24.png"
import f2 from "../Image/Frame 25.png"
import f3 from "../Image/Frame 26.png"
import f4 from "../Image/Frame 27.png"
import msg from "../Image/Icon.png"
import cart from "../Image/cart.png"

import { ChevronUp, ChevronDown,ArrowRight } from 'lucide-react';

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
    const [selectedImage, setSelectedImage] = useState(0);
    const [startIndex, setStartIndex] = useState(0);
    const displayCount = 3;
  
      
      // Product images array
      const productImages = [im1, im2, im3, im1,im3,];
      const handlePrev = () => {
        if (startIndex > 0) {
          setStartIndex(startIndex - 1);
        }
      };
      
      // Handle next button click
      const handleNext = () => {
        if (startIndex + displayCount < productImages.length) {
          setStartIndex(startIndex + 1);
        }
      };

      const visibleThumbnails = productImages.slice(startIndex, startIndex + displayCount);
    
    return (
        <div className="bg-gray-50 min-h-screen">

            <main className='container mx-auto '>

                <div className="grid grid-cols-6 gap-8">

                
  <div className="flex flex-col items-center space-y-4 mt-30">
    {/* Thumbnail images */}
    <div className="flex flex-col items-center space-y-4 mt-auto">
    {visibleThumbnails.map((image, index) => {
              const actualIndex = startIndex + index;
              return (
                <div 
                  key={actualIndex} 
                  className={`w-14 h-14 rounded-lg overflow-hidden border ${selectedImage === actualIndex ? 'border-purple-500' : 'border-gray-200'} cursor-pointer`}
                  onClick={() => setSelectedImage(actualIndex)}
                >
                  <img
                    src={image}
                    alt={`Product view ${actualIndex + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              );
            })}
          {/* Navigation arrows */}
          <div className="mt-4 flex flex-col items-center space-y-2">
          <button 
            className={`w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center ${startIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-300'}`}
            onClick={handlePrev}
            disabled={startIndex === 0}
          >
            <ChevronUp className="w-5 h-5 text-gray-600" />
          </button>
            <button 
            className={`w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center ${startIndex + displayCount >= productImages.length ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-300'}`}
            onClick={handleNext}
            disabled={startIndex + displayCount >= productImages.length}
          >
            <ChevronDown className="w-5 h-5 text-gray-600" />
          </button>
          </div>
        </div>
  </div>


                    {/* Main Product Image  */}
                    <div className="col-span-2 flex flex-col gap-4">
                        <div className=" rounded-lg overflow-hidden">
                        <img
            src={productImages[selectedImage]}
            alt={`Product full view ${selectedImage + 1}`}
            className="w-full h-full object-contain"
          />
                        </div>
                    </div>

                    {/* Product Details  */}
                    <div className="col-span-3 p-5">
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

                        <h1 className="text-2xl font-semibold mb-2">Raven Hoodie With Black Colored Design</h1>

                        {/* Ratings */}
                        <div className="flex items-center gap-2 mb-4">
                            <div className="flex">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <Star key={star} className="h-5 w-5 fill-yellow-300 text-yellow-300" />
                                ))}
                            </div>
                            <span className="text-gray-400 m-2 font-semibold">3.5</span>
                            <span className="text-gray-400 m-2 font-semibold flex items-center space-x-2">
  <img src={msg} alt="msg" className="w-5 h-5" />
  <p>120 comment</p>
</span>

                        </div>

                    
                        <div className="mb-6">
                            <div className="mb-2 flex items-center">
                                <span className="text-gray-700">Select Size</span>
                                <div className="flex items-center ml-5">
                                    <a href="#" className="text-purple-600">Size Guide</a>
                                    <ArrowRight className="w-5 h-5 text-gray-300 ml-1" />
                                </div>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {sizes.map((size) => (
                                    <button
                                        key={size}
                                        className={`w-10 h-10 rounded-lg flex items-center justify-center border border-gray-300 ${selectedSize === size ? 'bg-black text-white' : 'bg-white text-black'}`}
                                        onClick={() => setSelectedSize(size)}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        
                        <div className="mb-6">
                            <p className="text-gray-700 mb-2">Colors available</p>
                            <div className="flex gap-2">
                                {colors.map((color) => (
                                    <button
                                        key={color.name}
                                        className={`w-6 h-6 rounded-full ${selectedColor === color.name ? 'ring-2 ring-offset-3 ring-gray-400' : ''}`}
                                        style={{ backgroundColor: color.value }}
                                        onClick={() => setSelectedColor(color.name)}
                                        aria-label={`Select ${color.name} color`}
                                    />
                                ))}
                            </div>
                        </div>

                        
                        <div className="flex gap-4 mb-6 w-xl">
  <button className="flex-3/4 bg-purple-600 text-white py-3 rounded-md font-medium flex items-center justify-center space-x-2">
    <img src={cart} alt="cart" className="w-5 h-5" />
    <span>ADD TO CART</span>
  </button>
  <button className="flex-1/4 border border-gray-300 px-6 py-3 rounded-md text-gray-700 font-medium">
    ${59.99}
  </button>
</div>

                        {/* Additional Info */}
                        <div className="space-y-4 border-t border-gray-300 pt-4">
                            <div className="grid grid-cols-2 items-center gap-2">
                                <div className=" flex items-center justify-start">
                                    <img src={f1} alt="" className="h-10 w-10" />

                                    <span className="text-sm text-gray-600">Secure payment</span>
                                </div>
                                <div className=" flex items-center justify-start">
                                    <img src={f2} alt="" className="h-10 w-10" />

                                    <span className="text-sm text-gray-600">Size & Fit</span>
                                </div>
                                <div className=" flex items-center justify-start">
                                    <img src={f3} alt="" className="h-10 w-10" />

                                    <span className="text-sm text-gray-600">Free Shipping</span>
                                </div>
                                <div className=" flex items-center justify-start">
                                    <img src={f4} alt="" className="h-10 w-10" />

                                    <span className="text-sm text-gray-600">Free Sipping & Returns</span>
                                </div>

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