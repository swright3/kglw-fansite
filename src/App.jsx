import { useEffect } from 'react';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styles from './App.module.css';
import Home from './components/Home';
import Tierlist from './components/Tierlist';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/tierlist' element={<Tierlist />} />
        <Route path='*' element={(<h1>404 page not found</h1>)} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
