import React from 'react';
import { Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white py-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Logo</h1>
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="text-base font-medium text-gray-500 hover:text-gray-900">Home</Link>
          <Link to="/blogs" className="text-base font-medium text-gray-900">Blog</Link>
          <Link to="/about" className="text-base font-medium text-gray-500 hover:text-gray-900">About</Link>
          <Link to="/contact" className="text-base font-medium text-gray-500 hover:text-gray-900">Contact</Link>
        </nav>
        <button className="md:hidden text-gray-500 hover:text-gray-900">
          <Menu size={24} />
        </button>
      </div>
    </header>
  );
};

export default Header;