import React from 'react';
import { LogOut, User, Settings, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

interface UserDropdownProps {
  isOpen: boolean;
}

const UserDropdown: React.FC<UserDropdownProps> = ({ isOpen }) => {
  if (!isOpen) return null;

  return (
    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 z-50">
      <Link
        to="/profile"
        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
      >
        <User className="w-4 h-4 mr-3" />
        Profile
      </Link>
      <Link
        to="/settings"
        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
      >
        <Settings className="w-4 h-4 mr-3" />
        Settings
      </Link>
      <Link
        to="/security"
        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
      >
        <Shield className="w-4 h-4 mr-3" />
        Security
      </Link>
      <hr className="my-1" />
      <button
        onClick={() => console.log('Logout clicked')}
        className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
      >
        <LogOut className="w-4 h-4 mr-3" />
        Logout
      </button>
    </div>
  );
};

export default UserDropdown;