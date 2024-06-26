import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import RtkProvider from './redux/redux-provider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RtkProvider>
      <App />
    </RtkProvider>
  </React.StrictMode>
);

