import React from 'react';
import { Search, Star } from 'lucide-react';

const mockTrainers = [
  {
    id: 1,
    name: 'Sarah Johnson',
    specialization: 'Yoga, Pilates',
    experience: '5 years',
    rating: 4.8,
    clients: 15,
    availability: 'Available',
  },
  {
    id: 2,
    name: 'Mike Peters',
    specialization: 'Strength Training, HIIT',
    experience: '8 years',
    rating: 4.9,
    clients: 20,
    availability: 'Fully Booked',
  },
];

const Trainers = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Trainers</h1>

      <div className="bg-white rounded-xl shadow-sm">
        <div className="p-4 sm:p-6 border-b border-gray-200">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Search trainers..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
              />
              <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
            </div>
            <div className="flex flex-col sm:flex-row gap-4 sm:w-auto w-full">
              <select className="w-full sm:w-40 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500">
                <option value="">All Specializations</option>
                <option value="yoga">Yoga</option>
                <option value="strength">Strength Training</option>
                <option value="cardio">Cardio</option>
              </select>
              <select className="w-full sm:w-40 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500">
                <option value="">Availability</option>
                <option value="available">Available</option>
                <option value="booked">Fully Booked</option>
              </select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4 sm:p-6">
          {mockTrainers.map((trainer) => (
            <div key={trainer.id} className="bg-gray-50 rounded-lg p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{trainer.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">{trainer.specialization}</p>
                </div>
                <span
                  className={`px-3 py-1 text-xs font-semibold rounded-full ${
                    trainer.availability === 'Available'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800'
                  }`}
                >
                  {trainer.availability}
                </span>
              </div>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="font-medium mr-2">Experience:</span>
                    {trainer.experience}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="font-medium mr-2">Active Clients:</span>
                    {trainer.clients}
                  </div>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="font-medium mr-2">Rating:</span>
                  <div className="flex items-center">
                    {trainer.rating}
                    <Star className="w-4 h-4 text-yellow-400 ml-1" />
                  </div>
                </div>
              </div>
              <div className="mt-4 flex flex-col sm:flex-row justify-end gap-3">
                <button className="w-full sm:w-auto text-center sm:text-left text-sm text-blue-600 hover:text-blue-800">
                  View Profile
                </button>
                <button className="w-full sm:w-auto text-center sm:text-left text-sm text-blue-600 hover:text-blue-800">
                  Schedule
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trainers;