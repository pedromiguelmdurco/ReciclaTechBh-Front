import { Link } from "react-router-dom";
import './header.css';
import logo from '../../assets/logo.png'
import { useCallback, useEffect, useState } from "react";
import api from "../../services/api";

function Header(){

    const [users, getUsers] = useState([]);
    const[login,setLogin] = useState('');
    const[senha,setSenha] = useState('');

   
    useEffect(() => {
        async function loadLogins(){
            const response = await api.get("users/login");
            getUsers(response.data.results);
        }
        loadLogins();
        
      });


    
      const handleLogin = () => {
        
        
    };

    return(
        <header className="bg-[#5C832F] py-6 px-2 flex flex-row justify-between" >
            <Link to={'/'}><img src={logo}/></Link>
             <div class="flex flex-row text-center px-4 justify-around items-center">
                <input 
                    type="email" 
                    name="email" 
                    class="h-8 px-2 mr-2" 
                    placeholder="usuário"
                    value={login}
                    onChange={(e)=> setLogin(e.target.value)}
                />
                <input 
                    type="senha" 
                    name="senha" 
                    class="h-8 px-2 mr-2" 
                    placeholder="senha" 
                    value={senha}
                    onChange={e => setSenha(e.target.value)}
                />
                <button
                    onClick={handleLogin()}
                    class="bg-[#2c6825] text-white w-1/5 m-auto rounded-xl h-8 duration-100 hover:bg-[#398830] font-bold px-2"
                >
                    Entrar
                </button>
            </div>
        </header>
    );
}


export default Header;