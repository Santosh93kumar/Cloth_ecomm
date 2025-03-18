import { useState } from "react";
import forgetPasswordImage from "../../Image/ForgetPasswordImage.png"

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const response = await fetch("http://localhost:5000/api/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong!");
      }

      setSuccess("A password reset link has been sent to your email.");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
      <div className="w-full mx-auto bg-white flex h-screen shadow-lg">
        
        <div className="w-1/2 hidden sm:block">
          <img
            src={forgetPasswordImage} 
            alt="Reset Password"
            className="w-full h-full object-fit"
          />
        </div>

        <div className="w-full lg:w-1/2 flex flex-col  p-10">

          {/* Reset Password Form */}
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Reset Your Password</h2>
          <p className="text-gray-600 text-sm mb-6">
            Enter your email and we’ll send you a link to reset your password.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm text-gray-700">Email</label>
              <input
                type="email"
                className="w-full p-4 border rounded mt-1 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}
            {success && <p className="text-green-500 text-sm">{success}</p>}

            <button
              type="submit"
              className="bg-purple-600 text-white p-4 rounded-lg hover:bg-purple-700 transition"
            >
              Send
            </button>
          </form>

          {/* Back to Login */}
          <p className="mt-4 text-sm">
            Back to{" "}
            <a href="/login" className="text-purple-600 hover:underline">
              Login
            </a>
          </p>
        </div>
      </div>
  );
};

export default ResetPassword;
