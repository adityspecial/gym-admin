import React from 'react';
import { BarChart, CheckCircle, Target } from 'lucide-react';

const mockGoals = [
  {
    id: 1,
    member: 'John Doe',
    currentWeight: 85,
    targetWeight: 75,
    progress: 60,
    deadline: '2024-06-30',
  },
  {
    id: 2,
    member: 'Jane Smith',
    currentWeight: 65,
    targetWeight: 60,
    progress: 40,
    deadline: '2024-05-15',
  },
];

const MemberGoals = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Member Goals</h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center hover:bg-blue-600">
          <Target className="w-5 h-5 mr-2" />
          Set New Goal
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Active Goals</h3>
            <Target className="w-6 h-6 text-blue-500" />
          </div>
          <p className="text-3xl font-bold">24</p>
          <p className="text-sm text-gray-500 mt-1">Currently tracking</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Completed</h3>
            <CheckCircle className="w-6 h-6 text-green-500" />
          </div>
          <p className="text-3xl font-bold">18</p>
          <p className="text-sm text-gray-500 mt-1">This month</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Success Rate</h3>
            <BarChart className="w-6 h-6 text-purple-500" />
          </div>
          <p className="text-3xl font-bold">75%</p>
          <p className="text-sm text-gray-500 mt-1">Average completion</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold">Current Goals</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Member
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Current Weight
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Target Weight
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Progress
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Deadline
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {mockGoals.map((goal) => (
                <tr key={goal.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{goal.member}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {goal.currentWeight} kg
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {goal.targetWeight} kg
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-blue-500 h-2.5 rounded-full"
                        style={{ width: `${goal.progress}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-500 mt-1">{goal.progress}%</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {goal.deadline}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MemberGoals;