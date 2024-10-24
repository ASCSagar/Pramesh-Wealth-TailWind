import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  X,
  Home,
  Briefcase,
  Users,
  Mail,
  ArrowRight,
} from "lucide-react";
import logo from "../../assets/pramesh-wealth-logo.png";

const MobileMenu = ({ isOpen, setIsOpen }) => (
  <div
    className={`fixed inset-0 z-50 transform ${
      isOpen ? "translate-x-0" : "translate-x-full"
    } transition-transform duration-300 ease-in-out`}
  >
    <div
      className="absolute inset-0 bg-primary-500 opacity-50"
      onClick={() => setIsOpen(false)}
    ></div>
    <nav className="relative z-10 bg-white h-full w-64 shadow-xl flex flex-col">
      <div className="p-4 flex justify-between items-center border-b">
        <span className="font-bold text-lg">Menu</span>
        <button
          onClick={() => setIsOpen(false)}
          className="text-neutral-500 hover:text-neutral-700"
        >
          <X size={24} />
        </button>
      </div>
      <div className="py-4 flex flex-col">
        <Link
          to="/"
          className="px-4 py-2 text-neutral-900 hover:bg-primary-100"
          onClick={() => setIsOpen(false)}
        >
          Home
        </Link>
        <Link
          to="/services"
          className="px-4 py-2 text-neutral-900 hover:bg-primary-100"
          onClick={() => setIsOpen(false)}
        >
          Services
        </Link>
        <Link
          to="/about"
          className="px-4 py-2 text-neutral-900 hover:bg-primary-100"
          onClick={() => setIsOpen(false)}
        >
          About Us
        </Link>
        <Link
          to="/contact"
          className="px-4 py-2 text-neutral-900 hover:bg-primary-100"
          onClick={() => setIsOpen(false)}
        >
          Contact
        </Link>
      </div>
      <div className="mt-auto p-4">
        <button className="w-full bg-primary-500 text-white px-4 py-2 rounded-md text-base font-medium hover:bg-primary-600 transition duration-300 ease-in-out flex items-center justify-center">
          Get Started <ArrowRight size={18} className="ml-2" />
        </button>
      </div>
    </nav>
  </div>
);

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <div className="flex justify-between items-center h-18 m-3 ">
        <Link to="/" className="flex-shrink-0">
          <img className="h-12 w-auto" src={logo} alt="Pramesh Wealth" />
        </Link>
        <nav className="hidden md:flex items-center space-x-4 ml-auto">
          {" "}
          {/* Add ml-auto to push the nav items to the end */}
          <Link
            to="/"
            className="text-neutral-900 hover:text-primary-500 px-3 py-2 rounded-md text-base font-medium"
          >
            Home
          </Link>
          <Link
            to="/services"
            className="text-neutral-900 hover:text-primary-500 px-3 py-2 rounded-md text-base font-medium"
          >
            Services
          </Link>
          <Link
            to="/about"
            className="text-neutral-900 hover:text-primary-500 px-3 py-2 rounded-md text-base font-medium"
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="text-neutral-900 hover:text-primary-500 px-3 py-2 rounded-md text-base font-medium"
          >
            Contact
          </Link>
          <button className="bg-primary-500 text-white px-6 py-3 rounded-md text-base font-medium hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition duration-300 ease-in-out">
            Get Started
          </button>
        </nav>
        <button
          className="md:hidden text-neutral-500 hover:text-neutral-700"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu size={24} />
        </button>
      </div>

      <MobileMenu isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} />

      {/* Bottom Navigation for Mobile */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-neutral-200 px-4 py-2 flex justify-around items-center">
        <Link
          to="/"
          className="flex flex-col items-center text-neutral-600 hover:text-primary-500"
        >
          <Home size={20} />
          <span className="text-xs mt-1">Home</span>
        </Link>
        <Link
          to="/services"
          className="flex flex-col items-center text-neutral-600 hover:text-primary-500"
        >
          <Briefcase size={20} />
          <span className="text-xs mt-1">Services</span>
        </Link>
        <Link
          to="/about"
          className="flex flex-col items-center text-neutral-600 hover:text-primary-500"
        >
          <Users size={20} />
          <span className="text-xs mt-1">About</span>
        </Link>
        <Link
          to="/contact"
          className="flex flex-col items-center text-neutral-600 hover:text-primary-500"
        >
          <Mail size={20} />
          <span className="text-xs mt-1">Contact</span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
