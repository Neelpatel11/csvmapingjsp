import React, { useState } from 'react';
import { Box, Button, FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material';


const ColumnMapper = ({ csvData, headers, onSubmit }) => {
  const [mapping, setMapping] = useState({
    date: '',
    description: '',
    amount: '',
  });

  const handleMappingChange = (e, field) => {
    setMapping({ ...mapping, [field]: e.target.value });
  };

  const handleSubmit = () => {
    const mappedData = csvData.map(row => ({
      date: row[mapping.date],
      description: row[mapping.description],
      amount: row[mapping.amount],
    }));
    onSubmit(mappedData);
  };

  return (
    <Box className="column-mapper-container">
      <Typography variant="h6">Map Columns</Typography>
      <FormControl fullWidth margin="normal" className="column-mapper-form-control">
        <InputLabel>Date</InputLabel>
        <Select
          value={mapping.date}
          onChange={(e) => handleMappingChange(e, 'date')}
        >
          <MenuItem value=""><em>Select Column</em></MenuItem>
          {headers.map((header, index) => (
            <MenuItem key={index} value={header}>{header}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth margin="normal" className="column-mapper-form-control">
        <InputLabel>Description</InputLabel>
        <Select
          value={mapping.description}
          onChange={(e) => handleMappingChange(e, 'description')}
        >
          <MenuItem value=""><em>Select Column</em></MenuItem>
          {headers.map((header, index) => (
            <MenuItem key={index} value={header}>{header}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth margin="normal" className="column-mapper-form-control">
        <InputLabel>Amount</InputLabel>
        <Select
          value={mapping.amount}
          onChange={(e) => handleMappingChange(e, 'amount')}
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

export default ColumnMapper;