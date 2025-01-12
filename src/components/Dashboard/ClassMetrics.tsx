import React from 'react';
import { Calendar, Users, Clock, Award } from 'lucide-react';

const ClassMetrics = () => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h2 className="text-lg font-semibold mb-4">Class Performance</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <Calendar className="w-5 h-5 text-blue-500" />
            <span className="text-sm text-gray-500">Classes</span>
          </div>
          <p className="text-2xl font-bold">248</p>
          <p className="text-xs text-gray-500">This month</p>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <Users className="w-5 h-5 text-green-500" />
            <span className="text-sm text-gray-500">Attendance</span>
          </div>
          <p className="text-2xl font-bold">85%</p>
          <p className="text-xs text-gray-500">Average rate</p>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <Clock className="w-5 h-5 text-purple-500" />
            <span className="text-sm text-gray-500">Duration</span>
          </div>
          <p className="text-2xl font-bold">45m</p>
          <p className="text-xs text-gray-500">Average length</p>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <Award className="w-5 h-5 text-yellow-500" />
            <span className="text-sm text-gray-500">Rating</span>
          </div>
          <p className="text-2xl font-bold">4.8</p>
          <p className="text-xs text-gray-500">Average score</p>
        </div>
      </div>
    </div>
  );
};

export default ClassMetrics;