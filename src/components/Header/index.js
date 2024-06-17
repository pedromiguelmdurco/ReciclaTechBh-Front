import { Link, Navigate, useNavigate } from "react-router-dom";
import './header.css';
import logo from '../../assets/logo.png'
import { useCallback, useEffect, useState } from "react";
import api from "../../services/api";


function Header(){

    const[login,setLogin] = useState('');
    const[senha,setSenha] = useState('');
    const navigate = useNavigate();

    
      function Entrar() {
        async function loadLogins(){
            try {
                const response = await api.post("users/login", {
                    email: login,
                    password: senha
                });
                console.log(response.data);
                api.defaults.headers.common.Authorization = `Bearer ${response.data.accessToken}`;
                localStorage.setItem("Token", response.data.accessToken);
                alert("Logado");
                navigate('/adimin');
            }
            
            catch(error){
                if (error.response) {
                    // O servidor respondeu com um status fora da faixa 2xx
                    console.log('Erro no response:', error.response.data);
                    alert("Usuário ou senha estão incorretos");
                } else if (error.request) {
                    // A requisição foi feita mas não houve resposta
                    console.log('Erro no request:', error.request);
                } /*else {
                    // Alguma outra coisa aconteceu ao configurar a requisição
                    console.log('Erro ao configurar a requisição:', error.message);
                }*/
            }
        }
        loadLogins();
    };

    return(
        <header className="bg-[#5C832F] py-6 px-2 flex flex-row justify-between" >
            <Link to={'/'}><img src={logo}/></Link>
             <div class="flex flex-row text-center px-4 justify-around items-center">
                <h5 className="text-white">Acesso Restrito:</h5>
                <input 
                    type="email" 
                    name="email" 
                    class="h-8 px-2 mr-2" 
                    placeholder="usuário"
                   
                    onChange={(e)=> setLogin(e.target.value)}
                />
                <input 
                    type="password" 
                    name="senha" 
                    class="h-8 px-2 mr-2" 
                    placeholder="senha" 
                    
                    onChange={e => setSenha(e.target.value)}
                />
                <button type="button"
                    onClick={Entrar}
                    class="bg-[#2c6825] text-white w-1/5 m-auto rounded-xl h-8 duration-100 hover:bg-[#398830] font-bold px-2"
                >
                    Entrar
                </button>
            </div>
        </header>
    );
}


export default Header;