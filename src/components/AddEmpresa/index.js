import { useState } from "react";
import InputMask from "react-input-mask";
import api from "../../services/api";


function AddEmpresa() {

  const [nome, setNome] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [cep, setCep] = useState({
    cep1: '',
    cep2: ''
  });

  function Adicionar() {
    async function Add() {
      try {
        const response = await api.post("companies", {
          name: nome,
          cnpj: cnpj,
          cepDeliveryInitialRange: cep.cep1,
          cepDeliveryEndRange: cep.cep2
        });
        console.log(response.data);
        alert('Adicionada com sucesso.');
      }

      catch (error) {
        if (error.response) {
          // O servidor respondeu com um status fora da faixa 2xx
          console.log('Erro no response:', error.response.data);
          alert("Algum dado está inválido");
        } else if (error.request) {
          // A requisição foi feita mas não houve resposta
          console.log('Erro no request:', error.request);
        } /*else {
              // Alguma outra coisa aconteceu ao configurar a requisição
              console.log('Erro ao configurar a requisição:', error.message);
          }*/
      }
    }
    Add();
  }


  return (
    <div className="my-36 text-center px-4 justify-around items-center">
      <div className="my-4">
        <h3>Nome da empresa</h3>
        <input
          type="name"
          name="name"
          class="h-8 px-2 mr-2 w-2/4 bg-[#e7e7e7]"
          placeholder="Nome da empresa"

          onChange={(e) => setNome(e.target.value)}
        />
      </div>
      <div className="my-4">
        <h4>CNPJ</h4>
        <InputMask
          mask="99.999.999/9999-99"
          className="h-8 px-2 mr-2 bg-[#e7e7e7]"
          placeholder="99.999.999/9999-99"
          onChange={(e) => setCnpj(e.target.value)}
        />
      </div>
      <div className="my-4">
        <h3>CEP da empresa</h3>
        <InputMask
          mask="99-999999"
          className="h-8 px-2 mr-2 bg-[#e7e7e7]"
          placeholder="99-999999"
          onChange={(e) => setCep({...cep, cep1: e.target.value})}
        />
      </div>
      <div className="my-4">
        <h3>CEP do alcance maximo</h3>
        <InputMask
          mask="99-999999"
          className="h-8 px-2 mr-2 bg-[#e7e7e7]"
          placeholder="99-999999"
          onChange={(e) => setCep({...cep, cep2: e.target.value})}
        />
      </div>

      <div>
        <button type="button"
          onClick={Adicionar}
          class="bg-[#2c6825] text-white w-1/5 m-auto rounded-xl h-8 duration-100 hover:bg-[#398830] font-bold px-2"
        >
          Adicionar
        </button>
      </div>

    </div>

  );

}


export default AddEmpresa;