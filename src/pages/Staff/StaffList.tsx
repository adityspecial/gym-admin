import React from 'react';
import { Plus, Search } from 'lucide-react';

const mockStaff = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Trainer',
    department: 'Fitness',
    status: 'Active',
    joinDate: '2023-06-15',
  },
  {
    id: 2,
    name: 'Mike Peters',
    role: 'Manager',
    department: 'Operations',
    status: 'Active',
    joinDate: '2023-01-10',
  },
];

const StaffList = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-2xl font-bold text-gray-800">Staff</h1>
        <button className="w-full sm:w-auto bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center justify-center hover:bg-blue-600">
          <Plus className="w-5 h-5 mr-2" />
          Add Staff Member
        </button>
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
                <option value="">All Roles</option>
                <option value="trainer">Trainer</option>
                <option value="manager">Manager</option>
                <option value="receptionist">Receptionist</option>
              </select>
              <select className="w-full sm:w-40 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500">
                <option value="">All Departments</option>
                <option value="fitness">Fitness</option>
                <option value="operations">Operations</option>
                <option value="sales">Sales</option>
              </select>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <div className="min-w-full p-4 sm:p-6">
            <div className="grid grid-cols-1 gap-4">
              {/* Mobile View */}
              <div className="sm:hidden space-y-4">
                {mockStaff.map((staff) => (
                  <div key={staff.id} className="bg-gray-50 rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="text-sm font-medium text-gray-900">{staff.name}</div>
                        <div className="mt-1">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                            {staff.role}
                          </span>
                        </div>
                      </div>
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        {staff.status}
                      </span>
                    </div>
                    <div className="mt-2 text-sm text-gray-500">
                      <p>Department: {staff.department}</p>
                      <p>Join Date: {staff.joinDate}</p>
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
                        Name
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Role
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Department
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Join Date
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {mockStaff.map((staff) => (
                      <tr key={staff.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{staff.name}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                            {staff.role}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {staff.department}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            {staff.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {staff.joinDate}
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

export default StaffList;