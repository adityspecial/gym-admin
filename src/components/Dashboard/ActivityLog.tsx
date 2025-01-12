import React from 'react';
import { format } from 'date-fns';

const activities = [
  {
    id: 1,
    type: 'new_member',
    description: 'Sarah Johnson joined as a premium member',
    time: new Date(2024, 2, 15, 14, 30),
  },
  {
    id: 2,
    type: 'class_booking',
    description: 'Yoga class at 6 PM is fully booked',
    time: new Date(2024, 2, 15, 13, 15),
  },
  {
    id: 3,
    type: 'payment',
    description: 'Monthly subscription payment received from Mike Peters',
    time: new Date(2024, 2, 15, 12, 45),
  },
  {
    id: 4,
    type: 'trainer',
    description: 'New trainer David Smith added to the system',
    time: new Date(2024, 2, 15, 11, 20),
  },
];

const ActivityLog = () => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start space-x-3">
            <div className="w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
            <div>
              <p className="text-sm text-gray-600">{activity.description}</p>
              <p className="text-xs text-gray-400 mt-1">
                {format(activity.time, 'MMM d, h:mm a')}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityLog;