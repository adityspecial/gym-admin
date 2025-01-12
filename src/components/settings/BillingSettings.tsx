import React from 'react';
import { CreditCard } from 'lucide-react';

const BillingSettings = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <CreditCard className="w-6 h-6 text-gray-400" />
          <h2 className="text-lg font-semibold">Billing Settings</h2>
        </div>
      </div>
      <div className="p-6 space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Payment Method</label>
          <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
            <option>Credit Card</option>
            <option>Bank Transfer</option>
            <option>PayPal</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Billing Cycle</label>
          <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
            <option>Monthly</option>
            <option>Quarterly</option>
            <option>Annually</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default BillingSettings;