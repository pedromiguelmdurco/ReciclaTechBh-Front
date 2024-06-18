import { useState } from "react";
import Carrosel from "../../components/Carrossel/Carrosel";
import { Link } from "react-router-dom";

function Descarte() {
  return (
    <div className="flex flex-col">
      <div className="w-full">
        <Carrosel />
      </div>
      <div className="flex flex-col px-4 sm:px-8 md:px-16 lg:px-36">
        {/* Divisão Quero descartar */}
        <h1 className="text-[#5C832F] my-4 text-lg sm:text-xl md:text-2xl lg:text-3xl">Quero descartar</h1>
        {/* Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          <div className="bg-slate-400 h-36 sm:h-48 md:h-56 lg:h-72 w-full flex items-center justify-center hover:opacity-80">
            <Link to="/mapa" state={{ linha: "Verde" }} className="text-white">Verde</Link>
          </div>
          <div className="bg-slate-400 h-36 sm:h-48 md:h-56 lg:h-72 w-full flex items-center justify-center hover:opacity-80">
            <Link to="/mapa" state={{ linha: "Marron" }} className="text-white">Marron</Link>
          </div>
          <div className="bg-slate-400 h-36 sm:h-48 md:h-56 lg:h-72 w-full flex items-center justify-center hover:opacity-80">
            <Link to="/mapa" state={{ linha: "Azul" }} className="text-white">Azul</Link>
          </div>
          <div className="bg-slate-400 h-36 sm:h-48 md:h-56 lg:h-72 w-full flex items-center justify-center hover:opacity-80">
            <Link to="/mapa" state={{ linha: "Branco" }} className="text-white">Branco</Link>
          </div>
          <div className="bg-slate-400 h-36 sm:h-48 md:h-56 lg:h-72 w-full flex items-center justify-center hover:opacity-80">
            <Link to="/mapa" state={{ linha: "Log" }} className="text-white">Logística Reversa</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Descarte;