import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ClassSchedule from './ClassSchedule';
import AddClass from './AddClass';
import Attendance from './Attendance';

const Classes = () => {
  return (
    <Routes>
      <Route index element={<ClassSchedule />} />
      <Route path="add" element={<AddClass />} />
      <Route path="attendance" element={<Attendance />} />
    </Routes>
  );
};

export default Classes;