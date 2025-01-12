import React from 'react';
import MembershipStats from '../components/Dashboard/MembershipStats';
import FinancialMetrics from '../components/Dashboard/FinancialMetrics';
import ClassMetrics from '../components/Dashboard/ClassMetrics';
import ActivityLog from '../components/Dashboard/ActivityLog';
import PopularClasses from '../components/Dashboard/PopularClasses';

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <p className="text-gray-600">Welcome back! Here's what's happening at your gym.</p>
      </div>

      <MembershipStats />
      <FinancialMetrics />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ClassMetrics />
        <PopularClasses />
      </div>

      <ActivityLog />
    </div>
  );
};

export default Dashboard;