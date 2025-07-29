import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

const UrlForm = ({ onSubmit }) => {
  const [inputs, setInputs] = useState([{ url: '', validity: '', shortcode: '' }]);

  const handleChange = (index, field, value) => {
    const newInputs = [...inputs];
    newInputs[index][field] = value;
    setInputs(newInputs);
  };

  const addField = () => {
    if (inputs.length < 5) {
      setInputs([...inputs, { url: '', validity: '', shortcode: '' }]);
    }
  };

  const handleSubmit = () => {
    onSubmit(inputs);
  };

  return (
    <Box>
      {inputs.map((input, index) => (
        <Box key={index} sx={{ display: 'flex', gap: 2, mb: 2 }}>
          <TextField
            label="Long URL"
            value={input.url}
            onChange={(e) => handleChange(index, 'url', e.target.value)}
            fullWidth
          />
          <TextField
            label="Validity (min)"
            value={input.validity}
            onChange={(e) => handleChange(index, 'validity', e.target.value)}
            type="number"
          />
          <TextField
            label="Custom Shortcode"
            value={input.shortcode}
            onChange={(e) => handleChange(index, 'shortcode', e.target.value)}
          />
        </Box>
      ))}
      <Button onClick={addField} variant="outlined">+ Add More</Button>
      <Button onClick={handleSubmit} variant="contained" sx={{ ml: 2 }}>Shorten</Button>
    </Box>
  );
};

export default UrlForm;
