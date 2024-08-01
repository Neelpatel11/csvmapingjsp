// src/context/TransactionContext.jsx
import React, { createContext, useState, useContext } from 'react';

const TransactionContext = createContext();

export const useTransaction = () => useContext(TransactionContext);

export const TransactionProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);

  return (
    <TransactionContext.Provider value={{ transactions, setTransactions }}>
      {children}
    </TransactionContext.Provider>
  );
};