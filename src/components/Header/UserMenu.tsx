import React from 'react';
import { User } from 'lucide-react';

const UserMenu = () => {
  return (
    <div className="flex items-center space-x-2">
      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
        <User className="w-5 h-5 text-white" />
      </div>
      <span className="font-medium hidden sm:inline">Admin</span>
    </div>
  );
};

export default UserMenu;