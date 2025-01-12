import React from 'react';
import { Plus, Search, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const mockClasses = [
  {
    id: 1,
    name: 'Yoga Flow',
    instructor: 'Sarah Johnson',
    time: '09:00 AM',
    duration: '60 min',
    capacity: 20,
    enrolled: 15,
  },
  {
    id: 2,
    name: 'HIIT Training',
    instructor: 'Mike Peters',
    time: '10:30 AM',
    duration: '45 min',
    capacity: 15,
    enrolled: 12,
  },
];

const ClassSchedule = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Class Schedule</h1>
        <Link
          to="/classes/add"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center hover:bg-blue-600"
        >
          <Plus className="w-5 h-5 mr-2" />
          Add Class
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow-sm">
        <div className="p-6 border-b border-gray-200">
          <div className="flex gap-4">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Search classes..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
              />
              <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
            </div>
            <input
              type="date"
              className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mockClasses.map((classItem) => (
              <div key={classItem.id} className="bg-gray-50 rounded-lg p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{classItem.name}</h3>
                    <p className="text-sm text-gray-600 mt-1">Instructor: {classItem.instructor}</p>
                  </div>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">
                    {classItem.enrolled}/{classItem.capacity} Enrolled
                  </span>
                </div>
                <div className="mt-4 flex items-center text-sm text-gray-600">
                  <Calendar className="w-4 h-4 mr-2" />
                  {classItem.time} • {classItem.duration}
                </div>
                <div className="mt-4">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-500 h-2 rounded-full"
                      style={{ width: `${(classItem.enrolled / classItem.capacity) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassSchedule;