import React, { useState } from 'react';
import UrlForm from '../components/UrlForm';
import UrlList from '../components/UrlList';
import { Container, Typography } from '@mui/material';

const UrlShortenerPage = () => {
  const [urls, setUrls] = useState([]);

  const handleShorten = (data) => {
    // Mock shortened URLs
    const results = data.map((item, i) => ({
      ...item,
      shortcode: item.shortcode || `short${i + 1}`,
    }));
    setUrls(results);
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        URL Shortener
      </Typography>
      <UrlForm onSubmit={handleShorten} />
      <UrlList urls={urls} />
    </Container>
  );
};

export default UrlShortenerPage;
