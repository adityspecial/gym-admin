import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/navigation/Sidebar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Members from './pages/Members';
import Staff from './pages/Staff';
import Classes from './pages/Classes';
import Products from './pages/Products';
import Payments from './pages/Payments';
import Reports from './pages/Reports';
import Feedback from './pages/Feedback';
import Events from './pages/Events';
import Equipment from './pages/Equipment';
import Security from './pages/Security';
import Referrals from './pages/Referrals';
import Marketing from './pages/Marketing';
import Settings from './pages/Settings';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-gray-100">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden lg:pl-0 pl-0">
          <Header />
          <main className="flex-1 overflow-y-auto p-6 pt-20 lg:pt-6">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/members/*" element={<Members />} />
              <Route path="/staff/*" element={<Staff />} />
              <Route path="/classes/*" element={<Classes />} />
              <Route path="/products/*" element={<Products />} />
              <Route path="/payments/*" element={<Payments />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/feedback" element={<Feedback />} />
              <Route path="/events/*" element={<Events />} />
              <Route path="/equipment/*" element={<Equipment />} />
              <Route path="/security" element={<Security />} />
              <Route path="/referrals" element={<Referrals />} />
              <Route path="/marketing" element={<Marketing />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;