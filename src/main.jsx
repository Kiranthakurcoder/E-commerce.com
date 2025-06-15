import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Showcart from '../src/components/pagescomponents/Showcart.jsx';
// import Showcart from './components/pagescomponents/Showcart.jsx';

import ProductDetail from './components/ProductDetail.jsx';
import store from './redux/store.js'; 
import LoginForm from './components/LoginForm.jsx';
import Contact from './components/Contact.jsx';
import ShopSection from './components/ShopSection.jsx';
import Register from './components/Register.jsx';
import About from '../src/components/pagescomponents/About.jsx'

import { Provider } from 'react-redux'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>

   
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} /> 
        <Route path="/goo" element={<Showcart />} /> 
        <Route path="/goo" element={<Showcart />} /> 
        <Route path="/login" element={<LoginForm />} /> 
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/register" element={<Register />} /> 
        <Route path="/about" element={<About />} /> 
        <Route path="/shop/:category" element={<ShopSection />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
    </Provider>
  </StrictMode>
);
