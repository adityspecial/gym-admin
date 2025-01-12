import React from 'react';
import { Routes, Route } from 'react-router-dom';
import StaffList from './StaffList';
import Trainers from './Trainers';
import Schedules from './Schedules';

const Staff = () => {
  return (
    <Routes>
      <Route index element={<StaffList />} />
      <Route path="trainers" element={<Trainers />} />
      <Route path="schedules" element={<Schedules />} />
    </Routes>
  );
};

export default Staff;