import React from 'react';
import { Globe } from 'lucide-react';

const RegionalSettings = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <Globe className="w-6 h-6 text-gray-400" />
          <h2 className="text-lg font-semibold">Regional Settings</h2>
        </div>
      </div>
      <div className="p-6 space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Time Zone</label>
          <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
            <option>Eastern Time (ET)</option>
            <option>Pacific Time (PT)</option>
            <option>Central Time (CT)</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Date Format</label>
          <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
            <option>MM/DD/YYYY</option>
            <option>DD/MM/YYYY</option>
            <option>YYYY-MM-DD</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Currency</label>
          <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
            <option>USD ($)</option>
            <option>EUR (€)</option>
            <option>GBP (£)</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default RegionalSettings;