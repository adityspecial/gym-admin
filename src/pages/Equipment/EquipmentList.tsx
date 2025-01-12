import React from 'react';
import { Plus, Search, AlertTriangle } from 'lucide-react';

const mockEquipment = [
  {
    id: 1,
    name: 'Treadmill',
    brand: 'Life Fitness',
    status: 'Operational',
    lastMaintenance: '2024-02-15',
    nextMaintenance: '2024-03-15',
  },
  {
    id: 2,
    name: 'Rowing Machine',
    brand: 'Concept2',
    status: 'Maintenance Required',
    lastMaintenance: '2024-01-20',
    nextMaintenance: '2024-02-20',
  },
];

const EquipmentList = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
        <h1 className="text-2xl font-bold text-gray-800">Equipment</h1>
        <button className="w-full sm:w-auto bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center justify-center hover:bg-blue-600">
          <Plus className="w-5 h-5 mr-2" />
          Add Equipment
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm">
        <div className="p-4 sm:p-6 border-b border-gray-200">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Search equipment..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
              />
              <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
            </div>
            <select className="w-full sm:w-40 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500">
              <option value="">All Status</option>
              <option value="operational">Operational</option>
              <option value="maintenance">Maintenance Required</option>
              <option value="repair">Under Repair</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <div className="min-w-full p-4 sm:p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {mockEquipment.map((item) => (
                <div key={item.id} className="bg-gray-50 rounded-lg p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                      <p className="text-sm text-gray-600 mt-1">Brand: {item.brand}</p>
                    </div>
                    <span
                      className={`px-2 py-1 text-xs font-semibold rounded-full ${
                        item.status === 'Operational'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="flex flex-col sm:flex-row justify-between text-sm text-gray-600">
                      <span>Last Maintenance: {item.lastMaintenance}</span>
                      <span>Next Maintenance: {item.nextMaintenance}</span>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-end space-x-3">
                    <button className="text-sm text-blue-600 hover:text-blue-900">Edit</button>
                    <button className="text-sm text-yellow-600 hover:text-yellow-900">
                      <AlertTriangle className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EquipmentList;