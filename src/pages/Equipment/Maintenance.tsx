import React from 'react';
import { Calendar, Wrench, AlertTriangle } from 'lucide-react';

const mockMaintenanceSchedule = [
  {
    id: 1,
    equipment: 'Treadmill #1',
    type: 'Routine',
    date: '2024-03-20',
    technician: 'John Smith',
    status: 'Scheduled',
  },
  {
    id: 2,
    equipment: 'Rowing Machine #3',
    type: 'Repair',
    date: '2024-03-18',
    technician: 'Mike Johnson',
    status: 'In Progress',
  },
];

const Maintenance = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
        <h1 className="text-2xl font-bold text-gray-800">Maintenance Schedule</h1>
        <button className="w-full sm:w-auto bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center justify-center hover:bg-blue-600">
          <Wrench className="w-5 h-5 mr-2" />
          Schedule Maintenance
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Scheduled</h3>
            <Calendar className="w-6 h-6 text-blue-500" />
          </div>
          <p className="text-3xl font-bold">8</p>
          <p className="text-sm text-gray-500 mt-1">Upcoming maintenance tasks</p>
        </div>

        <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">In Progress</h3>
            <Wrench className="w-6 h-6 text-yellow-500" />
          </div>
          <p className="text-3xl font-bold">3</p>
          <p className="text-sm text-gray-500 mt-1">Currently being serviced</p>
        </div>

        <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Urgent</h3>
            <AlertTriangle className="w-6 h-6 text-red-500" />
          </div>
          <p className="text-3xl font-bold">2</p>
          <p className="text-sm text-gray-500 mt-1">Require immediate attention</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm">
        <div className="p-4 sm:p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold">Maintenance Schedule</h2>
        </div>

        <div className="p-4 sm:p-6">
          <div className="grid grid-cols-1 gap-4">
            {mockMaintenanceSchedule.map((task) => (
              <div key={task.id} className="bg-gray-50 rounded-lg p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
                  <div>
                    <h3 className="font-medium text-gray-900">{task.equipment}</h3>
                    <div className="mt-2 space-y-1">
                      <p className="text-sm text-gray-600">Technician: {task.technician}</p>
                      <p className="text-sm text-gray-600">Date: {task.date}</p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
                    <span
                      className={`px-2 py-1 text-xs font-semibold rounded-full ${
                        task.type === 'Routine'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {task.type}
                    </span>
                    <span
                      className={`px-2 py-1 text-xs font-semibold rounded-full ${
                        task.status === 'Scheduled'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {task.status}
                    </span>
                  </div>
                </div>
                <div className="mt-4 flex justify-end space-x-3">
                  <button className="text-sm text-blue-600 hover:text-blue-900">Edit</button>
                  <button className="text-sm text-red-600 hover:text-red-900">Cancel</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maintenance;