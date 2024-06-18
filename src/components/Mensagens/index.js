import { useEffect, useState } from "react";
import api from "../../services/api";


function Mensagem(){
    const [mensagens, setMensagens] = useState([]);

    useEffect(() => {

        async function loadMensagens() {
            try {
                const response = await api.get("contact-message");
                
                setMensagens(response.data);
            }

            catch (error) {
                if (error.response) {
                    // O servidor respondeu com um status fora da faixa 2xx
                    console.log('Erro no response:', error.response.data);
                    
                } else if (error.request) {
                    // A requisição foi feita mas não houve resposta
                    console.log('Erro no request:', error.request);
                } /*else {
                  // Alguma outra coisa aconteceu ao configurar a requisição
                  console.log('Erro ao configurar a requisição:', error.message);
              }*/
            }
        }


        loadMensagens();

    }, []);


    return(
        <div className="my-40  px-4 ">
        <h4 className="text-center justify-around items-center">Mensagens Recebidas</h4>
        <ul>
            {mensagens.length === 0 && <h3 className="text-center px-4 justify-around items-center my-44 mb-60">Não tem mensagens cadastradas</h3>}
            {mensagens.map((item) => (
                <li key={item.id} className="p-3 m-3 border-solid border-2 border-[#5C832F]">
                    <span>Id: {item.id}<br /> Email: {item.email}<br /> Assunto: {item.subject}<br />
                     {item.text}</span>

                </li>
            ))}
        </ul>
    </div>
    );
}



export default Mensagem;