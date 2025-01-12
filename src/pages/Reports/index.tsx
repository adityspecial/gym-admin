import React from 'react';
import { BarChart2, TrendingUp, Users, DollarSign } from 'lucide-react';

const Reports = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Reports</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Member Analytics</h3>
            <Users className="w-6 h-6 text-blue-500" />
          </div>
          <p className="text-sm text-gray-600">Track membership trends, retention rates, and demographics</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Financial Reports</h3>
            <DollarSign className="w-6 h-6 text-green-500" />
          </div>
          <p className="text-sm text-gray-600">View revenue, expenses, and financial forecasts</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Class Performance</h3>
            <BarChart2 className="w-6 h-6 text-purple-500" />
          </div>
          <p className="text-sm text-gray-600">Analyze class attendance and instructor performance</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Equipment Usage</h3>
            <TrendingUp className="w-6 h-6 text-orange-500" />
          </div>
          <p className="text-sm text-gray-600">Monitor equipment utilization and maintenance needs</p>
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h2 className="text-lg font-semibold mb-4">Recent Reports</h2>
        <div className="space-y-4">
          {[
            { title: 'Monthly Revenue Report - March 2024', date: '2024-03-15' },
            { title: 'Member Retention Analysis Q1 2024', date: '2024-03-10' },
            { title: 'Class Attendance Summary', date: '2024-03-05' },
          ].map((report, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
            >
              <div>
                <h3 className="text-sm font-medium text-gray-900">{report.title}</h3>
                <p className="text-xs text-gray-500 mt-1">Generated on {report.date}</p>
              </div>
              <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                Download
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reports;