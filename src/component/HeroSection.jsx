
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FaRegHeart, FaHeart, FaStar, FaRegStar } from "react-icons/fa";
import hero from "./Image/hero.jpeg";
import unsplash1 from "./Image/unsplash.jpg";
import unsplash2 from "./Image/unsplash2.jpg";
import product1 from "./Image/product1.png";
import product2 from "./Image/product2.png";
import product3 from "./Image/product3.png";
import product4 from "./Image/product4.png";
import savingzone1 from "./Image/savingzone1.jpeg";
import savingzone2 from "./Image/savingzone2.jpeg";
import savingzone3 from "./Image/savingzone4.jpeg";
import savingzone4 from "./Image/savingzone4.jpeg";
import savingzone5 from "./Image/savingzone5.jpeg";
import leaf from "./Image/leaf.png"
import fashion from "./Image/fashion.png"
import nike from "./Image/nike.png"
import levis from "./Image/nike.png"
import hm from "./Image/hm.png"
import polo from "./Image/polo.png"
import puma from "./Image/puma.png"
import { useNavigate } from "react-router-dom";

const slides = [
  {
    id: 1,
    title: "Summer Value Pack",
    subtitle: "T-Shirt / Tops",
    description: "Cool / Colorful / Comfy",
    buttonText: "Shop Now",
    image: hero,
    bgColor: "bg-blue-400",
  },
  {
    id: 2,
    title: "Winter Essentials",
    subtitle: "Jackets / Hoodies",
    description: "Warm / Stylish / Cozy",
    buttonText: "Explore",
    image: hero,
    bgColor: "bg-gray-800",
  },
];

const products = [
  { id: 1, name: "Casual Shirt", price: "$19.99", brand: "Jhanvi’s Brand", image: product1 },
  { id: 2, name: "Sports Shoes", price: "$34.99", brand: "AS’s Brand",image: product2 },
  { id: 3, name: "Leather Jacket", price: "$59.99", brand: "MM’s Brand", image: product3 },
  { id: 4, name: "Classic Watch", price: "$79.99", brand: "Nike’s Brand", image: product4 },
];

const savingZone = [  
  {
    title: "Hawaiian Shirts",
    description: "Dress up in summer vibe",
    discount: "UPTO 50% OFF",
    image: savingzone1,
  },
  {
    title: "Printed T-Shirt",
    description: "New Designs Every Week",
    discount: "UPTO 40% OFF",
    image: savingzone2,
    tag: "Limited Stock",
  },
  {
    title: "Cargo Joggers",
    description: "Move with style & comfort",
    discount: "UPTO 50% OFF",
    image: savingzone3,
  },
  {
    title: "Urban Shirts",
    description: "Live In Comfort",
    discount: "FLAT 60% OFF",
    image: savingzone4,
  },
  {
    title: "Oversized T-Shirts",
    description: "Street Style Icon",
    discount: "FLAT 60% OFF",
    image: savingzone5,
  },
];

const categoriesMen = [
  { name: "Shirts", image: savingzone4 },
  { name: "Printed T-Shirts", image: savingzone4 },
  { name: "Plain T-Shirt", image: savingzone4 },
  { name: "Polo T-Shirt", image: savingzone4 },
  { name: "Hoodies & Sweatshirt", image: savingzone4 },
  { name: "Jeans", image: savingzone4 },
  { name: "Activewear", image: savingzone4 },
  { name: "Boxers", image: savingzone4 },
];

const brands = [
  { name: "Nike", image: nike },
  { name: "H&M", image: hm },
  { name: "Levi's", image: levis },
  { name: "U.S. Polo Assn.", image: polo },
  { name: "Puma", image: puma },
];



