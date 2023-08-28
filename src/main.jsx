import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import Navber from './components/Navber';
import './index.css'
// import Home from './Home.jsx';
import { BrowserRouter } from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
    <BrowserRouter>
      <App />
      {/* <Home /> */}
    </BrowserRouter>
  </React.StrictMode>
)
