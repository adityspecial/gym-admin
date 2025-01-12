import React from 'react';
import { Bell } from 'lucide-react';

const NotificationBadge = () => {
  return (
    <button className="p-2 hover:bg-gray-100 rounded-full relative">
      <Bell className="w-6 h-6 text-gray-600" />
      <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
        3
      </span>
    </button>
  );
};

export default NotificationBadge;