import React from 'react';
import { Search } from 'lucide-react';

const SearchBar = () => {
  return (
    <div className="relative w-full max-w-md">
      <input
        type="text"
        placeholder="Search..."
        className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
      />
      <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
    </div>
  );
};

export default SearchBar;