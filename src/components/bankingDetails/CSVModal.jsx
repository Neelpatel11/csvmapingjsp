import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Modal, Grid, Button, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import DataPreview from './DataPreview';
import ColumnMapper from './ColumnMapper';
import { useTransaction } from '../../context/TransactionContext';


const CSVModal = ({ open, onClose, csvData, headers }) => {
  const { setTransactions } = useTransaction();
  const navigate = useNavigate();

  const handleSubmit = (mappedData) => {
    setTransactions(mappedData);
    onClose();
    navigate('/transactions');
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="csv-modal-title"
      aria-describedby="csv-modal-description"
    >
      <Box className="modal-content">
        <IconButton
          className="close-icon"
          aria-label="close"
          onClick={onClose}
          sx={{ position: 'absolute', right: 8, top: 8 , color : "white"}}
        >
          <CloseIcon />
        </IconButton>
        <Typography id="csv-modal-title" variant="h6" component="h2" className="modal-title">
          Import and Map CSV Columns
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <DataPreview csvData={csvData} headers={headers} />
          </Grid>
          <Grid item xs={6}>
            <ColumnMapper csvData={csvData} headers={headers} onSubmit={handleSubmit} />
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
};

export default CSVModal;
