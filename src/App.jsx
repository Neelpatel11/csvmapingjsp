import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CSVUploader from './components/csvupload';
import TransactionPage from './components/bankingDetails/TransactionPage';
import { TransactionProvider } from './context/TransactionContext';
import { UserProvider } from './context/UserContext';
import UserDetailsPage from './components/UserDetails/UserDetailsPage';
import "./App.css"

const App = () => {
  return (
    <TransactionProvider>
      <UserProvider>
        <Router>
          <Routes>
            <Route path="/" element={<CSVUploader />} />
            <Route path="/transactions" element={<TransactionPage />} />
            <Route path="/user-details" element={<UserDetailsPage />} />
          </Routes>
        </Router>
      </UserProvider>
    </TransactionProvider>
  );
};

export default App;