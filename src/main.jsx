import React from 'react'
//import { ReactDOM } from 'react';
import { createRoot } from 'react-dom/client';
//import {BrowserRouter} from "react-router-dom";

import App from './App.jsx'

const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(
  <React.StrictMode>

      <App />

  </React.StrictMode>,
)
