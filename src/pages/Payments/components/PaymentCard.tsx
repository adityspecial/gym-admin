import React from 'react';
import { CreditCard } from 'lucide-react';

interface PaymentCardProps {
  title: string;
  amount: string;
  change: number;
  icon?: React.ReactNode;
}

const PaymentCard: React.FC<PaymentCardProps> = ({ 
  title, 
  amount, 
  change, 
  icon = <CreditCard className="w-6 h-6 text-white" />
}) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500 mb-1">{title}</p>
          <h3 className="text-2xl font-bold">{amount}</h3>
        </div>
        <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center">
          {icon}
        </div>
      </div>
      <div className="mt-4">
        <span className={`text-sm ${change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
          {change >= 0 ? '+' : ''}{change}%
        </span>
        <span className="text-sm text-gray-500 ml-1">vs last month</span>
      </div>
    </div>
  );
};

export default PaymentCard;