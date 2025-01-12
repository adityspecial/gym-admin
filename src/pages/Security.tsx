import React from 'react';
import { Shield, Key, AlertTriangle, UserCheck } from 'lucide-react';
import PageHeader from '../components/common/PageHeader';

const mockSecurityLogs = [
  {
    id: 1,
    event: 'Failed Login Attempt',
    user: 'admin@example.com',
    ip: '192.168.1.1',
    location: 'New York, US',
    timestamp: '2024-03-15 14:30:00',
    severity: 'High'
  },
  {
    id: 2,
    event: 'Password Changed',
    user: 'john.doe@example.com',
    ip: '192.168.1.2',
    location: 'London, UK',
    timestamp: '2024-03-15 13:15:00',
    severity: 'Low'
  }
];

const Security = () => {
  return (
    <div className="space-y-6">
      <PageHeader title="Security Settings" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Security Score</h3>
            <Shield className="w-6 h-6 text-green-500" />
          </div>
          <p className="text-3xl font-bold">85%</p>
          <p className="text-sm text-gray-500 mt-1">System security rating</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Active Sessions</h3>
            <UserCheck className="w-6 h-6 text-blue-500" />
          </div>
          <p className="text-3xl font-bold">24</p>
          <p className="text-sm text-gray-500 mt-1">Currently logged in</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Security Alerts</h3>
            <AlertTriangle className="w-6 h-6 text-red-500" />
          </div>
          <p className="text-3xl font-bold">3</p>
          <p className="text-sm text-gray-500 mt-1">Require attention</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Security Settings</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <h3 className="font-medium">Two-Factor Authentication</h3>
                <p className="text-sm text-gray-500">Add an extra layer of security</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <h3 className="font-medium">Password Expiration</h3>
                <p className="text-sm text-gray-500">Require password change every 90 days</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" checked />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <h3 className="font-medium">Login Notifications</h3>
                <p className="text-sm text-gray-500">Get notified of new login attempts</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Recent Security Events</h2>
          <div className="space-y-4">
            {mockSecurityLogs.map((log) => (
              <div key={log.id} className="p-4 bg-gray-50 rounded-lg">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium flex items-center">
                      <Key className="w-4 h-4 mr-2" />
                      {log.event}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">User: {log.user}</p>
                    <div className="flex items-center text-xs text-gray-500 mt-1">
                      <span>{log.ip}</span>
                      <span className="mx-2">•</span>
                      <span>{log.location}</span>
                    </div>
                  </div>
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                    log.severity === 'High' ? 'bg-red-100 text-red-800' : 'bg-blue-100 text-blue-800'
                  }`}>
                    {log.severity}
                  </span>
                </div>
                <div className="mt-2 text-xs text-gray-500">
                  {log.timestamp}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Security;