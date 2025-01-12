import React from 'react';
import { Users } from 'lucide-react';

const PopularClasses = () => {
  const classes = [
    { name: 'HIIT Training', attendance: 95, capacity: 100, trainer: 'Mike Peters' },
    { name: 'Yoga Flow', attendance: 28, capacity: 30, trainer: 'Sarah Johnson' },
    { name: 'Spin Class', attendance: 22, capacity: 25, trainer: 'David Smith' },
    { name: 'CrossFit', attendance: 18, capacity: 20, trainer: 'Emma Wilson' },
  ];

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h2 className="text-lg font-semibold mb-4">Popular Classes</h2>
      <div className="space-y-4">
        {classes.map((cls, index) => (
          <div key={index} className="bg-gray-50 rounded-lg p-4">
            <div className="flex justify-between items-center mb-2">
              <div>
                <h3 className="font-medium text-gray-900">{cls.name}</h3>
                <p className="text-sm text-gray-500">Trainer: {cls.trainer}</p>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Users className="w-4 h-4 mr-1" />
                {cls.attendance}/{cls.capacity}
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-500 h-2 rounded-full"
                style={{ width: `${(cls.attendance / cls.capacity) * 100}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularClasses;