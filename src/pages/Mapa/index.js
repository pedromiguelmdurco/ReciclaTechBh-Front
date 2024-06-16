import { useState } from "react";
import InputMask from "react-input-mask";


function Mapa() {

    const [cep,setCep] = useState('');


    return (
        <div className="grid grid-cols-10">
            <div className="col-start-1 col-end-5 mx-6">
                <div className="ml-2">
                    <h1 className="text-[#5C832F] my-2" >Encontre um ponto perto de você</h1>
                </div>
                <div className="box-decoration-slice mx-6 max-w-4xl">
                    <h5>Clique em localização atual  e escolha uma categoria para localizar um Ponto de Coleta ou Coleta Residencial mais próximo de você.</h5>
                </div>
                <div>
                    <div className="my-4 text-center items-center ">
                        <h3>Informe seu CEP</h3>
                        <InputMask
                            mask="99-999999"
                            className="h-8 px-2 mr-2 bg-[#e7e7e7]"
                            placeholder="99-999999"
                            onChange={(e) => setCep(e.target.value )}
                        />
                        <button className="bg-[#5C832F] mx-2 w-24 h-9 rounded-lg">Procurar</button>
                    </div>
                </div>
                <div className="border-solid border-[#5C832F] border-3">
                    <ul className="list-disc">
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>

                    </ul>
                </div>
            </div>
            <div className="col-start-5 ">
                <img src={require('../../assets/salsicha.jpg')} className=""/>
            </div>
        </div>
    );
}


export default Mapa;