import React from 'react';
import { Search } from 'lucide-react';

const SearchBar = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center mb-12">
      <div className="relative w-full md:w-96 mb-4 md:mb-0">
        <input
          type="text"
          placeholder="Search articles"
          className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
      </div>
      <div className="flex space-x-4">
        <select className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-full hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          <option>All Categories</option>
          <option>Technology</option>
          <option>Design</option>
          <option>Development</option>
        </select>
        <select className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-full hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          <option>Latest</option>
          <option>Oldest</option>
          <option>Most Popular</option>
        </select>
      </div>
    </div>
  );
};

export default SearchBar;