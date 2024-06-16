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


    function zap(){
        if (empresas.length > 2) {
            const empresa = empresas[2];
            const phoneNumber = empresa.phoneNumber.replace(/\D/g, ''); // Remove caracteres não numéricos
            window.open(`https://wa.me/${phoneNumber}`, '_blank');
        } else {
            alert("Não há empresas suficientes cadastradas.");
        }
        
    }

    return (

        <div className="my-40  px-4 ">
            <button onClick={zap}>ZAP</button>
            <h4 className="text-center justify-around items-center">Empresas Cadastradas</h4>
            <ul>
                {empresas.length === 0 && <h3 className="text-center px-4 justify-around items-center my-44 mb-60">Não tem empresas cadastradas</h3>}
                {empresas.map((item) => (
                    <li key={item.id} className="p-3 m-3 border-solid border-2 border-[#5C832F]">
                        <span>Id: {item.id}<br /> Nome: {item.name}<br /> Cnpj: {item.cnpj}<br />
                        Endereço: {item.address}, {item.addressNumber}<br /> Numero: {item.phoneNumber}<br/>
                        Linha: {item.collectionLine}</span>

                    </li>
                ))}
            </ul>
        </div>
    );
}


export default GetEmpresa;