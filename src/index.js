import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './components/App/App';

const root = ReactDOM.createRoot(document.querySelector('.page'));
root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
);