import React from 'react';
import {
  LayoutDashboard,
  Users,
  UserCog,
  Calendar,
  Package,
  CreditCard,
  BarChart2,
  MessageSquare,
  CalendarClock,
  Dumbbell,
  Shield,
  Users2,
  Megaphone
} from 'lucide-react';

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard' },
  { icon: Users, label: 'Members' },
  { icon: UserCog, label: 'Staff' },
  { icon: Calendar, label: 'Classes' },
  { icon: Package, label: 'Products' },
  { icon: CreditCard, label: 'Payments' },
  { icon: BarChart2, label: 'Reports' },
  { icon: MessageSquare, label: 'Feedback' },
  { icon: CalendarClock, label: 'Events' },
  { icon: Dumbbell, label: 'Equipment' },
  { icon: Shield, label: 'Security' },
  { icon: Users2, label: 'Referrals' },
  { icon: Megaphone, label: 'Marketing' }
];

const Sidebar = () => {
  return (
    <div className="bg-gray-900 text-white w-64 min-h-screen p-4">
      <div className="flex items-center mb-8">
        <Dumbbell className="w-8 h-8 text-blue-500" />
        <h1 className="text-xl font-bold ml-2">FitAdmin Pro</h1>
      </div>
      <nav>
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center p-3 mb-2 rounded-lg hover:bg-gray-800 cursor-pointer transition-colors"
          >
            <item.icon className="w-5 h-5 mr-3 text-gray-400" />
            <span>{item.label}</span>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;