import api from "../../services/api";
import { useState } from "react";

function Contato(){

    const [mensagem, setMensagem] = useState({
        email: '',
        subject: '',
        text: ''
      });
    
      function Mandar() {
        async function Add() {
          try {
            
            const response = await api.post("contact-message", {
              email: mensagem.email,
              subject: mensagem.subject,
              text: mensagem.text,
              
            });
            
            alert('Mensagem enviada');

            setMensagem({
                email:'',
                subject:'',
                text:''
            })
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

    return(
        <div className="flex-col">

            <div>
                <h3 className="text-[#5C832F] mx-2 my-2" >Contato</h3>
            </div>
            <div className="flex-col">
                <input 
                type="email" 
                name="email"
                value={mensagem.email} 
                placeholder="  Informe seu email" 
                className="box-decoration-slice border-solid border-2 border-[#5C832F] mx-6 w-3/4" 
                onChange={(e)=> setMensagem({...mensagem, email: e.target.value})} /><br/>
                <input 
                type="text" 
                value={mensagem.subject} 
                placeholder="  Digite o Assunto" 
                className="box-decoration-slice border-solid border-2 border-[#5C832F] mx-6 my-2 w-3/4 " 
                onChange={(e)=> setMensagem({...mensagem, subject: e.target.value})} />
            </div>
            <div className="flex-col">
                <textarea placeholder="  Digite sua mensagem aqui"
                value={mensagem.text} 
                className="box-decoration-slice border-solid border-2 border-[#5C832F] mx-6 my-2 w-3/4 h-55screen "
                onChange={(e)=> setMensagem({...mensagem, text: e.target.value})} /><br/>
                <button class="bg-[#2c6825] text-white w-1/6 rounded-lg h-8 duration-100 hover:bg-[#398830] font-bold px-2 float-right mr-96"
                onClick={Mandar}>Enviar</button>
            </div>
        </div>
    )
}

export default Contato;