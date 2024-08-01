import React, { useState } from 'react';
import { Box, Button, FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import './styles.css';

const UserColumnMapper = ({ csvData, headers, onSubmit }) => {
  const [mapping, setMapping] = useState({
    name: '',
    email: '',
    phoneNumber: '',
  });

  const handleMappingChange = (e, field) => {
    setMapping({ ...mapping, [field]: e.target.value });
  };

  const handleSubmit = () => {
    const mappedData = csvData.map(row => ({
      name: row[mapping.name],
      email: row[mapping.email],
      phoneNumber: row[mapping.phoneNumber],
    }));
    onSubmit(mappedData);
  };

  return (
    <Box className="column-mapper-container">
      <Typography variant="h6">Map Columns</Typography>
      <FormControl fullWidth margin="normal" className="column-mapper-form-control">
        <InputLabel>Name</InputLabel>
        <Select
          value={mapping.name}
          onChange={(e) => handleMappingChange(e, 'name')}
        >
          <MenuItem value=""><em>Select Column</em></MenuItem>
          {headers.map((header, index) => (
            <MenuItem key={index} value={header}>{header}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth margin="normal" className="column-mapper-form-control">
        <InputLabel>Email</InputLabel>
        <Select
          value={mapping.email}
          onChange={(e) => handleMappingChange(e, 'email')}
        >
          <MenuItem value=""><em>Select Column</em></MenuItem>
          {headers.map((header, index) => (
            <MenuItem key={index} value={header}>{header}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth margin="normal" className="column-mapper-form-control">
        <InputLabel>Phone Number</InputLabel>
        <Select
          value={mapping.phoneNumber}
          onChange={(e) => handleMappingChange(e, 'phoneNumber')}
        >
          <MenuItem value=""><em>Select Column</em></MenuItem>
          {headers.map((header, index) => (
            <MenuItem key={index} value={header}>{header}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        className="column-mapper-submit-btn"
      >
        Submit
      </Button>
    </Box>
  );
};

export default UserColumnMapper;
