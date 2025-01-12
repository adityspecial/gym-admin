import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Transactions from './Transactions';
import Subscriptions from './Subscriptions';
import Invoices from './Invoices';

const Payments = () => {
  return (
    <Routes>
      <Route index element={<Transactions />} />
      <Route path="subscriptions" element={<Subscriptions />} />
      <Route path="invoices" element={<Invoices />} />
    </Routes>
  );
};

export default Payments;