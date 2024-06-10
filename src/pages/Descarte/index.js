import { useState, useEffect } from "react";
import { Col, Row, Container, CarouselItem, CarouselCaption } from "react-bootstrap";
import { Carousel } from "react-bootstrap";


import logo from '../../assets/teste-removebg-preview.png'
import { Link } from "react-router-dom";

function Descarte() {

    const [linha, setLinha] = useState([]);

    return (

        <div className="flex-col">
            <div className="flex w-full">
                {/* Divisão de imagens carrosel */}
                <div className="bg-blue-900 h-80 w-1/2"></div>
                <div className="bg-black h-80 w-1/2" ></div>
            </div>
            <div className="flex-col">
                {/* Divisão Quero descartar */}
                <h1 className="text-[#5C832F] mx-2 my-2" >Quero descartar</h1>
                {/* Cards */}
                <div className="flex justify-between mx-2">
                    <div className="bg-slate-400 h-72 w-40 hover:opacity-50">
                    <Link to={'/mapa'} >aaaa</Link>
                    </div>
                    <div className="bg-slate-400 h-72 w-40 hover:opacity-50"></div>
                    <div className="bg-slate-400 h-72 w-40 hover:opacity-50"></div>
                    <div className="bg-slate-400 h-72 w-40 hover:opacity-50"></div>
                    <div className="bg-slate-400 h-72 w-40 hover:opacity-50"></div>
                    <div className="bg-slate-400 h-72 w-40 hover:opacity-50"></div>
                </div>


            </div>

        </div>
    );
}


export default Descarte;