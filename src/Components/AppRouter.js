import React from "react";
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import HomePage from "./Home/HomePage";
import Contact from "./Contact";
 
const AppRouter = () => {

    <BrowserRouter>
        <Routes>
            <Route path="/" element={
                <HomePage />
            }/>
            <Route path="/contacts" element={
                <Contact />
            }/>
        </Routes>
    </BrowserRouter>

}

export default AppRouter;