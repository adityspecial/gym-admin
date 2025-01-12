import React, { useState } from 'react';
import { MessageSquare, Star, Filter } from 'lucide-react';
import SearchBar from '../components/common/SearchBar';
import FilterSelect from '../components/common/FilterSelect';

const mockFeedback = [
  {
    id: 1,
    member: 'John Doe',
    type: 'Class',
    subject: 'Yoga Class Experience',
    rating: 5,
    message: 'Great instructor and amazing atmosphere!',
    date: '2024-03-15',
    status: 'New'
  },
  {
    id: 2,
    member: 'Jane Smith',
    type: 'Facility',
    subject: 'Equipment Maintenance',
    rating: 3,
    message: 'Some equipment needs maintenance.',
    date: '2024-03-14',
    status: 'In Progress'
  }
];

const Feedback = () => {
  const [search, setSearch] = useState('');
  const [filterType, setFilterType] = useState('');

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Member Feedback</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">New Feedback</h3>
            <MessageSquare className="w-6 h-6 text-blue-500" />
          </div>
          <p className="text-3xl font-bold">12</p>
          <p className="text-sm text-gray-500 mt-1">Awaiting response</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Average Rating</h3>
            <Star className="w-6 h-6 text-yellow-500" />
          </div>
          <p className="text-3xl font-bold">4.8</p>
          <p className="text-sm text-gray-500 mt-1">Out of 5 stars</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Response Rate</h3>
            <Filter className="w-6 h-6 text-green-500" />
          </div>
          <p className="text-3xl font-bold">95%</p>
          <p className="text-sm text-gray-500 mt-1">Within 24 hours</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm">
        <div className="p-6 border-b border-gray-200">
          <div className="flex gap-4">
            <SearchBar
              value={search}
              onChange={setSearch}
              placeholder="Search feedback..."
            />
            <FilterSelect
              options={[
                { value: '', label: 'All Types' },
                { value: 'class', label: 'Class' },
                { value: 'facility', label: 'Facility' },
                { value: 'trainer', label: 'Trainer' }
              ]}
              value={filterType}
              onChange={setFilterType}
            />
          </div>
        </div>

        <div className="p-6 space-y-4">
          {mockFeedback.map((item) => (
            <div key={item.id} className="bg-gray-50 rounded-lg p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{item.subject}</h3>
                  <p className="text-sm text-gray-600 mt-1">From: {item.member}</p>
                </div>
                <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                  item.status === 'New' ? 'bg-blue-100 text-blue-800' : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {item.status}
                </span>
              </div>
              <div className="mt-4">
                <p className="text-gray-600">{item.message}</p>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <div className="flex items-center">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      className={`w-4 h-4 ${
                        index < item.rating ? 'text-yellow-400' : 'text-gray-300'
                      }`}
                      fill="currentColor"
                    />
                  ))}
                </div>
                <div className="text-sm text-gray-500">{item.date}</div>
              </div>
              <div className="mt-4 flex justify-end space-x-3">
                <button className="text-sm text-blue-600 hover:text-blue-800">Reply</button>
                <button className="text-sm text-gray-600 hover:text-gray-800">Archive</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feedback;