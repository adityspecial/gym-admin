import React from 'react';
import { Settings } from 'lucide-react';
import SearchBar from './SearchBar';
import NotificationBadge from './NotificationBadge';
import UserMenu from './UserMenu';

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 fixed top-0 right-0 left-0 lg:left-72 z-10">
      <div className="h-16 px-4 sm:px-6 flex items-center justify-between">
        {/* Search Section */}
        <div className="flex-1 hidden sm:block max-w-md">
          <SearchBar />
        </div>

        {/* Actions Section */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          <NotificationBadge />
          <button className="p-2 hover:bg-gray-100 rounded-full hidden sm:block">
            <Settings className="w-6 h-6 text-gray-600" />
          </button>
          <UserMenu />
        </div>
      </div>

      {/* Mobile Search - Full Width */}
      <div className="sm:hidden px-4 pb-4">
        <SearchBar />
      </div>
    </header>
  );
};

export default Header;