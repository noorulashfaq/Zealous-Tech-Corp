import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landingpage from './Landingpage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar/>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landingpage/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
