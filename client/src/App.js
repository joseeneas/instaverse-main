// import required modules
import React                            from 'react';
import { Container }                    from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home                             from './components/Home/Home.js';
import { NavBar }                       from './components/NavBar/NavBar';
import Auth                             from './components/Auth/Auth.js';
// create a functional component App
// return a BrowserRouter component with a Container component inside
// the Container component has a maxWidth prop set to lg
// inside the Container component, render the NavBar component
// inside the Container component, render a Routes component
// inside the Routes component, render a Route component with path="/" and element prop set to Home component
// inside the Routes component, render a Route component with path="/auth" and element prop set to Auth component
// export the App component
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