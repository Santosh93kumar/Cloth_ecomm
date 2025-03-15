const orders = [
    {
      id: "123456789",
      date: "2 June 2023, 2:30 PM",
      deliveryDate: "6 June 2023",
      status: "In-progress",
      paymentMethod: "Cash on delivery",
      items: [
        {
          name: "Black Printed T-shirt",
          color: "Pink",
          qty: 1,
          price: 32.0,
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqTJjqD8zuPS2ARCgGVsqAVlZwr4m9JFRidQ&s",
        },
      ],
    },
    {
      id: "123456790",
      date: "3 June 2023, 1:00 PM",
      deliveryDate: "7 June 2023",
      status: "Shipped",
      paymentMethod: "Credit Card",
      items: [
        {
          name: "Printed blue & white Coat",
          color: "White",
          qty: 1,
          price: 114.0,
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqTJjqD8zuPS2ARCgGVsqAVlZwr4m9JFRidQ&s",
        },
      ],
    },
    {
      id: "123456791",
      date: "4 June 2023, 11:45 AM",
      deliveryDate: "8 June 2023",
      status: "Cancelled",
      paymentMethod: "UPI",
      items: [
        {
          name: "Blue Shirt",
          color: "Blue",
          qty: 1,
          price: 93.0,
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqTJjqD8zuPS2ARCgGVsqAVlZwr4m9JFRidQ&s",
        },
      ],
    },
    {
      id: "123456792",
      date: "5 June 2023, 3:20 PM",
      deliveryDate: "9 June 2023",
      status: "Completed",
      paymentMethod: "Debit Card",
      items: [
        {
          name: "Red Hoodie",
          color: "Red",
          qty: 1,
          price: 120.0,
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqTJjqD8zuPS2ARCgGVsqAVlZwr4m9JFRidQ&s",
        },
      ],
    },
    {
      id: "123456489",
      date: "2 June 2023, 2:30 PM",
      deliveryDate: "7 June 2023",
      status: "In-progress",
      paymentMethod: "Cash on delivery",
      items: [
        {
          name: "Black Printed T-shirt",
          color: "Pink",
          qty: 1,
          price: 32.0,
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqTJjqD8zuPS2ARCgGVsqAVlZwr4m9JFRidQ&s",
        },
      ],
    },
    {
      id: "123455789",
      date: "4 June 2023, 2:30 PM",
      deliveryDate: "10 June 2023",
      status: "completed",
      paymentMethod: "Cash on delivery",
      items: [
        {
          name: "Black Printed T-shirt",
          color: "Pink",
          qty: 1,
          price: 32.0,
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqTJjqD8zuPS2ARCgGVsqAVlZwr4m9JFRidQ&s",
        },
      ],
    },
    {
      id: "123455789",
      date: "4 June 2023, 2:30 PM",
      deliveryDate: "10 June 2023",
      status: "In-progress",
      paymentMethod: "Cash on delivery",
      items: [
        {
          name: "Black Printed T-shirt",
          color: "Pink",
          qty: 1,
          price: 32.0,
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqTJjqD8zuPS2ARCgGVsqAVlZwr4m9JFRidQ&s",
        },
      ],
    },
    {
      id: "123455790",
      date: "5 June 2023, 3:20 PM",
      deliveryDate: "11 June 2023",
      status: "In-progress",
      paymentMethod: "Credit Card",
      items: [
        {
          name: "Blue Denim Jacket",
          color: "Blue",
          qty: 1,
          price: 65.0,
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqTJjqD8zuPS2ARCgGVsqAVlZwr4m9JFRidQ&s",
        },
      ],
    },
    {
      id: "123455791",
      date: "6 June 2023, 11:00 AM",
      deliveryDate: "12 June 2023",
      status: "In-progress",
      paymentMethod: "Debit Card",
      items: [
        {
          name: "Sneakers",
          color: "White",
          qty: 1,
          price: 80.0,
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqTJjqD8zuPS2ARCgGVsqAVlZwr4m9JFRidQ&s",
        },
      ],
    },
    // Completed Orders
    {
      id: "123455792",
      date: "7 June 2023, 1:45 PM",
      deliveryDate: "13 June 2023",
      status: "Completed",
      paymentMethod: "UPI",
      items: [
        {
          name: "Formal Shirt",
          color: "White",
          qty: 1,
          price: 55.0,
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqTJjqD8zuPS2ARCgGVsqAVlZwr4m9JFRidQ&s",
        },
      ],
    },
    {
      id: "123455793",
      date: "8 June 2023, 4:30 PM",
      deliveryDate: "14 June 2023",
      status: "Completed",
      paymentMethod: "Cash on delivery",
      items: [
        {
          name: "Hoodie",
          color: "Red",
          qty: 1,
          price: 90.0,
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqTJjqD8zuPS2ARCgGVsqAVlZwr4m9JFRidQ&s",
        },
      ],
    },
    {
      id: "123455794",
      date: "9 June 2023, 9:20 AM",
      deliveryDate: "15 June 2023",
      status: "Completed",
      paymentMethod: "Credit Card",
      items: [
        {
          name: "Running Shoes",
          color: "Black",
          qty: 1,
          price: 75.0,
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqTJjqD8zuPS2ARCgGVsqAVlZwr4m9JFRidQ&s",
        },
      ],
    },
    // Cancelled Orders
    {
      id: "123455795",
      date: "10 June 2023, 5:50 PM",
      deliveryDate: "16 June 2023",
      status: "Cancelled",
      paymentMethod: "UPI",
      items: [
        {
          name: "Casual Watch",
          color: "Brown",
          qty: 1,
          price: 120.0,
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqTJjqD8zuPS2ARCgGVsqAVlZwr4m9JFRidQ&s",
        },
      ],
    },
    {
      id: "123455796",
      date: "11 June 2023, 7:10 PM",
      deliveryDate: "17 June 2023",
      status: "Cancelled",
      paymentMethod: "Debit Card",
      items: [
        {
          name: "Backpack",
          color: "Grey",
          qty: 1,
          price: 45.0,
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqTJjqD8zuPS2ARCgGVsqAVlZwr4m9JFRidQ&s",
        },
      ],
    },
    {
      id: "123455797",
      date: "12 June 2023, 10:30 AM",
      deliveryDate: "18 June 2023",
      status: "Cancelled",
      paymentMethod: "Cash on delivery",
      items: [
        {
          name: "Sunglasses",
          color: "Black",
          qty: 1,
          price: 50.0,
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqTJjqD8zuPS2ARCgGVsqAVlZwr4m9JFRidQ&s",
        },
      ],
    },
    {
      id: "123346789",
      date: "1 June 2023, 2:30 PM",
      deliveryDate: "5 June 2023",
      status: "cancelled",
      paymentMethod: "Cash on delivery",
      items: [
        {
          name: "Black Printed T-shirt",
          color: "Pink",
          qty: 1,
          price: 32.0,
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqTJjqD8zuPS2ARCgGVsqAVlZwr4m9JFRidQ&s",
        },
      ],
    },
    
  ];
  
  import { useState } from "react";
  import { useNavigate } from "react-router-dom";
  
  export default function MyOrders() {
    const [activeTab, setActiveTab] = useState("Active");
    const navigate = useNavigate();
  
    const handleOrderClick = (order) => {
      navigate("/order-details", { state: { order } });
    };
  
    const filteredOrders = orders.filter((order) => {
      const status = order.status.toLowerCase();
      return activeTab === "Active"
        ? status === "in-progress"
        : activeTab === "Cancelled"
        ? status === "cancelled"
        : activeTab === "Completed"
        ? status === "completed"
        : false;
    });
  
    return (
      <div className="max-w-4xl mx-auto p-4">
        <h2 className="text-2xl font-semibold">My Orders</h2>
  
        {/* Tabs */}
        <div className="sticky top-0 bg-white z-10">
          <div className="flex mt-4 border-b">
            {["Active", "Cancelled", "Completed"].map((tab) => (
              <button
                key={tab}
                className={`py-2 px-4 flex-1 text-center ${
                  activeTab === tab
                    ? "border-b-2 border-black font-semibold"
                    : "text-gray-500"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
  
        {/* Orders List */}
        <div className="mt-6 space-y-4 overflow-y-auto" style={{ maxHeight: '100%' }}>
          {filteredOrders.length === 0 ? (
            <p className="text-center text-gray-500">No orders found.</p>
          ) : (
            filteredOrders.map((order) => (
              <div key={order.id} className="p-4 rounded-lg shadow-sm bg-white">
                <div className="flex justify-between bg-gray-100 p-4 rounded-lg">
                  <div>
                    <p className="font-semibold">Order no: #{order.id}</p>
                    <p className="text-sm text-gray-600">Order Date: {order.date}</p>
                    <p className="text-sm text-gray-600">Estimated Delivery: {order.deliveryDate}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-700 font-medium">
                      Order Status: {order.status}
                    </p>
                    <p className="text-sm text-gray-500">Payment: {order.paymentMethod}</p>
                  </div>
                </div>
  
                {order.items.map((item, index) => (
                  <div key={index} className="mt-4 flex items-center gap-4 border-t pt-4 order-item">
                    <img
                      src={item.image}
                      alt={`${item.name} - ${item.color}`}
                      className="w-14 h-20 object-cover rounded"
                    />
                    <div className="flex-1 details ">
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-gray-500">Colour: {item.color}</p>
                      <p className="text-sm text-gray-500">Qty: {item.qty}</p>
                      <p className="font-semibold">Total: ${item.price.toFixed(2)}</p>
                    </div>
                    {order.status.toLowerCase() === "in-progress" && (
                      <div className="actions">
                        <button
                          className="bg-purple-500 text-white px-4 py-2 rounded-md text-sm "
                          onClick={() => handleOrderClick(order)}
                        >
                          View Detail
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ))
          )}
        </div>
      </div>
    );
  }