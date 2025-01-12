import React, { useState } from 'react';
import { Dumbbell, Menu, X } from 'lucide-react';
import { navigationConfig } from '../../config/navigation';
import SidebarItem from './SidebarItem';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Mobile Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-30 lg:hidden bg-gray-900 text-white p-2 rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600"
        aria-label="Toggle Menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Sidebar */}
      <div className={`
        fixed top-0 left-0 h-screen bg-gray-900 text-white w-72
        transition-transform duration-300 ease-in-out z-30
        lg:relative lg:translate-x-0 flex flex-col
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        {/* Header - Fixed */}
        <div className="p-4">
          <div className="flex items-center mb-8">
            <Dumbbell className="w-8 h-8 text-blue-500" />
            <h1 className="text-xl font-bold ml-2">FitAdmin Pro</h1>
          </div>
        </div>

        {/* Navigation - Scrollable */}
        <nav className="flex-1 overflow-y-auto px-4 pb-4">
          <div className="space-y-6">
            {navigationConfig.map((section, index) => (
              <div key={index}>
                <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                  {section.title}
                </h2>
                <div className="space-y-1">
                  {section.items.map((item, itemIndex) => (
                    <SidebarItem 
                      key={itemIndex} 
                      item={item} 
                      onSelect={() => {
                        if (window.innerWidth < 1024) {
                          setIsOpen(false);
                        }
                      }}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;