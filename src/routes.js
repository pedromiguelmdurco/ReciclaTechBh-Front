

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Descarte from "./pages/Descarte";
import Profile from "./pages/Profile";
import Erro from "./pages/Erro";
import Login from "./pages/Login";

import Header from "./components/Header";
import Footer from "./components/Footer";


function RoutesApp(){
    return(
        <BrowserRouter>
            <Header/>
            <Routes>

                <Route path="/" element={<Descarte/>}/>
                <Route path="/profile/:id" element={<Profile/>}/>
                <Route path="/login" element={<Login/>}/>

                <Route path="*" element={<Erro/>}/>

            </Routes>
            <Footer/>
        </BrowserRouter>
    );
}


export default RoutesApp;