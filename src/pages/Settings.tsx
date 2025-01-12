import React from 'react';
import PageHeader from '../components/common/PageHeader';
import GymInformation from '../components/settings/GymInformation';
import NotificationSettings from '../components/settings/NotificationSettings';
import RegionalSettings from '../components/settings/RegionalSettings';
import BillingSettings from '../components/settings/BillingSettings';

const Settings = () => {
  return (
    <div className="space-y-6">
      <PageHeader title="Settings" />
      <GymInformation />
      <NotificationSettings />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <RegionalSettings />
        <BillingSettings />
      </div>
      <div className="flex justify-end space-x-4">
        <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
          Cancel
        </button>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default Settings;