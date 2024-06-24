import { Link } from "react-router-dom";
import Carrosel from "../../components/Carrossel/Carrosel";
import linhaVerde from "../../assets/linhaVerde_tarja.png";
import linhaAzul from "../../assets/linhaAzul_tarja.png";
import linhaMarrom from "../../assets/linhaMarrom_Tarja.png";
import linhaBranca from "../../assets/linhaBranca_Tarja.png";
import linhaReverse from "../../assets/LOGISTICAREVERSA.png";


function Descarte() {
  return (
    <div className="flex flex-col">
      <div className="w-full">
        <Carrosel />
      </div>
      <div className="flex flex-col px-4 sm:px-8 md:px-16 lg:px-36">
        {/* Divisão Quero descartar */}
        <h1 className="text-[#5C832F] my-4 text-lg sm:text-xl md:text-2xl lg:text-3xl">
          Quero descartar
        </h1>
        {/* Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          <div className="flex items-center justify-center hover:opacity-80">
            <Link to="/mapa" state={{ linha: "Verde" }} className="text-white">
              <img src={linhaVerde} className="object-cover h-36 sm:h-48 md:h-56 lg:h-72 w-full"></img>
            </Link>
          </div>
          <div className="flex items-center justify-center hover:opacity-80">
            <Link to="/mapa" state={{ linha: "Marrom" }} className="text-white">
            <img src={linhaMarrom} className="object-cover h-36 sm:h-48 md:h-56 lg:h-72 w-full"></img>
            </Link>
          </div>
          <div className="flex items-center justify-center hover:opacity-80">
            <Link to="/mapa" state={{ linha: "Azul" }} className="text-white">
            <img src={linhaAzul} className="object-cover h-36 sm:h-48 md:h-56 lg:h-72 w-full"></img>
            </Link>
          </div>
          <div className="flex items-center justify-center hover:opacity-80">
            <Link to="/mapa" state={{ linha: "Branco" }} className="text-white">
            <img src={linhaBranca} className="object-cover h-36 sm:h-48 md:h-56 lg:h-72 w-full"></img>
            </Link>
          </div>
          <div className="flex items-center justify-center hover:opacity-80">
            <Link to="/mapa" state={{ linha: "Log" }} className="text-white">
            <img src={linhaReverse} className="object-cover h-36 sm:h-48 md:h-56 lg:h-72 w-full"></img>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Descarte;
