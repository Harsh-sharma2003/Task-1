import React from 'react';
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Feature } from './pages/Feature';
import { ContactUs } from './pages/ContactUs';
import { LogSign } from './pages/LogSign';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/features' element={<Feature />} />
          <Route path='/contact' element={<ContactUs />} />
          <Route path='/login' element={<LogSign />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

