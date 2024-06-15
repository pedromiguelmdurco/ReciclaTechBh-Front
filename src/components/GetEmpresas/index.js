import { useEffect, useState } from "react";
import api from "../../services/api";


function GetEmpresa() {

    const [empresas, setEmpresa] = useState([]);

    useEffect(() => {

        async function loadEmpresas() {
            try {
                const response = await api.get("companies");
                
                setEmpresa(response.data);
            }

            catch (error) {
                if (error.response) {
                    // O servidor respondeu com um status fora da faixa 2xx
                    console.log('Erro no response:', error.response.data);
                    alert("Empresa não existe");
                } else if (error.request) {
                    // A requisição foi feita mas não houve resposta
                    console.log('Erro no request:', error.request);
                } /*else {
                  // Alguma outra coisa aconteceu ao configurar a requisição
                  console.log('Erro ao configurar a requisição:', error.message);
              }*/
            }
        }


        loadEmpresas();

    }, []);

    return (

        <div className="my-40  px-4 ">
            <h4 className="text-center justify-around items-center">Empresas Cadastradas</h4>
            <ul>
                {empresas.length === 0 && <h3 className="text-center px-4 justify-around items-center my-44 mb-60">Não tem empresas cadastradas</h3>}
                {empresas.map((item) => (
                    <li key={item.id} className="p-3 m-3 border-solid border-2 border-[#5C832F]">
                        <span>Id: {item.id}<br /> Nome: {item.name}<br /> Cnpj: {item.cnpj}</span>

                    </li>
                ))}
            </ul>
        </div>
    );
}


export default GetEmpresa;