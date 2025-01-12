import React from 'react';
import { Users, UserPlus, UserMinus, Percent } from 'lucide-react';
import StatsCard from './StatsCard';

const MembershipStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <StatsCard
        title="Total Members"
        value="1,234"
        change={8.2}
        icon={Users}
        color="bg-blue-500"
      />
      <StatsCard
        title="New Members"
        value="126"
        change={12.5}
        icon={UserPlus}
        color="bg-green-500"
      />
      <StatsCard
        title="Cancellations"
        value="24"
        change={-2.4}
        icon={UserMinus}
        color="bg-red-500"
      />
      <StatsCard
        title="Retention Rate"
        value="95%"
        change={3.8}
        icon={Percent}
        color="bg-purple-500"
      />
    </div>
  );
};

export default MembershipStats;