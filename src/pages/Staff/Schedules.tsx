import React from 'react';
import { Calendar, Clock, Search } from 'lucide-react';

const mockSchedules = [
  {
    id: 1,
    trainer: 'Sarah Johnson',
    shift: 'Morning',
    startTime: '06:00 AM',
    endTime: '02:00 PM',
    status: 'On Duty',
  },
  {
    id: 2,
    trainer: 'Mike Peters',
    shift: 'Evening',
    startTime: '02:00 PM',
    endTime: '10:00 PM',
    status: 'Off Duty',
  },
];

const Schedules = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-2xl font-bold text-gray-800">Staff Schedules</h1>
        <button className="w-full sm:w-auto bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center justify-center hover:bg-blue-600">
          <Calendar className="w-5 h-5 mr-2" />
          Create Schedule
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Morning Shift</h3>
            <Clock className="w-6 h-6 text-blue-500" />
          </div>
          <p className="text-3xl font-bold">5</p>
          <p className="text-sm text-gray-500 mt-1">Staff members on duty</p>
        </div>

        <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Evening Shift</h3>
            <Clock className="w-6 h-6 text-purple-500" />
          </div>
          <p className="text-3xl font-bold">4</p>
          <p className="text-sm text-gray-500 mt-1">Staff members on duty</p>
        </div>

        <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Total Hours</h3>
            <Clock className="w-6 h-6 text-green-500" />
          </div>
          <p className="text-3xl font-bold">160</p>
          <p className="text-sm text-gray-500 mt-1">Scheduled this week</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm">
        <div className="p-4 sm:p-6 border-b border-gray-200">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Search staff..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
              />
              <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
            </div>
            <div className="flex flex-col sm:flex-row gap-4 sm:w-auto w-full">
              <select className="w-full sm:w-40 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500">
                <option value="">All Shifts</option>
                <option value="morning">Morning</option>
                <option value="evening">Evening</option>
              </select>
              <input
                type="date"
                className="w-full sm:w-40 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <div className="min-w-full p-4 sm:p-6">
            <div className="grid grid-cols-1 gap-4">
              {/* Mobile View */}
              <div className="sm:hidden space-y-4">
                {mockSchedules.map((schedule) => (
                  <div key={schedule.id} className="bg-gray-50 rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="text-sm font-medium text-gray-900">{schedule.trainer}</div>
                        <div className="mt-1">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            schedule.shift === 'Morning'
                              ? 'bg-blue-100 text-blue-800'
                              : 'bg-purple-100 text-purple-800'
                          }`}>
                            {schedule.shift}
                          </span>
                        </div>
                      </div>
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        schedule.status === 'On Duty'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {schedule.status}
                      </span>
                    </div>
                    <div className="mt-2 text-sm text-gray-500">
                      <p>Start: {schedule.startTime}</p>
                      <p>End: {schedule.endTime}</p>
                    </div>
                    <div className="mt-3 flex justify-end space-x-3">
                      <button className="text-sm text-blue-600 hover:text-blue-900">Edit</button>
                      <button className="text-sm text-red-600 hover:text-red-900">Delete</button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Desktop View */}
              <div className="hidden sm:block">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Staff Member
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Shift
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Start Time
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        End Time
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {mockSchedules.map((schedule) => (
                      <tr key={schedule.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{schedule.trainer}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            schedule.shift === 'Morning'
                              ? 'bg-blue-100 text-blue-800'
                              : 'bg-purple-100 text-purple-800'
                          }`}>
                            {schedule.shift}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {schedule.startTime}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {schedule.endTime}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            schedule.status === 'On Duty'
                              ? 'bg-green-100 text-green-800'
                              : 'bg-gray-100 text-gray-800'
                          }`}>
                            {schedule.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <button className="text-blue-600 hover:text-blue-900 mr-3">Edit</button>
                          <button className="text-red-600 hover:text-red-900">Delete</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedules;