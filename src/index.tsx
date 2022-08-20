import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';

import { BrowserRouter } from "react-router-dom"
import { Provider } from "./provider/index.provider"

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement );
root.render(

  <BrowserRouter>
    <React.StrictMode>
      <Provider>
        <App />
      </Provider>
    </React.StrictMode>
  </BrowserRouter>
);

