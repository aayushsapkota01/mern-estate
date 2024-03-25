import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <header className="bg-slate-100">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        {/* Home Page TribalEstate */}
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-2xl flex flex-wrap">
            <span className="text-[#000f72]">Tribal</span>
            <span className="text-[#1941ff]">Estate</span>
          </h1>
        </Link>

        {/* Search Input */}
        <form className="bg-slate-100 p-3 rounded-lg flex items-center border">
          <input
            type="text"
            placeholder="Search . . ."
            className="bg-transparent focus:outline-none w-28 sm:w-64"
          />
          <FaSearch className="text-slate-500 cursor-pointer " />
        </form>

        {/* Nav Items */}
        <ul className="flex gap-8">
          {/* Home */}
          <Link to="/home">
            <li className="hidden sm:inline  hover:text-[#002cff] cursor-pointer">
              Home
            </li>
          </Link>
          {/* About */}
          <Link to="/about">
            <li className="hidden sm:inline  hover:text-[#002cff] cursor-pointer">
              About
            </li>
          </Link>
          {/* Sign In */}
          <Link to="/profile">
            {currentUser ? (
              <img
                className="rounded-full h-8 w-8 object-cover cursor-pointer"
                src={currentUser.avatar}
                alt="Profile"
              />
            ) : (
              <li className="hover:text-[#002cff]  cursor-pointer">Sign In</li>
            )}
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
