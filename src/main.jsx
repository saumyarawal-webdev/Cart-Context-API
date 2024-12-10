import { StrictMode } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createRoot } from 'react-dom/client'
import Welcome from './components/Welcome.jsx';
import Shop from './components/Shop.jsx';
import ThankYou from './components/ThankYou.jsx';
import './index.css'
import { CartProvider } from './context/Cart.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <BrowserRouter>
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/thankyou" element={<ThankYou/>} />
    </Routes>
    </BrowserRouter>
      </CartProvider>
  </StrictMode>,
)
