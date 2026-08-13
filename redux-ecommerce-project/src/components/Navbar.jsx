import { Link } from "react-router-dom";
import { ShoppingCart, Search, User } from "lucide-react";
import { useState } from "react";

const Navbar = () => {


  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-bold text-blue-600 cursor-pointer"
        >
          ShopX
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8 text-lg font-medium">
          <Link
            to="/"
            className="hover:text-blue-600 transition duration-300"
          >
            Home
          </Link>

          <Link
            to="/products"
            className="hover:text-blue-600 transition duration-300"
          >
            Products
          </Link>
        </div>


        {/* Icons */}
        <div className="flex items-center gap-6">

          <button>
            <User className="hover:text-blue-600 transition duration-300" />
          </button>

          <button className="relative">
            <ShoppingCart className="hover:text-blue-600 transition duration-300" />

            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs h-5 w-5 rounded-full flex items-center justify-center">
              0
            </span>
          </button>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;