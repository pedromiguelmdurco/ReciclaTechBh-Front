

function Contato(){
    return(
        <div className="flex-col">

            <div>
                <h3 className="text-[#5C832F] mx-2 my-2" >Contato</h3>
            </div>
            <div className="flex-col">
                <input type="email" name="email" placeholder="  informe seu email" 
                className="box-decoration-slice border-solid border-2 border-[#5C832F] mx-6 w-3/4" /><br/>
                <input type="text"  placeholder="  Digite o Assunto" 
                className="box-decoration-slice border-solid border-2 border-[#5C832F] mx-6 my-2 w-3/4 " />
            </div>
            <div className="flex-col">
                <textarea placeholder="  Digite sua mensagem aqui"
                className="box-decoration-slice border-solid border-2 border-[#5C832F] mx-6 my-2 w-3/4 h-55screen "/><br/>
                <button class="bg-[#2c6825] text-white w-1/6 rounded-lg h-8 duration-100 hover:bg-[#398830] font-bold px-2 float-right mr-96"
                >Enviar</button>
            </div>
        </div>
    )
}

export default Contato;