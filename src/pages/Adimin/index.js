
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AddEmpresa from "../../components/AddEmpresa";
import DeleteEmpresa from "../../components/DeleteEmpresa";
import GetEmpresa from "../../components/GetEmpresas";
import AddPonto from "../../components/AddPonto";
import Mensagem from "../../components/Mensagens";


function Adimin() {

    const [componente, setComponent] = useState('A')

    const renderComponent = () => {
        switch (componente) {
            case 'A':
                return <AddEmpresa />;
            case 'B':
                return <DeleteEmpresa />;
            case 'C':
                return <AddPonto />;
            case 'D':
                return <GetEmpresa />;
            case 'E':
                return <Mensagem />;
        }
    }

    return (

        <div className="my-8 grid grid-cols-8">
            <div className="bg-[#5C832F] col-start-1 col-end-3">
                <ul className="text-white flex flex-col justify-center text-center font-bolder mx-2">
                    <li onClick={() => setComponent('A')} className="h-10 my-5 rounded-xl hover:bg-[#2E3192] duration-700 cursor-pointer"><h3>Adicionar empresa</h3></li>
                    <li onClick={() => setComponent('B')} className="h-10 my-5 rounded-xl hover:bg-[#2E3192] duration-700 cursor-pointer"><h3>Apagar empresa</h3></li>
                    <li onClick={() => setComponent('C')} className="h-10 my-5 rounded-xl hover:bg-[#2E3192] duration-700 cursor-pointer"><h3>Adicionar Ponto</h3></li>
                    <li onClick={() => setComponent('D')} className="h-10 my-5 rounded-xl hover:bg-[#2E3192] duration-700 cursor-pointer"><h3>Empresas</h3></li>
                    <li onClick={() => setComponent('E')} className="h-10 my-5 rounded-xl hover:bg-[#2E3192] duration-700 cursor-pointer"><h3>Mensagens</h3></li>
                </ul>
            </div>
            <div className="col-start-3 col-end-9 float-left">
                {renderComponent()}
            </div>

        </div>

    );
}


export default Adimin;