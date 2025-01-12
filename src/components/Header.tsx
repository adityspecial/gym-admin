import React from 'react';
import { Bell, Search, Settings, User } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 h-16 flex items-center justify-between px-6 fixed top-0 right-0 left-0 lg:left-72 z-10">
      <div className="flex items-center flex-1 lg:ml-0 ml-16">
        <div className="relative w-96 max-w-full">
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <button className="p-2 hover:bg-gray-100 rounded-full relative">
          <Bell className="w-6 h-6 text-gray-600" />
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            3
          </span>
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <Settings className="w-6 h-6 text-gray-600" />
        </button>
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
            <User className="w-5 h-5 text-white" />
          </div>
          <span className="font-medium hidden sm:inline">Admin</span>
        </div>
      </div>
    </header>
  );
};

export default Header;