import { useState, useEffect } from "react";
import InputMask from "react-input-mask";
import api from "../../services/api";
import { useLocation } from "react-router-dom";

function Mapa() {

    const [cep, setCep] = useState('');
    const [empresas, setEmpresas] = useState([])
    const location = useLocation();
    const {linha} = location.state || {};

    function Mapa() {
        async function Filtro() {
            try {
                const response = await api.get(`collection-spots?cep=${cep}`);
                console.log(response.data);
                const respostas =response.data.filter(x => x.company.collectionLine === linha);
                setEmpresas(respostas);
                console.log(empresas);
                console.log(respostas);
            }

            catch (error) {
                if (error.response) {
                    // O servidor respondeu com um status fora da faixa 2xx
                    console.log('Erro no response:', error.response.data);
                    alert(`Algum dado está inválido: \r Erro no response: ${error.response.data.message}`);
                } else if (error.request) {
                    // A requisição foi feita mas não houve resposta
                    console.log('Erro no request:', error.request);
                } /*else {
                  // Alguma outra coisa aconteceu ao configurar a requisição
                  console.log('Erro ao configurar a requisição:', error.message);
              }*/
            }
        }
        Filtro();
    }


    return (
        <div className="grid grid-cols-10">
            <div className="col-start-1 col-end-5 mx-6 mb-[27rem]">
                <div className="ml-2">
                    <h1 className="text-[#5C832F] my-2" >Encontre um ponto perto de você</h1>
                </div>
                <div className="box-decoration-slice mx-6 max-w-4xl">
                    <h5>Clique em localização atual  e escolha uma categoria para localizar um Ponto de Coleta ou Coleta Residencial mais próximo de você.</h5>
                </div>
                <div>
                    <div className="my-4 text-center items-center ">
                        <h3>Informe seu CEP</h3>
                        <InputMask
                            mask="99-999999"
                            className="h-8 px-2 mr-2 bg-[#e7e7e7]"
                            placeholder="99-999999"
                            onChange={(e) => setCep(e.target.value)}
                        />
                        <button onClick={Mapa} className="bg-[#5C832F] mx-2 w-24 h-9 rounded-lg">Procurar</button>
                    </div>
                </div>
                
            </div>
            <div className="col-start-5 py-4 w-56screen">
                
            <div className="border-solid border-[#5C832F] border-3">
                    <ul className="list-disc">
                        {empresas.length === 0 && <h3 className="text-center px-4 justify-around items-center my-44 mb-60">Não tem Pontos perto de você</h3>}
                        {empresas.map((item) => (
                            <li key={item.id} className="p-3 m-3 border-solid border-2 border-[#5C832F]">
                                <span>Empresa: {item.company.name}<br /> Cep do Ponto: {item.cep}<br />
                                    Endereço: {item.address}, {item.number}<br /></span>

                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}


export default Mapa;