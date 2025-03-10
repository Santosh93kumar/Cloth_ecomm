import React, { useState, useEffect } from 'react';
import { Heart, ChevronDown, ChevronUp, ChevronRight } from 'lucide-react';
import im1 from "../Image/Rectangle 25.png";
import im2 from "../Image/product1.png";
import im3 from "../Image/product2.png";
import im4 from "../Image/product3.png";
import im5 from "../Image/product4.png";
import filter from '../Image/filter.png'

const ProductList = () => {

  const [priceRange, setPriceRange] = useState([10, 400]);
  const [isDragging, setIsDragging] = useState(null);
  const [expandedSections, setExpandedSections] = useState({
    type: true,
    price: true,
    colors: true,
    size: true,
    dressStyle: true
  });

  // Filter states
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedStyles, setSelectedStyles] = useState([]);

  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter(item => item !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

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
    {
      id: 9,
      name: "Cotton Pajamas Set",
      brand: "CozyWear",
      price: 22.00,
      image: im2,
      background: "bg-green-200"
    },
    {
      id: 10,
      name: "Grey Beanie",
      brand: "WinterCo",
      price: 10.00,
      image: im1,
      background: "bg-gray-400"
    },
    {
      id: 11,
      name: "Brown Leather Belt",
      brand: "FormalX",
      price: 18.00,
      image: im2,
      background: "bg-orange-300"
    },
    {
      id: 12,
      name: "Oversized Graphic T-shirt",
      brand: "TrendyStyles",
      price: 20.00,
      image: im4,
      background: "bg-indigo-200"
    }
  ];




  const categories = [
    { name: "Printed T-shirts", link: "/" },
    { name: "Plain T-shirts", link: "/" },
    { name: "Kurta", link: "/" },
    { name: "Boxers", link: "/" },
    { name: "Full sleeves T-shirts", link: "/" },
    { name: "Joggers", link: "/" },
    { name: "Shorts", link: "/" }
  ];

  const colors = [
    { name: "Purple", hex: "#9C27B0" },
    { name: "Black", hex: "#000000" },
    { name: "Red", hex: "#F44336" },
    { name: "Orange", hex: "#FF9800" },
    { name: "Royal", hex: "#3F51B5" },
    { name: "White", hex: "#FFFFFF" },
    { name: "Brown", hex: "#795548" },
    { name: "Green", hex: "#4CAF50" },
    { name: "Yellow", hex: "#FFEB3B" },
    { name: "Navy", hex: "#1A237E" },
    { name: "Pink", hex: "#E91E63" },
    { name: "Blue", hex: "#03A9F4" }
  ];

  const sizes = ["XXS", "XL", "XS", "S", "L", "XXL", "3XL", "4XL"];

  const dressStyles = [
    { name: "Classic", link: "/" },
    { name: "Casual", link: "/" },
    { name: "Business", link: "/" },
    { name: "Sport", link: "/" },
    { name: "Formal (evening)", link: "/" }
  ];

  const clothingItems = [
    { name: "Pick Any 4- Womens Plain T-shirt Combo", price: "₹1099" },
    { name: "Pick Any 4- Plain Womens Boxer Combo", price: "₹1099" },
    { name: "Pick Any 4 - Women Plain Full Sleeve T-shirt Combo", price: "₹1399" },
    { name: "Multicolor Checkered Long Casual Shirts for Women", price: "₹499" },
    { name: "Pick Any 2: Plain Boxy Casual Shirts for Women Combo", price: "₹799" },
    { name: "Blue Floral Anarkali Kurti", price: "₹599" },
    { name: "Jade Black Narrow Cut Flexible Women Jeggings", price: "₹998" },
    { name: "Mustard-yellow Solid Straight-Fit Women Pant", price: "₹499" },
    { name: "Women Pants Combo - Pick Any 2", price: "₹800" },
    { name: "Pista Green Solid Boxy Casual Shirts for Women", price: "₹449" },
    { name: "Plain Burgundy Womens Boxer", price: "₹349" },
    { name: "Striped Front Tie Casual Shirts for Women", price: "₹449" }
  ];


  



  const toggleSection = (section) => {
    setExpandedSections({
      ...expandedSections,
      [section]: !expandedSections[section]
    });
  };

  const toggleCategory = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(cat => cat !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const toggleColor = (color) => {
    if (selectedColors.includes(color)) {
      setSelectedColors(selectedColors.filter(c => c !== color));
    } else {
      setSelectedColors([...selectedColors, color]);
    }
  };

  const toggleSize = (size) => {
    if (selectedSizes.includes(size)) {
      setSelectedSizes(selectedSizes.filter(s => s !== size));
    } else {
      setSelectedSizes([...selectedSizes, size]);
    }
  };

  const toggleStyle = (style) => {
    if (selectedStyles.includes(style)) {
      setSelectedStyles(selectedStyles.filter(s => s !== style));
    } else {
      setSelectedStyles([...selectedStyles, style]);
    }
  };

  // Handle price range slider
  const handleMouseDown = (index) => {
    setIsDragging(index);
  };

  const handleMouseUp = () => {
    setIsDragging(null);
  };

  const handleMouseMove = (e) => {
    if (isDragging === null) return;

    const slider = e.currentTarget.getBoundingClientRect();
    const percent = Math.min(Math.max(0, (e.clientX - slider.left) / slider.width), 1);
    const minPrice = 0;
    const maxPrice = 1000;
    const value = Math.round(minPrice + percent * (maxPrice - minPrice));

    const newPriceRange = [...priceRange];
    newPriceRange[isDragging] = value;

    // Ensure min doesn't exceed max and vice versa
    if (isDragging === 0 && value > priceRange[1]) {
      newPriceRange[0] = priceRange[1];
    } else if (isDragging === 1 && value < priceRange[0]) {
      newPriceRange[1] = priceRange[0];
    } else {
      setPriceRange(newPriceRange);
    }
  };

  useEffect(() => {
    if (isDragging !== null) {
      const handleMouseUpGlobal = () => {
        setIsDragging(null);
      };

      window.addEventListener('mouseup', handleMouseUpGlobal);
      window.addEventListener('mousemove', handleMouseMove);

      return () => {
        window.removeEventListener('mouseup', handleMouseUpGlobal);
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, [isDragging]);


  
  const FilterSidebar = () => {
    return (
      <div className="w-full md:w-64 flex-shrink-0 bg-white rounded-lg shadow-sm overflow-hidden ">
        <div className="border-b border-gray-200">
          <div className="p-4 flex justify-between items-center">
            <h3 className="text-lg font-medium text-gray-900">Filter</h3>

            <img src={filter} alt="filter" className='w-6 h-6' />

          </div>
        </div>

        {/* Type Category */}
        <div className="border-b border-gray-200">
          <div className="p-4">
            <div
              className="flex justify-between items-center mb-2 cursor-pointer"
              onClick={() => toggleSection('type')}
            >
              <h4 className="font-medium text-gray-900">Type</h4>
              {expandedSections.type ?
                <ChevronUp className="w-4 h-4 text-gray-400" /> :
                <ChevronDown className="w-4 h-4 text-gray-400" />
              }
            </div>

            {expandedSections.type && categories.map((category, index) => (
              <div key={index} className="flex justify-between items-center py-2">
                <label className="flex items-center text-gray-600 cursor-pointer">
                  <input
                    // type="checkbox" 
                    className="mr-2 h-4 w-4 text-blue-500"
                    checked={selectedCategories.includes(category.name)}
                    onChange={() => toggleCategory(category.name)}
                  />
                  {category.name}
                </label>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </div>
            ))}
          </div>
        </div>

        {/* Price Range */}
        <div className="border-b border-gray-200">
          <div className="p-4">
            <div
              className="flex justify-between items-center mb-2 cursor-pointer"
              onClick={() => toggleSection('price')}
            >
              <h4 className="font-medium text-gray-900">Price</h4>
              {expandedSections.price ?
                <ChevronUp className="w-4 h-4 text-gray-400" /> :
                <ChevronDown className="w-4 h-4 text-gray-400" />
              }
            </div>

            {expandedSections.price && (
              <div className="mt-4">
                <div
                  className="relative h-2 bg-blue-100 rounded-full"
                  onMouseMove={handleMouseMove}
                >
                  <div
                    className="absolute h-2 bg-blue-500 rounded-full"
                    style={{
                      left: `${(priceRange[0] / 1000) * 100}%`,
                      right: `${100 - (priceRange[1] / 1000) * 100}%`
                    }}
                  ></div>
                  <div
                    className="absolute w-4 h-4 bg-white border-2 border-blue-500 rounded-full -mt-1 cursor-pointer"
                    style={{ left: `${(priceRange[0] / 1000) * 100}%` }}
                    onMouseDown={() => handleMouseDown(0)}
                  ></div>
                  <div
                    className="absolute w-4 h-4 bg-white border-2 border-blue-500 rounded-full -mt-1 cursor-pointer"
                    style={{ left: `${(priceRange[1] / 1000) * 100}%` }}
                    onMouseDown={() => handleMouseDown(1)}
                  ></div>
                </div>
                <div className="flex justify-between mt-2">
                  <div className="w-20 h-10 bg-gray-100 flex items-center justify-center rounded font-medium text-gray-700">${priceRange[0]}</div>
                  <div className="w-20 h-10 bg-gray-100 flex items-center justify-center rounded font-medium text-gray-700">${priceRange[1]}</div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Colors */}
        <div className="border-b border-gray-200">
          <div className="p-4">
            <div
              className="flex justify-between items-center mb-2 cursor-pointer"
              onClick={() => toggleSection('colors')}
            >
              <h4 className="font-medium text-gray-900">Colors</h4>
              {expandedSections.colors ?
                <ChevronUp className="w-4 h-4 text-gray-400" /> :
                <ChevronDown className="w-4 h-4 text-gray-400" />
              }
            </div>

            {expandedSections.colors && (
              <div className="grid grid-cols-4 gap-3 mt-2">
                {colors.map((color, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center"
                    onClick={() => toggleColor(color.name)}
                  >
                    <div
                      className={`w-12 h-12 rounded-md cursor-pointer ${selectedColors.includes(color.name) ? 'ring-2 ring-blue-500' : ''}`}
                      style={{
                        backgroundColor: color.hex,
                        border: color.hex === "#FFFFFF" ? "1px solid #E5E7EB" : "none"
                      }}
                    />
                    <span className="text-xs text-gray-600 mt-1">{color.name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Size */}
        <div className="border-b border-gray-200">
          <div className="p-4">
            <div
              className="flex justify-between items-center mb-2 cursor-pointer"
              onClick={() => toggleSection('size')}
            >
              <h4 className="font-medium text-gray-900">Size</h4>
              {expandedSections.size ?
                <ChevronUp className="w-4 h-4 text-gray-400" /> :
                <ChevronDown className="w-4 h-4 text-gray-400" />
              }
            </div>

            {expandedSections.size && (
              <div className="grid grid-cols-3 gap-2 mt-2">
                {sizes.map((size, index) => (
                  <div
                    key={index}
                    className={`flex items-center justify-center h-10 rounded-md cursor-pointer ${selectedSizes.includes(size) ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700'
                      }`}
                    onClick={() => toggleSize(size)}
                  >
                    <span className="text-sm font-medium">{size}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Dress Style */}
        <div>
          <div className="p-4">
            <div
              className="flex justify-between items-center mb-2 cursor-pointer"
              onClick={() => toggleSection('dressStyle')}
            >
              <h4 className="font-medium text-gray-900">Dress Style</h4>
              {expandedSections.dressStyle ?
                <ChevronUp className="w-4 h-4 text-gray-400" /> :
                <ChevronDown className="w-4 h-4 text-gray-400" />
              }
            </div>

            {expandedSections.dressStyle && dressStyles.map((style, index) => (
              <div key={index} className="flex justify-between items-center py-2">
                <label className="flex items-center text-gray-600 cursor-pointer">
                  <input
                    // type="checkbox" 
                    className="mr-2 h-4 w-4 text-blue-500"
                    checked={selectedStyles.includes(style.name)}
                    onChange={() => toggleStyle(style.name)}
                  />
                  {style.name}
                </label>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </div>
            ))}
          </div>
        </div>

        {/* Applied filters summary */}
        {(selectedCategories.length > 0 || selectedColors.length > 0 ||
          selectedSizes.length > 0 || selectedStyles.length > 0) && (
            <div className="p-4 border-t border-gray-200">
              <h4 className="font-medium text-gray-900 mb-2">Applied Filters:</h4>
              <div className="flex flex-wrap gap-2">
                {selectedCategories.map(cat => (
                  <div key={cat} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full flex items-center">
                    {cat}
                    <button
                      className="ml-1 focus:outline-none"
                      onClick={() => toggleCategory(cat)}
                    >
                      &times;
                    </button>
                  </div>
                ))}
                {selectedColors.map(color => (
                  <div key={color} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full flex items-center">
                    {color}
                    <button
                      className="ml-1 focus:outline-none"
                      onClick={() => toggleColor(color)}
                    >
                      &times;
                    </button>
                  </div>
                ))}
                {selectedSizes.map(size => (
                  <div key={size} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full flex items-center">
                    Size: {size}
                    <button
                      className="ml-1 focus:outline-none"
                      onClick={() => toggleSize(size)}
                    >
                      &times;
                    </button>
                  </div>
                ))}
                {selectedStyles.map(style => (
                  <div key={style} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full flex items-center">
                    {style}
                    <button
                      className="ml-1 focus:outline-none"
                      onClick={() => toggleStyle(style)}
                    >
                      &times;
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
      </div>
    );
  };



  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar / Filters */}
          <FilterSidebar />

          {/* Product Grid and Content */}
          <div className="flex-grow">

            <div className="mb-4 flex justify-between items-center">

              <h2 className="text-gray-900 font-medium">Women's Clothing</h2>


              <div className="flex gap-4">
                <button className="text-purple-600 font-medium transition duration-300">
                  New
                </button>
                <button className="text-gray-900 font-medium transition duration-300">
                  Recommended
                </button>
              </div>
            </div>


            {/* Product Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
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

        </div>
        {/* Product Information Section */}
        <div className=" mx-auto px-4 py-8 font-sans">
          <div className="border-l-4 border-purple-600 pl-4 mb-8">
            <h2 className="text-4xl font-bold text-gray-700 mb-2">Clothing for Women Online in India</h2>
          </div>

          <section className=" m-5">
            <h2 className="text-2xl text-gray-600 font-medium mb-6">Reexplore Women's Clothing Collection Online at Euphoria</h2>

            <div className="text-gray-600 leading-relaxed mb-6">
              <p className="mb-4">
                Women's Clothing – Are you searching for the best website to buy Clothing for Women online in India? Well, your search for the coolest and most stylish womens clothing ends here. From trendy Casual Womens Wear Online shopping to premium quality cotton women's apparel, <span className="font-semibold">Euphoria</span> has closet of Women Collection covered with the latest and best designs of Women's Clothing Online.
              </p>

              <p className="mb-4">
                Our collection of clothes for women will make you the trendsetter with an iconic resemblance of choice in Womens Wear.
              </p>
            </div>
          </section>

          <section className=" m-5">
            <h2 className="text-2xl text-gray-600 font-medium mb-6">One-Stop Destination to Shop Every Clothing for Women: Euphoria</h2>

            <div className="text-gray-600 leading-relaxed mb-6">
              <p className="mb-4">
                Today, Clothing for Women is gaining more popularity above all. This is because gone are the days when women were used to carrying uncomfortable fashion. Today, a lady looks prettier when she is in Casual Womens Wear which is a comfortable outfit. Concerning this, <span className="font-semibold">Euphoria</span> has a big fat range of Stylish Women's Clothing that would make her the winner wherever she goes.
              </p>

              <p className="mb-4">
                Our collection of clothes for women will make you the trendsetter with an iconic resemblance of choice in Womens Wear. It is quite evident to say that there are very few Womens Clothing online stores where you can buy Western Wear for Women comprising the premium material and elegant design that you are always seeking for. Basically,
              </p>
            </div>

            <button className="text-gray-600 font-medium  rounded-md transition duration-300">
              See More
            </button>
          </section>
        </div>

        {/* Price Table */}
        <div className="font-sans">
          <div className="border-l-4 border-purple-600 pl-4 mb-6">
            <h1 className="text-4xl font-bold text-gray-700">Buy Women's Clothing at Best Price</h1>
          </div>

          <div className="bg-gray-50 m-5 rounded-sm">

            <div className="grid grid-cols-[2fr_1fr] font-medium text-gray-700 border-b border-gray-300">
              <div className="p-6 text-xl">Women's Clothing</div>
              <div className="p-6 text-xl border-l border-gray-300 text-right">Best Price</div>
            </div>


            {clothingItems.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-[2fr_1fr] items-center hover:bg-gray-100"
              >
                <div className="p-6 text-gray-600">{item.name}</div>
                <div className="p-6 text-right text-gray-600 border-l border-gray-300">{item.price}</div>
              </div>
            ))}
          </div>
        </div>


      </main>
    </div>
  );
};

export default ProductList;