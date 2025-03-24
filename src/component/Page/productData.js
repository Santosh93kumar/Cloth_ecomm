import im1 from "../Image/Rectangle 25.png";
import im2 from "../Image/product1.png";
import im3 from "../Image/product2.png";
import im4 from "../Image/product3.png";
import im5 from "../Image/product4.png";

const products = [
    {
        id: 1,
        name: "Raven Hoodie with Black Design",
        brand: "Helen's Brand",
        price: 11.00,
        rating: 4.5,
        comments: 4,
        image: im1,
        background: "bg-teal-200",
        category: "Clothing",
        subCategory: "Hoodies",
        colors: [
            { name: 'black', value: '#000000' },
            { name: 'red', value: '#FF0000' },
            { name: 'blue', value: '#0000FF' },
        ],
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        images: [im1, im2, im3, im1, im3],
        description: "100% Bio-washed Cotton - makes the fabric extra soft & silky. Flexible ribbed crew neck. Precisely stitched with no pilling & no fading. Provides all-time comfort. Anytime, anywhere. Infinite range of matte-finish HD prints.",
        specifications: {
            fabric: "Bio-washed Cotton",
            pattern: "Printed",
            fit: "Regular-fit",
            neck: "Round Neck",
            sleeve: "Half-sleeves",
            style: "Casual Wear"
        }
    },
    {
        id: 2,
        name: "Lavender Hoodie with Drawstrings",
        brand: "Nia's Brand",
        price: 19.00,
        rating: 4.2,
        comments: 7,
        image: im2,
        background: "bg-pink-300",
        category: "Clothing",
        subCategory: "Hoodies",
        colors: [
            { name: 'lavender', value: '#E6E6FA' },
            { name: 'white', value: '#FFFFFF' },
            { name: 'black', value: '#000000' },
        ],
        sizes: ['S', 'M', 'L', 'XL'],
        images: [im2, im1, im3, im4, im5],
        description: "Premium quality cotton blend with soft interior lining. Adjustable drawstrings and front pocket. Perfect for casual outings and light workouts.",
        specifications: {
            fabric: "Cotton Blend",
            pattern: "Solid",
            fit: "Relaxed-fit",
            neck: "Hooded",
            sleeve: "Full-sleeves",
            style: "Casual Wear"
        }
    },
    {
        id: 3,
        name: "Denim Jacket",
        brand: "Urban Wear",
        price: 35.00,
        rating: 4.7,
        comments: 12,
        image: im3,
        background: "bg-blue-200",
        category: "Clothing",
        subCategory: "Jackets",
        colors: [
            { name: 'blue', value: '#0000FF' },
            { name: 'lightblue', value: '#ADD8E6' },
            { name: 'darkblue', value: '#00008B' },
        ],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        images: [im3, im1, im4, im2],
        description: "Classic denim jacket made from premium quality denim. Features button closure, collared neck and multiple pockets. Versatile styling options for all seasons.",
        specifications: {
            fabric: "100% Denim",
            pattern: "Solid",
            fit: "Regular-fit",
            neck: "Collared",
            sleeve: "Full-sleeves",
            style: "Casual Wear"
        }
    },
    {
        id: 4,
        name: "Black Slim Fit Jeans",
        brand: "Classic Denim",
        price: 29.00,
        rating: 4.3,
        comments: 9,
        image: im4,
        background: "bg-gray-300",
        category: "Clothing",
        subCategory: "Jeans",
        colors: [
            { name: 'black', value: '#000000' },
            { name: 'blue', value: '#0000FF' },
            { name: 'gray', value: '#808080' },
        ],
        sizes: ['28', '30', '32', '34', '36'],
        images: [im4, im3, im5, im1],
        description: "Premium quality slim fit jeans with stretch fabric for maximum comfort. Features classic 5-pocket design and button closure. Perfect for everyday wear.",
        specifications: {
            fabric: "Cotton with Elastane",
            pattern: "Solid",
            fit: "Slim-fit",
            waist: "Mid-rise",
            length: "Full length",
            style: "Casual Wear"
        }
    },
    {
        id: 5,
        name: "Red Summer Dress",
        brand: "Ella's Closet",
        price: 27.00,
        rating: 4.4,
        comments: 14,
        image: im1,
        background: "bg-red-200",
        category: "Clothing",
        subCategory: "Dresses",
        colors: [
            { name: 'red', value: '#FF0000' },
            { name: 'white', value: '#FFFFFF' },
            { name: 'black', value: '#000000' },
        ],
        sizes: ['XS', 'S', 'M', 'L'],
        images: [im1, im5, im2, im3],
        description: "Light and airy summer dress with floral pattern. Features adjustable straps and flowy design. Perfect for summer outings and casual events.",
        specifications: {
            fabric: "Polyester Blend",
            pattern: "Printed",
            fit: "Regular-fit",
            neck: "V-neck",
            sleeve: "Sleeveless",
            style: "Casual Wear"
        }
    },
    {
        id: 6,
        name: "Leather Wallet",
        brand: "Prestige",
        price: 15.00,
        rating: 4.8,
        comments: 18,
        image: im4,
        background: "bg-brown-300",
        category: "Accessories",
        subCategory: "Wallets",
        colors: [
            { name: 'brown', value: '#A52A2A' },
            { name: 'black', value: '#000000' },
        ],
        sizes: ['One Size'],
        images: [im4, im3, im1],
        description: "Genuine leather wallet with multiple card slots and bill compartments. Features smooth finish and compact design. Perfect for everyday use.",
        specifications: {
            material: "Genuine Leather",
            pattern: "Solid",
            dimensions: "4.5\" x 3.5\"",
            cardSlots: "6",
            billCompartments: "2",
            style: "Everyday Use"
        }
    },
    {
        id: 7,
        name: "Running Shoes",
        brand: "ActiveX",
        price: 45.00,
        rating: 4.6,
        comments: 22,
        image: im5,
        background: "bg-yellow-200",
        category: "Footwear",
        subCategory: "Sports",
        colors: [
            { name: 'black', value: '#000000' },
            { name: 'white', value: '#FFFFFF' },
            { name: 'red', value: '#FF0000' },
        ],
        sizes: ['UK7', 'UK8', 'UK9', 'UK10', 'UK11'],
        images: [im5, im2, im3, im4],
        description: "Lightweight running shoes with breathable mesh upper. Features cushioned insole and durable rubber outsole. Perfect for running and everyday activities.",
        specifications: {
            material: "Mesh, Rubber",
            pattern: "Solid",
            closure: "Lace-up",
            soleMaterial: "Rubber",
            heel: "Flat",
            style: "Sports"
        }
    },
    {
        id: 8,
        name: "Smartwatch",
        brand: "TechGear",
        price: 59.00,
        rating: 4.7,
        comments: 31,
        image: im3,
        background: "bg-purple-300",
        category: "Electronics",
        subCategory: "Wearables",
        colors: [
            { name: 'black', value: '#000000' },
            { name: 'silver', value: '#C0C0C0' },
        ],
        sizes: ['One Size'],
        images: [im3, im5, im1],
        description: "Smart fitness tracker with heart rate monitor and sleep tracking. Features color display and water-resistant design. Compatible with iOS and Android.",
        specifications: {
            display: "1.3\" AMOLED",
            battery: "14-day battery life",
            waterResistant: "5 ATM",
            connectivity: "Bluetooth 5.0",
            compatibility: "iOS 10+ & Android 5.0+",
            features: "Heart Rate, Sleep Tracking"
        }
    },
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

export default { products, categories, colors, sizes, dressStyles, clothingItems };