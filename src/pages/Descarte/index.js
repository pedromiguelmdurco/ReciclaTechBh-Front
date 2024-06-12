import { useState } from "react";
import Carrosel from "../../components/Carrossel/Carrosel";

import { Link } from "react-router-dom";

function Descarte() {
  const [linha, setLinha] = useState([]);

  return (
    <div className="flex-col">
      <div className="flex w-full">
        <Carrosel />
      </div>
      <div className="flex-col">
        {/* Divisão Quero descartar */}
        <h1 className="text-[#5C832F] mx-2 my-2">Quero descartar</h1>
        {/* Cards */}
        <div className="flex justify-between mx-2">
          <div className="bg-slate-400 h-72 w-40 hover:opacity-50">
            <Link to={"/mapa"}>aaaa</Link>
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
