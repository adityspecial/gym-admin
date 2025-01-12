import React from 'react';
import { Link } from 'react-router-dom';
import { Plus, Search, Calendar } from 'lucide-react';

const mockEvents = [
  {
    id: 1,
    title: 'Summer Fitness Challenge',
    date: '2024-06-15',
    time: '09:00 AM',
    type: 'Competition',
    capacity: 50,
    registered: 32,
  },
  {
    id: 2,
    title: 'Nutrition Workshop',
    date: '2024-06-20',
    time: '02:00 PM',
    type: 'Workshop',
    capacity: 30,
    registered: 25,
  },
];

const EventList = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
        <h1 className="text-2xl font-bold text-gray-800">Events</h1>
        <Link
          to="/events/add"
          className="w-full sm:w-auto bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center justify-center hover:bg-blue-600"
        >
          <Plus className="w-5 h-5 mr-2" />
          Add Event
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow-sm">
        <div className="p-4 sm:p-6 border-b border-gray-200">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Search events..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
              />
              <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
            </div>
            <div className="flex flex-col sm:flex-row gap-4 sm:w-auto w-full">
              <select className="w-full sm:w-40 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500">
                <option value="">All Types</option>
                <option value="competition">Competition</option>
                <option value="workshop">Workshop</option>
                <option value="seminar">Seminar</option>
              </select>
              <input
                type="date"
                className="w-full sm:w-40 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4 sm:p-6">
          {mockEvents.map((event) => (
            <div key={event.id} className="bg-gray-50 rounded-lg p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{event.title}</h3>
                  <div className="mt-2 space-y-1">
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="w-4 h-4 mr-2" />
                      {event.date} at {event.time}
                    </div>
                    <div className="text-sm text-gray-600">
                      <span className="font-medium">Type:</span> {event.type}
                    </div>
                  </div>
                </div>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">
                  {event.registered}/{event.capacity} Registered
                </span>
              </div>
              <div className="mt-4">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-500 h-2 rounded-full"
                    style={{ width: `${(event.registered / event.capacity) * 100}%` }}
                  ></div>
                </div>
              </div>
              <div className="mt-4 flex justify-end space-x-3">
                <button className="text-sm text-blue-600 hover:text-blue-800">Edit</button>
                <button className="text-sm text-red-600 hover:text-red-800">Cancel</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventList;