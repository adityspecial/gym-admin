import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { MenuItem } from '../../types/navigation';

interface SidebarItemProps {
  item: MenuItem;
  onSelect?: () => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ item, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isActive = location.pathname === item.path;
  const hasSubItems = item.subItems && item.subItems.length > 0;

  const baseClasses = `
    flex items-center justify-between p-3 mb-1 rounded-lg 
    transition-colors w-full
    ${isActive ? 'bg-gray-800 text-white' : 'text-gray-300 hover:bg-gray-800 hover:text-white'}
  `;

  const handleClick = () => {
    if (hasSubItems) {
      setIsOpen(!isOpen);
    } else {
      onSelect?.();
    }
  };

  return (
    <div>
      {hasSubItems ? (
        <button onClick={handleClick} className={baseClasses}>
          <div className="flex items-center">
            <item.icon className="w-5 h-5 mr-3" />
            <span>{item.label}</span>
          </div>
          {isOpen ? (
            <ChevronDown className="w-4 h-4" />
          ) : (
            <ChevronRight className="w-4 h-4" />
          )}
        </button>
      ) : (
        <Link to={item.path} className={baseClasses} onClick={onSelect}>
          <div className="flex items-center">
            <item.icon className="w-5 h-5 mr-3" />
            <span>{item.label}</span>
          </div>
        </Link>
      )}

      {hasSubItems && isOpen && (
        <div className="ml-4 mt-1 space-y-1">
          {item.subItems?.map((subItem, index) => (
            <Link
              key={index}
              to={subItem.path}
              onClick={onSelect}
              className={`
                flex items-center p-2 rounded-lg text-sm
                ${location.pathname === subItem.path
                  ? 'bg-gray-800 text-white'
                  : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                }
              `}
            >
              <subItem.icon className="w-4 h-4 mr-2" />
              <span>{subItem.label}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SidebarItem;