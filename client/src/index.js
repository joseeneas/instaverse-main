// import required modules
import React              from 'react';
import { createRoot }     from 'react-dom/client';
import { Provider }       from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { thunk }          from 'redux-thunk';
import './index.css'
import App                from './App';
import reducers           from './reducers/index.js'
// create a store with reducers and middleware
// create a container element with id 'root'
// create a root element with the container element
// render the App component inside the root element
// render the Provider component with store prop set to store and App component as children
// inside the Provider component, render the App component
// export the store
// export the container
// In the code below, a Redux store is being configured using the 
// configureStore function from the Redux Toolkit. The configureStore function 
// simplifies the process of setting up a Redux store by providing good default 
// configurations and allowing for easy customization.
//
// The store is created using the configureStore function, which takes an object
// with two properties: reducer and middleware. The reducer property is set to
// the combined reducers from the reducers file, which contains all the reducers
// for the application. The middleware property is set to a function that adds
// the thunk middleware to the store. The thunk middleware allows for asynchronous
// actions to be dispatched in Redux.
//
// The store is then passed to the Provider component from react-redux, which
// makes the store available to all components in the application. The App component
// is rendered inside the Provider component, which is then rendered inside the root
// element of the application.
//
// The store is exported so that it can be used in other parts of the application, and
// the container element is exported so that it can be used to render the application in
// the browser.
console.log("CL:index.js");
const store = configureStore({
  reducer    : reducers,
  middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
})
const container = document.getElementById('root');
const root      = createRoot(container);
root.render(
  <Provider store={store}>
    <App/>
  </Provider>
);
export { store, container };