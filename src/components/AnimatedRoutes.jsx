import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './Home';
import Tierlist from './Tierlist';
import { AnimatePresence } from 'framer-motion'

function AnimatedRoutes() {
    const location = useLocation()

    return ( 
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<Home />} />
                <Route path='/tierlist' element={<Tierlist />} />
                <Route path='*' element={(<h1>404 page not found</h1>)} />
            </Routes>
        </AnimatePresence>
    );
}

export default AnimatedRoutes;