import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import Profile from './components/Profile';
import Account from './components/Account';

const App = () => (
  <Router>
    <div className="d-flex">
      <Header />
      <Sidebar />
      <div className="flex-grow-1">
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </div>
    </div>
  </Router>
);

export default App;
