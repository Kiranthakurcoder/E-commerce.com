
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store.js';

import Home from './components/Home.jsx';
import Showcart from './components/pagescomponents/Showcart.jsx';
import LoginForm from './components/LoginComp/LoginForm.jsx';
import Contact from './components/LoginComp/Contact.jsx';
import Register from './components/LoginComp/Register.jsx';
import About from './components/pagescomponents/About.jsx';
import ProductDetail from './components/pagescomponents/ProductDetail.jsx';
import ShopSection from './components/ShopSection.jsx';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
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
  );
};

export default App;
