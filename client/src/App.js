import React                            from 'react';
import { Container }                    from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home                             from './components/Home/Home.js'
import { NavBar }                       from './components/NavBar/NavBar'
import Auth                             from './components/Auth/Auth.js'

function App() {
  return (
    <BrowserRouter>
      <Container maxWidth="lg">
        <NavBar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/auth" exact element={<Auth />} />
          </Routes>
      </Container>
    </BrowserRouter>
  );
}
export default App;
