import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap"
import 'react-toastify/dist/ReactToastify.css'
import App from './App';
import { UserProvider } from './Context/userContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

<UserProvider>
  <App />
</UserProvider>
    

    
);


