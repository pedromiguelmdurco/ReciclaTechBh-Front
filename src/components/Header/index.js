import { Link } from "react-router-dom";
import './header.css';
import logo from '../../assets/logo.png'
import { useEffect, useState } from "react";

function Header(){
    const handleLogin = () => {
        // Coloca a logica de login pra verificar campo aqui
        alert("Sexo")
    }
    useEffect(() => {

        console.log("TESTANDO ESSA BOMBA AQUI :D")
      }, []);
    return(
        <header className="bg-[#5C832F] py-6 px-2 flex flex-row justify-between" >
            <Link to={'/'}><img src={logo}/></Link>
             <div class="flex flex-row w-2/6 text-center px-4 justify-around items-center">
                <input 
                    type="email" 
                    name="email" 
                    class="h-8 px-2 mr-2" 
                    placeholder="usuário" 
                />
                <input 
                    type="senha" 
                    name="senha" 
                    class="h-8 px-2 mr-2" 
                    placeholder="senha" 
                />
                <button
                    onClick={handleLogin}
                    class="bg-[#2c6825] text-white w-1/5 m-auto rounded-xl h-8 duration-100 hover:bg-[#398830] font-bold px-2"
                >
                    Entrar
                </button>
            </div>
        </header>
    );
}


export default Header;