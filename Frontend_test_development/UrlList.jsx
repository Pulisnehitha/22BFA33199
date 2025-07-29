import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const UrlList = ({ urls }) => {
  return (
    <Box sx={{ mt: 4 }}>
      {urls.map((url, idx) => (
        <Paper key={idx} sx={{ p: 2, mb: 2 }}>
          <Typography>Original URL: {url.url}</Typography>
          <Typography>Short URL: https://short.ly/{url.shortcode || 'abc123'}</Typography>
          <Typography>Validity: {url.validity || 30} min</Typography>
        </Paper>
      ))}
    </Box>
  );
};

export default UrlList;
