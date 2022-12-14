import { Routes, Route, Navigate } from "react-router-dom"
import { AnimatePresence } from "framer-motion"

import Login from "../pages/Login"
import Register from "../pages/Register"
import Home from "../pages/Home"

export default function Routers(){

    return(
        <AnimatePresence>
            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="*" element={<Navigate to="/login"/>}/>
            </Routes>
        </AnimatePresence>
    )
}