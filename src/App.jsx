import { useEffect } from 'react';
import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AnimatedRoutes from './components/AnimatedRoutes';
import styles from './App.module.css';


function App() {
  const [doorsOpen, setDoorsOpen] = useState(false);

  function toggleDoors() {
      setDoorsOpen(prevDoors => !prevDoors);
  }

  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  )
}

export default App
