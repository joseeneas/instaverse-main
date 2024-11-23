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
// export the App component.
//
// The code below defines a functional component named App in a React application. 
// This component is responsible for rendering the main structure of the application, 
// including routing and layout components.
//
// Console Log: The first line inside the return statement is a call to console.log("CL:App.js"). 
// This line logs a message to the console, which can be useful for debugging purposes 
// to confirm that the App component is being rendered.
//
// BrowserRouter: The App component returns a JSX structure that starts with a <BrowserRouter> component 
// from the react - router - dom library.
// BrowserRouter is a router implementation that uses the HTML5 history API to keep the UI in sync with the URL.
// It enables client - side routing in the application.
//
// Container: Inside the BrowserRouter, there is a <Container> component with a maxWidth property 
// set to "lg".This component is likely from a UI library such as Material - UI and is used
// to center and constrain the width of the content to a large size.
// The Container component provides a layout structure for the content of the application.
//
// NavBar: The <NavBar/> component is included within the Container. 
// This component is a navigation bar that provides links 
// to different parts of the application.
//
// Routes and Route: The Routes component from react-router-dom is 
// used to define the routing configuration.Inside the Routes component,
//  there are two Route components:
// The first Route has a path of "/" and an exact attribute, meaning it will match the root URL exactly.
// It renders the Home component when the path is /.
// The second Route has a path of "/auth" and an exact attribute, meaning it will match the / auth URL exactly.
// It renders the Auth component when the path is / auth.
// The App component is then exported as the default export of  the module, 
// making it available for import in other parts of the application.
// This setup provides a basic structure for a React application with client - side routing 
// and a navigation bar.
function App() {
  return (
    console.log("CL:App.js"),
    <BrowserRouter>
      <Container maxWidth="lg">
        <NavBar/>
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/auth" exact element={<Auth/>}/>
        </Routes>
      </Container>
    </BrowserRouter>
  );
}
export default App;