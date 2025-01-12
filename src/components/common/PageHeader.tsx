import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, LucideIcon } from 'lucide-react';

interface PageHeaderProps {
  title: string;
  backLink?: string;
  action?: {
    label: string;
    icon: LucideIcon;
    onClick: () => void;
  };
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, backLink, action }) => {
  return (
    <div className="flex justify-between items-center mb-6">
      <div className="flex items-center gap-4">
        {backLink && (
          <Link to={backLink} className="text-gray-500 hover:text-gray-700">
            <ArrowLeft className="w-6 h-6" />
          </Link>
        )}
        <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
      </div>
      {action && (
        <button
          onClick={action.onClick}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center hover:bg-blue-600"
        >
          <action.icon className="w-5 h-5 mr-2" />
          {action.label}
        </button>
      )}
    </div>
  );
};

export default PageHeader;