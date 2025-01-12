import React from 'react';
import { Routes, Route } from 'react-router-dom';
import EquipmentList from './EquipmentList';
import Maintenance from './Maintenance';

const Equipment = () => {
  return (
    <Routes>
      <Route index element={<EquipmentList />} />
      <Route path="maintenance" element={<Maintenance />} />
    </Routes>
  );
};

export default Equipment;