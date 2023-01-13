import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  
    <BrowserRouter  basename={process.env.NODE_ENV === 'development' ? process.env.REACT_APP_DEV_BASE_DIR : process.env.REACT_APP_PROD_BASE_DIR} >
    <App />
    </BrowserRouter>
  // </React.StrictMode>
);


