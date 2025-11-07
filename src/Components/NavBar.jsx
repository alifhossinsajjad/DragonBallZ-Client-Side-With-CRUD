import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router";
import { IoLogoModelS } from "react-icons/io";
import { GoHomeFill } from "react-icons/go";
import { IoLogIn, IoLogOut, IoSunny, IoMoon } from "react-icons/io5";
import { FaGear, FaUser } from "react-icons/fa6";
import { LuRotate3D } from "react-icons/lu";
import { ImBoxAdd } from "react-icons/im";
import { use } from "react";
import { AuthContext } from "../Context/AuthContext";

const Navbar = () => {
  const { user, signOutUser } = use(AuthContext);
  const [theme, setTheme] = useState("light");

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    } else if (systemPrefersDark) {
      setTheme("dark");
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      setTheme("light");
      document.documentElement.setAttribute("data-theme", "light");
    }
  }, []);

  // Toggle theme function with useState
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-base-100/80 border-b border-base-300 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-8 py-3">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 text-lg md:text-xl font-semibold tracking-wide text-base-content"
        >
          <LuRotate3D className="text-pink-500 text-xl" />
          <span>3D Models Hub</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 font-medium">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `hover:text-pink-400 transition flex items-center gap-1 ${
                  isActive ? "text-pink-500 font-semibold" : "text-base-content"
                }`
              }
            >
              <GoHomeFill className="text-lg" />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/all-models"
              className={({ isActive }) =>
                `hover:text-pink-400 transition flex items-center gap-1 ${
                  isActive ? "text-pink-500 font-semibold" : "text-base-content"
                }`
              }
            >
              <IoLogoModelS className="text-lg" />
              All Models
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/my-downloads"
              className={({ isActive }) =>
                `hover:text-pink-400 transition flex items-center gap-1 ${
                  isActive ? "text-pink-500 font-semibold" : "text-base-content"
                }`
              }
            >
              <IoLogoModelS className="text-lg" />
              My Downloads
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/my-models"
              className={({ isActive }) =>
                `hover:text-pink-400 transition flex items-center gap-1 ${
                  isActive ? "text-pink-500 font-semibold" : "text-base-content"
                }`
              }
            >
              <IoLogoModelS className="text-lg" />
              My Models
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/add-model"
              className={({ isActive }) =>
                `hover:text-pink-400 transition flex items-center gap-1 ${
                  isActive ? "text-pink-500 font-semibold" : "text-base-content"
                }`
              }
            >
              <ImBoxAdd className="text-lg" />
              Add Model
            </NavLink>
          </li>
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle Button with State */}
          <button
            onClick={toggleTheme}
            className="btn btn-ghost btn-circle btn-sm text-base-content"
            aria-label="Toggle theme"
          >
            {theme === "light" ? (
              <IoSunny className="text-lg" />
            ) : (
              <IoMoon className="text-lg" />
            )}
          </button>

          {user ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-9 rounded-full ring-2 ring-pink-500/30 overflow-hidden">
                  <img
                    src={
                      user.photoURL ||
                      "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    }
                    alt="user"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow-lg bg-base-100 rounded-xl w-56 border border-base-300"
              >
                <div className="pb-2 border-b border-base-300 mb-2">
                  <p className="font-semibold text-base-content">{user.displayName}</p>
                  <p className="text-xs text-base-content/70">{user.email}</p>
                </div>
                <li>
                  <Link to="/profile" className="text-base-content">
                    <FaUser /> Profile
                  </Link>
                </li>
                <li>
                  <a className="text-base-content">
                    <FaGear /> Settings
                  </a>
                </li>
                <li>
                  <button
                    onClick={signOutUser}
                    className="btn btn-sm mt-2 bg-gradient-to-r from-pink-500 to-red-500 text-white border-none"
                  >
                    <IoLogOut /> Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link
              to="/auth/login"
              className="btn btn-sm bg-gradient-to-r from-pink-500 to-red-500 text-white border-none rounded-full"
            >
              <IoLogIn /> Login
            </Link>
          )}

          {/* Mobile Menu Button */}
          <div className="dropdown dropdown-end md:hidden">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle text-base-content"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow-lg bg-base-100 rounded-xl w-52 border border-base-300"
            >
              <li>
                <NavLink 
                  to="/" 
                  className={({ isActive }) => 
                    `flex items-center gap-2 ${isActive ? "text-pink-500 font-semibold" : "text-base-content"}`
                  }
                >
                  <GoHomeFill className="text-lg" />
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/all-models"
                  className={({ isActive }) => 
                    `flex items-center gap-2 ${isActive ? "text-pink-500 font-semibold" : "text-base-content"}`
                  }
                >
                  <IoLogoModelS className="text-lg" />
                  All Models
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/my-downloads"
                  className={({ isActive }) => 
                    `flex items-center gap-2 ${isActive ? "text-pink-500 font-semibold" : "text-base-content"}`
                  }
                >
                  <IoLogoModelS className="text-lg" />
                  My Downloads
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/my-models"
                  className={({ isActive }) => 
                    `flex items-center gap-2 ${isActive ? "text-pink-500 font-semibold" : "text-base-content"}`
                  }
                >
                  <IoLogoModelS className="text-lg" />
                  My Models
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/add-model"
                  className={({ isActive }) => 
                    `flex items-center gap-2 ${isActive ? "text-pink-500 font-semibold" : "text-base-content"}`
                  }
                >
                  <ImBoxAdd className="text-lg" />
                  Add Model
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;