import React from 'react';
import { Megaphone, Mail, Users, TrendingUp } from 'lucide-react';
import PageHeader from '../components/common/PageHeader';

const mockCampaigns = [
  {
    id: 1,
    name: 'Spring Membership Drive',
    type: 'Email',
    status: 'Active',
    sent: 1250,
    opened: 865,
    converted: 125,
  },
  {
    id: 2,
    name: 'Personal Training Promotion',
    type: 'SMS',
    status: 'Scheduled',
    sent: 0,
    opened: 0,
    converted: 0,
  }
];

const Marketing = () => {
  return (
    <div className="space-y-6">
      <PageHeader 
        title="Marketing Campaigns"
        action={{
          label: "New Campaign",
          icon: Megaphone,
          onClick: () => console.log('New campaign')
        }}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Total Reach</h3>
            <Users className="w-6 h-6 text-blue-500" />
          </div>
          <p className="text-3xl font-bold">5,234</p>
          <p className="text-sm text-gray-500 mt-1">Members reached</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Engagement Rate</h3>
            <TrendingUp className="w-6 h-6 text-green-500" />
          </div>
          <p className="text-3xl font-bold">68%</p>
          <p className="text-sm text-gray-500 mt-1">Average open rate</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Conversion Rate</h3>
            <Mail className="w-6 h-6 text-purple-500" />
          </div>
          <p className="text-3xl font-bold">12%</p>
          <p className="text-sm text-gray-500 mt-1">Action taken</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold">Active Campaigns</h2>
        </div>

        <div className="p-6">
          <div className="space-y-6">
            {mockCampaigns.map((campaign) => (
              <div key={campaign.id} className="bg-gray-50 rounded-lg p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{campaign.name}</h3>
                    <p className="text-sm text-gray-600 mt-1">Type: {campaign.type}</p>
                  </div>
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                    campaign.status === 'Active' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {campaign.status}
                  </span>
                </div>

                <div className="mt-4 grid grid-cols-3 gap-4">
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-sm text-gray-500">Sent</p>
                    <p className="text-xl font-semibold">{campaign.sent}</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-sm text-gray-500">Opened</p>
                    <p className="text-xl font-semibold">{campaign.opened}</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-sm text-gray-500">Converted</p>
                    <p className="text-xl font-semibold">{campaign.converted}</p>
                  </div>
                </div>

                <div className="mt-4 flex justify-end space-x-3">
                  <button className="text-sm text-blue-600 hover:text-blue-800">Edit</button>
                  <button className="text-sm text-gray-600 hover:text-gray-800">Pause</button>
                  <button className="text-sm text-red-600 hover:text-red-800">Delete</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketing;