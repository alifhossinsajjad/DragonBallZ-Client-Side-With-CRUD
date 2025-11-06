import React from "react";
import { Link, NavLink } from "react-router";
import { IoLogoModelS } from "react-icons/io";
import { GoHomeFill } from "react-icons/go";
import { IoLogIn, IoLogOut } from "react-icons/io5";
import { FaGear, FaUser } from "react-icons/fa6";
import { LuRotate3D } from "react-icons/lu";
import { ImBoxAdd } from "react-icons/im";
import { use } from "react";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { user, signOutUser } = use(AuthContext);
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-white/10 border-b border-white/20 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-8 py-3">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 text-lg md:text-xl font-semibold tracking-wide"
        >
          <LuRotate3D className="text-pink-400 text-xl" />
          <span>3D Models Hub</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8  font-medium">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `hover:text-pink-400 transition ${
                  isActive ? "text-pink-500 font-semibold" : ""
                }`
              }
            >
              <GoHomeFill className="inline-block mr-1" />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/all-models"
              className={({ isActive }) =>
                `hover:text-pink-400 transition ${
                  isActive ? "text-pink-500 font-semibold" : ""
                }`
              }
            >
              <IoLogoModelS className="inline-block mr-1" />
              All Models
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/add-model"
              className={({ isActive }) =>
                `hover:text-pink-400 transition ${
                  isActive ? "text-pink-500 font-semibold" : ""
                }`
              }
            >
              <ImBoxAdd className="inline-block mr-1" />
              Add Model
            </NavLink>
          </li>
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {user ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-9 rounded-full ring-2 ring-white/30 overflow-hidden">
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
                className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow-lg bg-white/20 backdrop-blur-lg rounded-xl w-56 text-white"
              >
                <div className="pb-2 border-b border-white/20 mb-2">
                  <p className="font-semibold">{user.displayName}</p>
                  <p className="text-xs text-white/70">{user.email}</p>
                </div>
                <li>
                  <Link to="/profile">
                    <FaUser /> Profile
                  </Link>
                </li>
                <li>
                  <a>
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
          <div className="dropdown md:hidden">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost text-white"
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow-lg bg-white/20 backdrop-blur-lg rounded-xl w-52 text-white"
            >
              <li>
                <NavLink to="/">
                  <GoHomeFill /> Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/all-models">
                  <IoLogoModelS /> All Models
                </NavLink>
              </li>
              <li>
                <NavLink to="/add-model">
                  <ImBoxAdd /> Add Model
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
