import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';

const rootElement = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(rootElement);
root.render(
  // (!) in react 18, StrictMode causes all useEffect-s to trigger twice on freshly rendered components
  <React.StrictMode>
    <App />
  </React.StrictMode>
)