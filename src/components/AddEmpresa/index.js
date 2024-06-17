import { useState } from "react";
import InputMask from "react-input-mask";
import api from "../../services/api";
import PhoneInput from "./phoneInput";

function AddEmpresa() {


  const [empresa, setEmpresa] = useState({
    nome: '',
    cnpj: '',
    cep: '',
    address: '',
    phoneNumber: '',
    addressNumber: null,
    collectionLine: null,
    cep1: '',
    cep2: ''
  });

  function Adicionar() {
    async function Add() {
      try {
        
        const response = await api.post("companies", {
          name: empresa.nome,
          cnpj: empresa.cnpj,
          cep: empresa.cep,
          address: empresa.address,
          phoneNumber:empresa.phoneNumber ,
          addressNumber: empresa.addressNumber,
          collectionLine: empresa.collectionLine,
          cepDeliveryInitialRange: empresa.cep1,
          cepDeliveryEndRange: empresa.cep2
        });
        console.log(response.data);
        alert('Adicionada com sucesso.');
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

          onChange={(e) => setEmpresa({ ...empresa, nome: e.target.value })}
        />
      </div>
      <div className="my-3">
        <h4>CNPJ</h4>
        <InputMask
          mask="99.999.999/9999-99"
          className="h-8 px-2 mr-2 bg-[#e7e7e7]"
          placeholder="99.999.999/9999-99"
          onChange={(e) => setEmpresa({ ...empresa, cnpj: e.target.value })}
        />
      </div>
      <div className="my-3">
        <h3>CEP da empresa</h3>
        <InputMask
          mask="99999-999"
          className="h-8 px-2 mr-2 bg-[#e7e7e7]"
          placeholder="99999-999"
          onChange={(e) => setEmpresa({ ...empresa, cep: e.target.value })}
        />
      </div>
      <div className="my-3">
        <h3>Endereço</h3>
        <input
          type="text"
          class="h-8 px-2 mr-2 w-2/4 bg-[#e7e7e7]"
          placeholder="Endereço da empresa"

          onChange={(e) => setEmpresa({ ...empresa, address: e.target.value })}
        />
      </div>
      <div className="my-3">
        <h3>Numero do Endereço</h3>
        <input
          type="number"
          class="h-8 px-2 mr-2 w-1/4 bg-[#e7e7e7]"
          placeholder="Numero do endereço da empresa"

          onChange={(e) => setEmpresa({ ...empresa, addressNumber: parseInt(e.target.value) })}
        />
      </div>
      <div className="my-3">
        <h3>Numero de Telefone</h3>
        <PhoneInput
          value={empresa.phoneNumber}
          onChange={(value) => setEmpresa({ ...empresa, phoneNumber: value })}
        />
      </div>
      <div className="my-3">
        <h3>Linha</h3>
        <input
          type="number"
          class="h-8 px-2 mr-2 bg-[#e7e7e7]"
          placeholder="Linha que a empresa atende"

          onChange={(e) => setEmpresa({ ...empresa, collectionLine: parseInt(e.target.value)})}
        />
      </div>
      <div className="my-3">
        <h3>CEP do alcance Inicial</h3>
        <InputMask
          mask="99999-999"
          className="h-8 px-2 mr-2 bg-[#e7e7e7]"
          placeholder="99999-999"
          onChange={(e) => setEmpresa({ ...empresa, cep1: e.target.value })}
        />
      </div>
      <div className="my-3">
        <h3>CEP do alcance maximo</h3>
        <InputMask
          mask="99999-999"
          className="h-8 px-2 mr-2 bg-[#e7e7e7]"
          placeholder="99999-999"
          onChange={(e) => setEmpresa({ ...empresa, cep2: e.target.value })}
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