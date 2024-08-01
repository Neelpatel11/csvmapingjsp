import React from 'react';
import { useTransaction } from '../../context/TransactionContext';
import Papa from 'papaparse';

const TransactionPage = () => {
  const { transactions } = useTransaction();

  const downloadCSV = () => {
    const csvData = Papa.unparse(transactions);
    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.setAttribute('download', 'banking_transactions.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Banking Transactions</h2>
      {transactions.length > 0 ? (
        <div>
          <div className="scrollable-tbody">
            <table border="1" cellPadding="10" cellSpacing="0" style={{ width: '100%' }}>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Description</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction, index) => (
                  <tr key={index}>
                    <td>{transaction.date}</td>
                    <td>{transaction.description}</td>
                    <td>{transaction.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <br />
          <button onClick={downloadCSV} style={{ padding: '10px 20px', cursor: 'pointer' }}>
            Download as CSV
          </button>
        </div>
      ) : (
        <p>No transactions available.</p>
      )}
    </div>
  );
};

export default TransactionPage;
