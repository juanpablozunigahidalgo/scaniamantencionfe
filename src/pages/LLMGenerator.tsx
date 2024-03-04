import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import './llmstyles.css'; // Import CSS file




const LLMGenerator: React.FC = () => {
  const [phrase, setPhrase] = useState('');
  const [mechanicalAdvice, setMechanicalAdvice] = useState('');
  const [open, setOpen] = useState(false); // State for dialog visibility

  const generateAdvice = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/getAdvice', { prompt: phrase });
      setMechanicalAdvice(response.data);
      setOpen(true); // Open the dialog when advice is received
    } catch (error) {
      console.error('Error generating advice:', error);
      setMechanicalAdvice('Please come with a mechanical issue of your machine');
    }
  };

  const handleClose = () => {
    setOpen(false); // Close the dialog
  };

  return (
    <div className="container">
      <div className="inputContainer">
        <TextField
          className="inputField" // Apply CSS class
          variant="outlined"
          multiline
          rows={1}
          label=""
          value={phrase}
          onChange={(e) => setPhrase(e.target.value)}
          placeholder="Enter the mechanical problems of the truck."
        />
        <div className="distance">
        <Button variant="contained" className="custom-button" onClick={generateAdvice}>Get Mechanical Advice</Button>
        </div>
      </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Mechanical Advice</DialogTitle>
        <DialogContent>
          <DialogContentText>{mechanicalAdvice}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">Ask Again</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default LLMGenerator;
