import React, { useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './Home';
import Tierlist from './Tierlist';
import { AnimatePresence } from 'framer-motion'

function AnimatedRoutes() {
    const [doorsOpen, setDoorsOpen] = useState(false);
    const location = useLocation()

    function toggleDoors() {
        setDoorsOpen(prevDoors => !prevDoors);
    }

    return ( 
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<Home doorsOpen={doorsOpen} toggleDoors={toggleDoors}/>} />
                <Route path='/tierlist' element={<Tierlist />} />
                <Route path='*' element={(<h1>404 page not found</h1>)} />
            </Routes>
        </AnimatePresence>
    );
}

export default AnimatedRoutes;