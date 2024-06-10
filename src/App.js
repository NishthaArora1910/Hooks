
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CssBaseline, Container } from '@mui/material';
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <CssBaseline />
      <Navbar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
