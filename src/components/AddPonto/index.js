import api from "../../services/api";
import { useState } from "react";
import InputMask from "react-input-mask";


function AddPonto() {

    const [ponto, setPonto] = useState({
        companyId: null,
        cep: '',
        address: '',
        number: null
    });

    function AdicionarPonto() {
        async function Ponto() {
            try {
                const response = await api.post("companies/collection-spot", {
                    companyId: ponto.companyId,
                    cep: ponto.cep,
                    address: ponto.address,
                    number: ponto.number
                });
                console.log(response.data);
                alert('Ponto Adicionado com sucesso.');
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
        Ponto();
    }


    return (
        <div className="my-64 text-center px-4 justify-around items-center">
            <div className="my-4">
                <h3>Id da Empresa</h3>
                <input
                    type="number"
                    class="h-8 px-2 mr-2 bg-[#e7e7e7]"
                    placeholder="14"

                    onChange={(e) => setPonto({ ...ponto, companyId: parseInt(e.target.value)})}
                />
            </div>
            <div className="my-3">
                <h3>CEP do Ponto</h3>
                <InputMask
                    mask="99999-999"
                    className="h-8 px-2 mr-2 bg-[#e7e7e7]"
                    placeholder="99999-999"
                    onChange={(e) => setPonto({ ...ponto, cep: e.target.value })}
                />
            </div>
            <div className="my-4">
                <h3>Endereço do Ponto</h3>
                <input
                    type="text"
                    class="h-8 px-2 mr-2 bg-[#e7e7e7]"
                    placeholder="Rua ttttttttttttttttt"

                    onChange={(e) => setPonto({ ...ponto, address: e.target.value })}
                />
            </div>
            <div className="my-4">
                <h3>Numero da rua</h3>
                <input
                    type="number"
                    class="h-8 px-2 mr-2 bg-[#e7e7e7]"
                    placeholder="14"

                    onChange={(e) => setPonto({ ...ponto, number: parseInt(e.target.value) })}
                />
            </div>

            <div>
                <button type="button"
                    onClick={AdicionarPonto}
                    class="bg-[#2c6825] text-white w-1/5 m-auto rounded-xl h-8 duration-100 hover:bg-[#398830] font-bold px-2"
                >
                    Adicionar
                </button>
            </div>

        </div>

    );
}


export default AddPonto;