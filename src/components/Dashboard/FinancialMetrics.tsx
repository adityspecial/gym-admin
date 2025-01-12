import React from 'react';
import { DollarSign, TrendingUp, CreditCard, ShoppingBag } from 'lucide-react';
import StatsCard from './StatsCard';

const FinancialMetrics = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <StatsCard
        title="Monthly Revenue"
        value="$52,340"
        change={12.5}
        icon={DollarSign}
        color="bg-emerald-500"
      />
      <StatsCard
        title="Average Revenue"
        value="$42.50"
        change={5.2}
        icon={TrendingUp}
        color="bg-cyan-500"
      />
      <StatsCard
        title="Recurring Revenue"
        value="$38,290"
        change={8.7}
        icon={CreditCard}
        color="bg-indigo-500"
      />
      <StatsCard
        title="Product Sales"
        value="$12,430"
        change={15.8}
        icon={ShoppingBag}
        color="bg-orange-500"
      />
    </div>
  );
};

export default FinancialMetrics;