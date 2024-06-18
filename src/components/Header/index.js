import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import api from "../../services/api";
import "./header.css";

function Header() {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  function Entrar() {
    async function loadLogins() {
      try {
        const response = await api.post("users/login", {
          email: login,
          password: senha,
        });

        api.defaults.headers.common.Authorization = `Bearer ${response.data.accessToken}`;
        localStorage.setItem("Token", response.data.accessToken);
        navigate("/adimin");

        setLogin("");
        setSenha("");
      } catch (error) {
        if (error.response) {
          // O servidor respondeu com um status fora da faixa 2xx
          console.log("Erro no response:", error.response.data);
          alert("Usuário ou senha estão incorretos");
        } else if (error.request) {
          // A requisição foi feita mas não houve resposta
          console.log("Erro no request:", error.request);
        } /*else {
                    // Alguma outra coisa aconteceu ao configurar a requisição
                    console.log('Erro ao configurar a requisição:', error.message);
                }*/
      }
    }
    loadLogins();
  }

  return (
    <header className="bg-[#5C832F] py-4 px-2 flex flex-col md:flex-row justify-between items-center">
      <Link to={"/"} className="mb-4 md:mb-0">
        <img src={logo} />
      </Link>
      <div class="flex flex-col md:flex-row text-center md:space-x-4 items-center w-full md:w-auto">
        <h5 className="text-white mb-2 md:mb-0">Acesso Restrito:</h5>
        <input
          type="email"
          name="email"
          class="h-8 px-2 mb-2 md:mb-0"
          placeholder="usuário"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />
        <input
          type="password"
          name="senha"
          class="h-8 px-2 mb-2 md:mb-0"
          placeholder="senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <button
          type="button"
          onClick={Entrar}
          class="bg-[#2c6825] text-white w-full md:w-auto rounded-xl h-8 duration-100 hover:bg-[#398830] font-bold px-4"
        >
          Entrar
        </button>
      </div>
    </header>
  );
}

export default Header;
