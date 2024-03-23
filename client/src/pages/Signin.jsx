import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../redux/user/userSlice";

const Signin = () => {
  const [formData, setFormData] = useState({});
  const { error, loading } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    // Remove error message after 1 seconds
    const timeout = setTimeout(() => {
      dispatch(signInFailure(null));
    }, 1000);

    // Cleanup function to clear timeout on component unmount or re-render
    return () => clearTimeout(timeout);
  }, [error, dispatch]);

  // Handle form input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Proceed with form submission
    try {
      dispatch(signInStart());
      const response = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (data.success === false) {
        dispatch(signInFailure(data.message));
        return;
      }
      dispatch(signInSuccess(data.message));
      navigate("/");
    } catch (error) {
      dispatch(signInFailure("An error occurred while signing in."));
    }
  };

  return (
    <div className="container flex items-center justify-center">
      {/* Image Container */}
      <div className="hidden md:block w-1/2">
        <img
          src="../../public/sample2.avif"
          alt="sample"
          className="w-full h-full object-cover max-h-[750px]"
        />
      </div>
      {/* Sign Up Form Container */}
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
        {/* Error message */}
        {error && <p className="text-red-500 text-center m-3">{error}</p>}
      </div>
    </div>
  );
};

export default Signin;
