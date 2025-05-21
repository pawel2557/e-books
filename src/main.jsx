import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';

import { FilterProvider, CartProvider } from './context';
import { ScrollToTop } from './components';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <CartProvider>
        <FilterProvider>
          <ScrollToTop />
          <ToastContainer position="top-center" />
          <App />
        </FilterProvider>
      </CartProvider>
    </Router>
  </React.StrictMode >
);