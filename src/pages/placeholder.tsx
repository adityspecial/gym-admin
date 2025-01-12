import React from 'react';
import { useLocation } from 'react-router-dom';

const PlaceholderPage = () => {
  const location = useLocation();
  const pageName = location.pathname.split('/').pop()?.charAt(0).toUpperCase() + 
                   location.pathname.split('/').pop()?.slice(1);

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">{pageName} Page</h1>
      <p className="text-gray-600">This page is under construction</p>
    </div>
  );
};

export default PlaceholderPage;