const feedbacks = [
  {
    id: 1,
    name: "Floyd Miles",
    image: unsplash1,
    rating: 4,
    review:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
  {
    id: 2,
    name: "Ronald Richards",
    image: unsplash2,
    rating: 4,
    review:
      "ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
  {
    id: 3,
    name: "Savannah Nguyen",
    image: fashion,
    rating: 4,
    review:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
  {
    id: 4,
    name: "Savannah Nguyen",
    image: hero,
    rating: 4,
    review:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
  {
    id: 5,
    name: "Savannah Nguyen",
    image: savingzone1,
    rating: 4,
    review:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
  {
    id: 6,
    name: "Savannah Nguyen",
    image: leaf,
    rating: 4,
    review:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
];

const HeroSection = () => {
    const navigate= useNavigate()
  const [currentSlide, setCurrentSlide] = useState(0);
  const [wishlist, setWishlist] = useState({});

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  const toggleWishlist = (productId) => {
    setWishlist((prev) => ({
      ...prev,
      [productId]: !prev[productId],
    }));
  };


  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative w-full h-[400px] md:h-[500px] lg:h-[640px] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 w-full h-full transition-opacity duration-700 flex items-center justify-center ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            } ${slide.bgColor}`}
            style={{
              backgroundImage:`url(${slide.image})` ,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="container mx-auto px-4 md:px-24 flex flex-col items-center text-center md:text-left md:flex-row">
              <div className="text-white max-w-lg">
                <p className="text-sm md:text-lg">{slide.subtitle}</p>
                <h1 className="text-2xl md:text-5xl font-bold">
                  {slide.title}
                </h1>
                <p className="text-sm md:text-lg mt-2">{slide.description}</p>
                <button className="mt-4 px-3 py-2 md:px-6 md:py-3 bg-white text-black rounded-md font-semibold hover:bg-gray-200 transition">
                  {slide.buttonText}
                </button>
              </div>
            </div>
          </div>
        ))}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition"
        >
          <ChevronLeft className="h-6 w-6 text-black" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition"
        >
          <ChevronRight className="h-6 w-6 text-black" />
        </button>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`h-2 w-6 rounded-full ${
                index === currentSlide ? "bg-white" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Featured Sections */}
      <div className="container h-full mx-auto px-4 md:px-8 py-8 md:py-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {[unsplash1, unsplash2].map((image, index) => (
          <div
            key={index}
            className="w-full h-60 md:h-108 flex items-center text-center bg-cover bg-center rounded-lg relative"
            style={{ backgroundImage: `url(${image})` }}
          >
            <div className="inset-0 bg-opacity-50 flex flex-col text-white px-6">
              <p className="text-sm md:text-lg">Low Price</p>
              <h1 className="text-lg md:text-3xl font-bold">High Coziness</h1>
              <p className="text-xs md:text-lg mt-2">UP TO 50% OFF</p>
              <button className="mt-3 px-3 py-2 md:px-6 md:py-3 bg-white text-black rounded-md font-semibold hover:bg-gray-200 transition" >
                Explore items
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* New Arrivals Section */}
      <div className="container h-full mx-auto px-4 md:px-8 py-8 md:py-12">
        <h2 className="text-xl md:text-3xl font-bold flex text-gray-800 gap-2">
        <span className="w-2 h-6 bg-purple-500 rounded-full"></span>New Arrivals
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg p-3 md:p-4 hover:shadow-lg transition"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 md:h-84 object-cover rounded-md"
              />
              <h3 className="text-sm md:text-lg font-semibold mt-2">
                {product.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
      {/* big saving zone */}
      <div className="p-8 h-full">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <span className="w-2 h-6 bg-purple-500 rounded-full"></span> Big
          Saving Zone
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          {savingZone.map((product, index) => (
            <div
              key={index}
              className="relative bg-white shadow-md rounded-xl overflow-hidden group"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-84 object-cover group-hover:scale-105 transition-transform"
              />
              <div className="absolute inset-0 bg-black/30 flex flex-col text-right justify-center p-6 text-white">
                {product.tag && (
                  <span className="bg-gray-800 text-xs px-2 py-1 rounded-md absolute top-3 right-3">
                    {product.tag}
                  </span>
                )}
                <h3 className="text-lg font-semibold">{product.title}</h3>
                <p className="text-sm">{product.description}</p>
                <p className="text-lg font-bold mt-2">{product.discount}</p>
                <div className="mt-4 flex justify-end">
                  <button className="border border-black px-4 py-2 text-sm rounded-md hover:bg-white hover:text-black transition">
                    SHOP NOW
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>


      {/* image part */}

      <div className="max-w mx-auto p-8 h-full">
  <div className="grid grid-cols-1 md:grid-cols-2 overflow-hidden">
    
    <div className="relative flex items-center justify-center p-10 bg-black text-white">
      <img
        src={leaf}
        alt="Fashion Background"
        className="absolute inset-0 w-full h-72 md:h-[600px] object-cover"
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center max-w-md z-10">
        <h2 className="text-3xl font-bold leading-tight">
          WE MADE YOUR EVERYDAY <br /> FASHION BETTER!
        </h2>
        <p className="mt-2 text-sm">
          In our journey to improve everyday fashion, euphoria presents
          EVERYDAY wear range - Comfortable & Affordable fashion 24/7.
        </p>
        <button className="mt-4 bg-white text-black px-6 py-2 text-sm font-medium rounded-md hover:bg-gray-200 transition">
          Shop Now
        </button>
      </div>
    </div>

    <div className="w-full">
      <img
        src={fashion} 
        alt="Fashion Model"
        className="w-full h-72 md:h-[600px] object-cover"
      />
    </div>
  </div>
</div>

{/* CategoryMen */}
<section id="men">
<div className="mx-auto p-6">
      
      <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
      <span className="w-2 h-6 bg-purple-500 rounded-full"></span>
        Categories For Men
      </h2>

      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {categoriesMen.map((category, index) => (
          <div key={index} className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h3 className="mt-2 text-lg font-medium">{category.name}</h3>
            <p className="text-sm text-gray-500 flex items-center" >
              Explore Now{" "}
              <span className="ml-1">→</span>
            </p>
          </div>
        ))}
      </div>
    </div>
    </section>

    {/* categoryWomen */}

    <div className="mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
      <span className="w-2 h-6 bg-purple-500 rounded-full"></span>
        Categories For Women
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {categoriesMen.map((category, index) => (
          <div key={index} className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h3 className="mt-2 text-lg font-medium">{category.name}</h3>
            <p className="text-sm text-gray-500 flex items-center" >
              Explore Now{" "}
              <span className="ml-1">→</span>
            </p>
          </div>
        ))}
      </div>
    </div>

    {/* brands */}
    <div className="py-10 px-8">
      <div className="bg-[#3C4242] mx-auto text-center rounded-lg text-white py-8">
        <h2 className="text-5xl font-semibold py-4">Top Brands Deal</h2>
        <p className="mt-2 text-2xl p-4">
          Up To <span className="text-yellow-400 font-bold">60%</span> off on brands
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-6">
          {brands.map((brand, index) => (
            <div key={index} className="bg-white rounded-lg p-3 shadow-md">
              <img src={brand.image} alt={brand.name} className="h-16 w-auto object-contain" />
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* LimeLight  */}
    <div className="mx-auto py-10 px-8">
      <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
      <span className="w-2 h-6 bg-purple-500 rounded-full"></span>In The Limelight
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="rounded-xl p-4 relative">
            <button
              className="absolute top-8 right-8 rounded-full bg-white p-2 transition-transform duration-300 hover:scale-110"
              onClick={() => toggleWishlist(product.id)}
            >
              {wishlist[product.id] ? (
                <FaHeart className="text-red-500 text-xl" />
              ) : (
                <FaRegHeart className="text-gray-400 text-xl" />
              )}
            </button>

            <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded-lg" />

            <div className="mt-3 flex place-content-between">
              <div>
                <h3 className="text-lg font-semibold truncate">{product.name}</h3>
              <p className="text-gray-500">{product.brand}</p>
              </div>
              <p className="mt-1 text-lg font-bold">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* rating */}

    <div className="py-10 px-4 md:px-8 lg:px-12 mx-auto">
      <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
      <span className="w-2 h-6 bg-purple-500 rounded-full"></span>Feedback
      </h2>

      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex space-x-4 lg:space-x-6">
          {feedbacks.map((feedback) => (
            <div
              key={feedback.id}
              className="min-w-[90%] sm:min-w-[48%] md:min-w-[31%] bg-white p-6 rounded-lg shadow-md border border-gray-200"
            > 
            <div className="flex place-content-between">
              <div className="items-center gap-3 mb-4">
                <img
                  src={feedback.image}
                  alt={feedback.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <h3 className="text-lg font-semibold">{feedback.name}</h3>
              </div>

              <div className="flex text-yellow-400 mb-3">
                {[...Array(5)].map((_, i) =>
                  i < feedback.rating ? <FaStar key={i} /> : <FaRegStar key={i} />
                )}
              </div>
              </div>
              <p className="text-gray-600 text-sm">{feedback.review}</p>
            </div>
            
          ))}
        </div>
      </div>
    </div>



    </div>
  );
};

export default HeroSection;