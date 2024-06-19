

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Descarte from "./pages/Descarte";
import Sobre from "./pages/Sobre";
import Politica from "./pages/Politica";
import Contato from "./pages/Contato";
import Mapa from "./pages/Mapa";
import Admin from "./pages/Adimin";


import Header from "./components/Header";
import Footer from "./components/Footer";


function RoutesApp(){
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Descarte/>}/>
                <Route path="/sobre" element={<Sobre/>}/>
                <Route path="/contato" element={<Contato/>}/>
                <Route path="/politica" element={<Politica/>}/>
                <Route path="/mapa" element={<Mapa/>}/>
                <Route path="/adimin" element={<Admin/>}/>
                
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
}


export default RoutesApp;