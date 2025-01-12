import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MembersList from './MembersList';
import AddMember from './AddMember';
import MemberGoals from './MemberGoals';

const Members = () => {
  return (
    <Routes>
      <Route index element={<MembersList />} />
      <Route path="add" element={<AddMember />} />
      <Route path="goals" element={<MemberGoals />} />
    </Routes>
  );
};

export default Members;