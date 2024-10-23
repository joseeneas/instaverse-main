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
const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
})
const container = document.getElementById('root');
const root      = createRoot(container);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);