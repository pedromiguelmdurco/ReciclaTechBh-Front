import { useState } from "react";
import api from "../../services/api";

function DeleteEmpresa(){
    const [id,setID] = useState();

  function Deletar() {
    async function Delet() {
      try {
        const response = await api.delete(`companies/${id}`);
        console.log(response.data);
        alert('Deletada com sucesso.');
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
    Delet();
  }


  return (
    <div className="my-64 text-center px-4 justify-around items-center">
      <div className="my-4">
        <h3>Id da Empresa</h3>
        <input
          type="number"
          class="h-8 px-2 mr-2 bg-[#e7e7e7]"
          placeholder="14"

          onChange={(e) => setID(e.target.value)}
        />
      </div>
    
      <div>
        <button type="button"
          onClick={Deletar}
          class="bg-[#2c6825] text-white w-1/5 m-auto rounded-xl h-8 duration-100 hover:bg-[#398830] font-bold px-2"
        >
          Adicionar
        </button>
      </div>

    </div>

  );

}


export default DeleteEmpresa;