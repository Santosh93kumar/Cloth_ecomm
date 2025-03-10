
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import hero from "../component/Image/hero.jpeg";
import unsplash1 from "./Image/unsplash.jpg";
import unsplash2 from "./Image/unsplash2.jpg";
import product1 from "../component/Image/product1.png";
import product2 from "../component/Image/product2.png";
import product3 from "../component/Image/product3.png";
import product4 from "../component/Image/product4.png";

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
  { id: 1, name: "Casual Shirt", price: "$19.99", image: product1 },
  { id: 2, name: "Sports Shoes", price: "$34.99", image: product2 },
  { id: 3, name: "Leather Jacket", price: "$59.99", image: product3 },
  { id: 4, name: "Classic Watch", price: "$79.99", image: product4 },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

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
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="container mx-auto px-4 md:px-24 flex flex-col items-center text-center md:text-left md:flex-row">
              <div className="text-white max-w-lg">
                <p className="text-sm md:text-lg">{slide.subtitle}</p>
                <h1 className="text-2xl md:text-5xl font-bold">{slide.title}</h1>
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
      <div className="container mx-auto px-4 md:px-8 py-8 md:py-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {[unsplash1, unsplash2].map((image, index) => (
          <div
            key={index}
            className="w-full h-48 md:h-72 flex items-center text-center bg-cover bg-center rounded-lg relative"
            style={{ backgroundImage: `url(${image})` }}
          >
            <div className="inset-0 bg-opacity-50 flex flex-col text-white px-6">
              <p className="text-sm md:text-lg">Low Price</p>
              <h1 className="text-lg md:text-3xl font-bold">High Coziness</h1>
              <p className="text-xs md:text-lg mt-2">UP TO 50% OFF</p>
              <button className="mt-3 px-3 py-2 md:px-6 md:py-3 bg-white text-black rounded-md font-semibold hover:bg-gray-200 transition">
                Explore items
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* New Arrivals Section */}
      <div className="container mx-auto px-4 md:px-8 py-8 md:py-12">
        <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-6">
          New Arrivals
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
                className="w-full h-28 md:h-40 object-cover rounded-md"
              />
              <h3 className="text-sm md:text-lg font-semibold mt-2">{product.name}</h3>
              <p className="text-xs md:text-sm text-gray-600">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
