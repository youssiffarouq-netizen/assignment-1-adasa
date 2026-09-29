import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import "@fortawesome/fontawesome-free/css/all.min.css";
import App from './App.jsx'
import Navbar from './assets/components/Navbar';
import Home from './assets/components/Home';
import Footer from './assets/components/Footer';
import "@fontsource/cairo";
import "@fontsource/tajawal";
import BlogInfo from './assets/components/BlogInfo';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
