import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Modal, Grid, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import UserDetailsPreview from './UserDetailsPreview';
import UserColumnMapper from './UserColumnMapper';
import { useUser } from '../../context/UserContext';

const UserDetailsModal = ({ open, onClose, csvData, headers }) => {
  const { setUsers } = useUser();
  const navigate = useNavigate();

  const handleSubmit = (mappedData) => {
    setUsers(mappedData);
    onClose();
    navigate('/user-details');
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="user-details-modal-title"
      aria-describedby="user-details-modal-description"
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
        <Typography id="user-details-modal-title" variant="h6" component="h2" className="modal-title">
          Import and Map CSV Columns for User Details
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <UserDetailsPreview csvData={csvData} headers={headers} />
          </Grid>
          <Grid item xs={6}>
            <UserColumnMapper csvData={csvData} headers={headers} onSubmit={handleSubmit} />
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
};

export default UserDetailsModal;
