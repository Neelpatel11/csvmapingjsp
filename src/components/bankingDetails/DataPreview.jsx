import React from 'react';

const DataPreview = ({ csvData, headers }) => {
  return (
    <div className="data-preview-container">
      <h2>Preview Data</h2>
      <table className="scrollable-tbody">
        <thead >
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody >
          {csvData.map((row, index) => (
            <tr key={index}>
              {headers.map((header, idx) => (
                <td key={idx}>{row[header]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataPreview;