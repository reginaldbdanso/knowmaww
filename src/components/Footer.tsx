import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-600 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">About</h3>
            <p className="text-sm">We are a team of passionate writers and tech enthusiasts, dedicated to bringing you the latest insights in technology and web development.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="text-sm space-y-2">
              <li><Link to="/" className="hover:text-gray-900">Home</Link></li>
              <li><Link to="/blogs" className="hover:text-gray-900">Blog</Link></li>
              <li><Link to="/about" className="hover:text-gray-900">About</Link></li>
              <li><Link to="/contact" className="hover:text-gray-900">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
            <ul className="text-sm space-y-2">
              <li><a href="#" className="hover:text-gray-900">Technology</a></li>
              <li><a href="#" className="hover:text-gray-900">Web Development</a></li>
              <li><a href="#" className="hover:text-gray-900">Design</a></li>
              <li><a href="#" className="hover:text-gray-900">Programming</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Subscribe to Newsletter</h3>
            <form className="mt-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 text-sm text-gray-900 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="mt-2 w-full bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-12 pt-8 text-sm text-center">
          © 2024 Your Blog Name. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;