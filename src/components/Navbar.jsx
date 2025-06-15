import React, { useState } from "react";
import { FaShoppingCart, FaUser, FaBars, FaTimes } from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [menuOpen, setMenuOpen] = useState(false);
  const [shopDropdown, setShopDropdown] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `relative pb-1 transition hover:text-pink-500 ${
      isActive
        ? "text-pink-500 font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-pink-500"
        : ""
    }`;

  return (
    <header
      className="w-full font-poppins uppercase py-6 z-50 relative"
      id="top"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center fixed top-0 w-full bg-white/10 backdrop-blur-md border-b border-white/20 z-50">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-[#000000]">
          Kir<span className=" text-orange-400">a</span>nsh<span className="text-orange-400">o</span>p
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-700 items-center">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>

          <div
            className="relative"
            onMouseEnter={() => setShopDropdown(true)}
            onMouseLeave={() => setShopDropdown(false)}
          >
            <span className="cursor-pointer hover:text-pink-500 select-none">
              Shop
            </span>
            {shopDropdown && (
              <div className="absolute top-full left-0 mt-1 bg-white shadow-md rounded-md py-2 z-50 min-w-[150px]">
                <NavLink
                  to="/shop/men"
                  className="block px-4 py-2 text-sm hover:bg-gray-100"
                >
                  Men
                </NavLink>
                <NavLink
                  to="/shop/women"
                  className="block px-4 py-2 text-sm hover:bg-gray-100"
                >
                  Women
                </NavLink>
                <NavLink
                  to="/shop/electronics"
                  className="block px-4 py-2 text-sm hover:bg-gray-100"
                >
                  Electronics
                </NavLink>
              </div>
            )}
          </div>

          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>
          <NavLink to="/register" className={navLinkClass}>
            Register
          </NavLink>
          <NavLink to="/login" className={navLinkClass}>
            Login
          </NavLink>
          <NavLink to="/about" className={navLinkClass}>
            about
          </NavLink>
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder="Search products..."
            className="hidden lg:block px-3 py-1.5 border rounded-md text-sm border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />

          <Link
            to="/login"
            className="text-gray-600 hover:text-pink-500 text-lg"
          >
            <FaUser />
          </Link>

          <Link
            to="/goo"
            className="relative text-gray-600 hover:text-pink-500 text-lg"
          >
            <FaShoppingCart />
            <span className="absolute -top-2 -right-2 text-[10px] bg-pink-500 text-white w-4 h-4 rounded-full flex items-center justify-center">
              {cartItems.length}
            </span>
          </Link>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-600 text-xl md:hidden"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-20 px-4 space-y-3 pb-4 bg-white shadow-md">
          <NavLink
            to="/"
            onClick={() => setMenuOpen(false)}
            className="block py-1 text-sm text-gray-700"
          >
            Home
          </NavLink>
          <div>
            <span className="block py-1 text-sm text-gray-700">Shop</span>
            <div className="ml-4">
              <NavLink
                to="/shop/men"
                onClick={() => setMenuOpen(false)}
                className="block py-1 text-sm"
              >
                Men
              </NavLink>
              <NavLink
                to="/shop/women"
                onClick={() => setMenuOpen(false)}
                className="block py-1 text-sm"
              >
                Women
              </NavLink>
              <NavLink
                to="/shop/electronics"
                onClick={() => setMenuOpen(false)}
                className="block py-1 text-sm"
              >
                Electronics
              </NavLink>
            </div>
          </div>
         
          <NavLink
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="block py-1 text-sm text-gray-700"
          >
            Contact
          </NavLink>
          <NavLink
            to="/register"
            onClick={() => setMenuOpen(false)}
            className="block py-1 text-sm text-gray-700"
          >
            Register
          </NavLink>
          <NavLink
            to="/login"
            onClick={() => setMenuOpen(false)}
            className="block py-1 text-sm text-gray-700"
          >
            Login
          </NavLink>
        </div>
      )}
    </header>
  );
};

export default Navbar;
