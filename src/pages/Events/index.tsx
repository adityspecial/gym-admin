import React from 'react';
import { Routes, Route } from 'react-router-dom';
import EventList from './EventList';
import AddEvent from './AddEvent';

const Events = () => {
  return (
    <Routes>
      <Route index element={<EventList />} />
      <Route path="add" element={<AddEvent />} />
    </Routes>
  );
};

export default Events;