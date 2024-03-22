import { Link } from "react-router-dom";
const Signup = () => {
  return (
    <div className="container flex items-center justify-center">
      {/* Image */}
      <div className="hidden md:block w-1/2 m">
        <img
          src="../../public/sample.jpg"
          alt="sample"
          className="w-full h-full object-cover max-h-[750px]"
        />
      </div>
      {/* Sign Up Form */}

      <div className="p-4 max-w-lg mx-auto w-full md:w-1/2 items-center">
        <h1 className="text-4xl text-center font-semibold my-7 text-[#000f72]">
          Sign Up
        </h1>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Username"
            className="border p-3 rounded-lg "
            id="username"
          />
          <input
            type="text"
            placeholder="Email"
            className="border p-3 rounded-lg "
            id="email"
          />
          <input
            type="password"
            placeholder="Password"
            className="border p-3 rounded-lg "
            id="password"
          />
          <button className="bg-[#1941ff] text-white rounded-lg uppercase p-3 hover:opacity-90 cursor-pointer disabled:opacity-80 tracking-wide">
            Sign up
          </button>
        </form>
        <div className="flex gap-2 mt-5">
          <p>Have an account?</p>
          <Link to={"/sign-in"}>
            <span className="text-blue-700 underline">Sign in</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
