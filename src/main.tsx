import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Navbar from './Component/Navbar.tsx'
import Footer from './Component/Footer.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar/>
    <App />
    <Footer/>
  </StrictMode>,
)
