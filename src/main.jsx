import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './PizzeriaApp.jsx'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { MyProvider } from './context/UserContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyProvider>
      <App />
    </MyProvider>
  </React.StrictMode>,
)