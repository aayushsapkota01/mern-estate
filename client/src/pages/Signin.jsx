import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signin = () => {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const navigate = useNavigate();

  // Handle form input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  // Validate email format
  const validateEmail = (email) => {
    // Regular expression for email validation
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if any field is empty
    if (!formData.email || !formData.password) {
      setError("Invalid: Check your credentials!");
      setTimeout(() => setError(null), 2000);
      return;
    }

    // Validate email format
    if (!validateEmail(formData.email)) {
      setError("Invalid email format!");
      setTimeout(() => setError(null), 2000);
      return;
    }

    // Proceed with form submission
    try {
      setLoading(true);
      const response = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (data.success === false) {
        setError(data.message);
        setLoading(false);
        setSuccessMessage("");
        setTimeout(() => setError(null), 3000);
        return;
      }
      setLoading(false);
      setSuccessMessage("User Sign In Successfully!");
      setError(null);
      setTimeout(() => setSuccessMessage(""), 3000);
      navigate("/");
    } catch (error) {
      setLoading(false);
      setError(error.message);
      setSuccessMessage("");
      setTimeout(() => setError(null), 3000);
    }
  };

  return (
    <div className="container flex items-center justify-center">
      {/* Image Container */}
      <div className="hidden md:block w-1/2 m">
        <img
          src="../../public/sample2.jpg"
          alt="sample"
          className="w-full h-full object-cover max-h-[750px]"
        />
      </div>
      {/* Sign Up Form Container */}
      <div></div>
      <div className="p-4 max-w-lg ms-auto w-full md:w-1/2 items-center">
        <h1 className="text-4xl text-center font-semibold my-7 text-[#000f72]">
          Sign In
        </h1>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Email"
            className="border p-3 rounded-lg"
            id="email"
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Password"
            className="border p-3 rounded-lg"
            id="password"
            onChange={handleChange}
          />
          <button
            disabled={loading}
            className="bg-[#1941ff] text-white rounded-lg uppercase p-3 hover:opacity-90 cursor-pointer disabled:opacity-80 tracking-wide"
          >
            {loading ? "Loading..." : "Sign In"}
          </button>
        </form>
        <div className="flex gap-2 mt-5">
          <p>Dont have an account?</p>
          <Link to={"/sign-up"}>
            <span className="text-blue-700 underline">Sign up</span>
          </Link>
        </div>
        {/* Error and success messages */}
        {error && <p className="text-red-500 text-center m-3">{error}</p>}
        {successMessage && (
          <p className="text-green-500 text-center m-3">{successMessage}</p>
        )}
      </div>
    </div>
  );
};

export default Signin;
