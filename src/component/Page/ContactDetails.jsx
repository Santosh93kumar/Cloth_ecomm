import { useState } from "react";
import { FaRegUser, FaRegHeart, FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


export default function ContactDetails() {
 const navigate= useNavigate()

  const [user, setUser] = useState({
    name: "Jhanvi Shah",
    email: "Jhanvi@gmail.com",
    phone: "8980252445",
    password: "********",
  });

  const [addresses, setAddresses] = useState([
    {
      id: 1,
      name: "Jhanvi Shah",
      phone: "8980252445",
      address: "1/4 Pragatinagar Flats, opp. Jain derasar, Vijaynagar road",
      type: "Home",
      default: true,
      isEditing: false,
    },
    {
      id: 2,
      name: "Jhanvi Shah",
      phone: "8980252445",
      address: "1/4 Pragatinagar Flats, opp. Jain derasar, Vijaynagar road",
      type: "Office",
      default: false,
      isEditing: false,
    },
  ]);

  const [isEditing, setIsEditing] = useState(null);

  // Handle input change for user details
  const handleChange = (field, value) => {
    setUser({ ...user, [field]: value });
  };

  // Handle address removal
  const removeAddress = (id) => {
    setAddresses(addresses.filter((address) => address.id !== id));
  };

  // Set a new default address
  const setAsDefault = (id) => {
    setAddresses(
      addresses.map((address) => ({
        ...address,
        default: address.id === id,
      }))
    );
  };

  // Handle editing an address
  const toggleEditAddress = (id) => {
    setAddresses(
      addresses.map((address) =>
        address.id === id ? { ...address, isEditing: !address.isEditing } : address
      )
    );
  };

  // Handle address change
  const updateAddress = (id, key, value) => {
    setAddresses(
      addresses.map((address) =>
        address.id === id ? { ...address, [key]: value } : address
      )
    );
  };

  return (
    <div className="mx-auto py-10 px-8">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        <span className="cursor-pointer hover:underline" onClick={() => navigate("/")}>
          Home
        </span>{" "}
        &gt;{" "}
        <span className="cursor-pointer hover:underline" onClick={() => navigate("/account")}>
          My Account
        </span>{" "}
        &gt; <span className="text-black">Personal Info</span>
      </nav>

      <div className="flex flex-col md:flex-row gap-10">
        {/* Sidebar */}
        <aside className="w-full md:w-1/4 p-6 border-r border-gray-200">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <span className="w-2 h-6 bg-purple-500 rounded-full"></span> Hello Janvi
        </h2>
          <p className="text-sm text-gray-500 mb-6">Welcome to your Account</p>

          <nav className="space-y-4">
            <button className="flex items-center gap-3 text-[#807D7E] hover:text-black">
              <FaRegUser /> My Orders
            </button>
            <button className="flex items-center gap-3 text-[#807D7E] hover:text-black">
              <FaRegHeart /> Wishlist
            </button>
            <button className="flex items-center gap-3 text-black font-bold">
              <FaRegUser /> My Info
            </button>
            <button className="flex items-center gap-3 text-[#807D7E] hover:text-black">
              <FaSignOutAlt /> Sign Out
            </button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="w-full md:w-3/4">
          {/* Contact Details */}
          <h2 className="text-2xl font-bold mb-6">My Info</h2>
          <div className="bg-white p-2">
            <h3 className="text-lg font-bold mb-4">Contact Details</h3>

            <div className="space-y-4">
              {Object.entries(user).map(([key, value]) => (
                <div key={key} className="flex justify-between items-center border-b border-[#EDEEF2] pb-2">
                  <div>
                  <p className="text-gray-600 capitalize">{key.replace(/_/g, " ")}</p>
                  {isEditing === key ? (
                    <input
                      type={key === "password" ? "password" : "text"}
                      value={value}
                      onChange={(e) => handleChange(key, e.target.value)}
                      className="border p-1 rounded w-2/3"
                    />
                  ) : (
                    <p className="text-black">{value}</p>
                  )}
                  </div>
                  <button
                    className="text-[#3C4242]"
                    onClick={() => setIsEditing(isEditing === key ? null : key)}
                  >
                    {isEditing === key ? "Save" : "Change"}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Address Section */}
          <h2 className="text-2xl font-bold mt-10 mb-6 flex justify-between text-[#3C4242]">
            Address
            <Link to={'/add-address'} className="px-4 py-2 text-[#3C4242] text-sm">Add New</Link>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {addresses.map((address) => (
              <div key={address.id} className="bg-gray-200 p-6 rounded-lg shadow-md border border-gray-200">
                {address.isEditing ? (
                  <>
                    <input
                      type="text"
                      value={address.name}
                      onChange={(e) => updateAddress(address.id, "name", e.target.value)}
                      className="border p-1 rounded w-full mb-2"
                    />
                    <input
                      type="text"
                      value={address.phone}
                      onChange={(e) => updateAddress(address.id, "phone", e.target.value)}
                      className="border p-1 rounded w-full mb-2"
                    />
                    <textarea
                      value={address.address}
                      onChange={(e) => updateAddress(address.id, "address", e.target.value)}
                      className="border p-1 rounded w-full mb-2"
                    />
                  </>
                ) : (
                  <>
                    <div>
                    <h3 className="text-lg font-semibold pb-4">{address.name}</h3>
                    <p className="text-gray-600 pb-4">{address.phone}</p>
                    <p className="text-gray-600 pb-4">{address.address}</p>
                    <div>
                        <div className="border border-[#807D7E] rounded-lg w-fit p-1 mb-4">{address.type}</div>
                    </div>
                    </div>

                  </>
                )}

                <div className="flex gap-3">
                  <button className="px-3 py-1 text-[#3C4242]" onClick={() => removeAddress(address.id)}>
                    Remove
                  </button>
                  <button
                    className="px-3 py-1 text-[#3C4242]"
                    onClick={() => toggleEditAddress(address.id)}
                  >
                    {address.isEditing ? "Save" : "Edit"}
                  </button>
                  {!address.default && (
                    <button className="px-3 py-1 text-[#3C4242] rounded" onClick={() => setAsDefault(address.id)}>
                      Set as Default
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
