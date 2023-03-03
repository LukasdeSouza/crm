import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-atm3f61e7fw8nuex.us.auth0.com"
    clientId="SX1DYbXMmkTP2XZnHpijLTuqsXPtJ8Wp"
    authorizationParams={{
      redirect_uri: 'http://localhost:3001/dashboard'
    }}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Auth0Provider>
);

