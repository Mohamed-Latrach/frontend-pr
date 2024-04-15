import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux'; 
import store from './store/store'; 
import App from './App'; 

const root = createRoot(document.getElementById('root')); 

try {
  root.render(
    <Provider store={store}>
      <App />
    </Provider>
  );
} catch (error) {
  // Handle rendering errors gracefully
  console.error('An error occurred while rendering the application:', error);
}
