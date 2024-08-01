import React, { useState } from 'react';
import Papa from 'papaparse';
import CSVModal from '../components/bankingDetails/CSVModal';
import UserDetailsModal from '../components/UserDetails/UserDetailsModal';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import './styles.css';

const CSVUploader = () => {
  const [csvData, setCsvData] = useState([]);
  const [headers, setHeaders] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [uploadType, setUploadType] = useState(null); 

  const handleFileUpload = (e, type) => {
    const file = e.target.files[0];
    Papa.parse(file, {
      header: true,
      complete: (result) => {
        setHeaders(Object.keys(result.data[0]));
        setCsvData(result.data);
        setUploadType(type);
        setOpenModal(true);
      },
      skipEmptyLines: true,
    });
  };

  const handleDrop = (e, type) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    handleFileUpload({ target: { files: [file] } }, type);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      <Box display="flex" justifyContent="space-between" alignItems="center" height="100vh" flexDirection={{ xs: 'column', md: 'row' }}>
        <Box
          className="dropzone"
          onDrop={(e) => handleDrop(e, 'transactions')}
          onDragOver={handleDragOver}
        >
          <Typography variant="h6" align="center">
            Upload Banking Transactions
          </Typography>
          <input
            accept=".csv"
            style={{ display: 'none' }}
            id="banking-transactions-file-input"
            type="file"
            onChange={(e) => handleFileUpload(e, 'transactions')}
          />
          <label htmlFor="banking-transactions-file-input">
            <Button variant="contained" component="span" className="upload-button">
              Upload CSV
            </Button>
          </label>
        </Box>
        <Box
          className="dropzone"
          onDrop={(e) => handleDrop(e, 'userDetails')}
          onDragOver={handleDragOver}
        >
          <Typography variant="h6" align="center">
            Upload User Details
          </Typography>
          <input
            accept=".csv"
            style={{ display: 'none' }}
            id="user-details-file-input"
            type="file"
            onChange={(e) => handleFileUpload(e, 'userDetails')}
          />
          <label htmlFor="user-details-file-input">
            <Button variant="contained" component="span" className="upload-button">
              Upload CSV
            </Button>
          </label>
        </Box>
      </Box>
      {openModal && uploadType === 'transactions' && (
        <CSVModal
          open={openModal}
          onClose={() => setOpenModal(false)}
          csvData={csvData}
          headers={headers}
        />
      )}
      {openModal && uploadType === 'userDetails' && (
        <UserDetailsModal
          open={openModal}
          onClose={() => setOpenModal(false)}
          csvData={csvData}
          headers={headers}
        />
      )}
    </Container>
  );
};

export default CSVUploader;
