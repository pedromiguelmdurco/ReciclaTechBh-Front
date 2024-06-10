


function Mapa() {
    return (
        <div className="grid grid-cols-2">
            <div className="col-start-1 col-end-4">
                <div className="ml-2">
                    <h1 className="text-[#5C832F] mx-2 my-2" >Encontre um ponto perto de você</h1>
                </div>
                <div className="box-decoration-slice mx-6 max-w-4xl">
                    <h5>Clique em localização atual  e escolha uma categoria para localizar um Ponto de Coleta ou Coleta Residencial mais próximo de você.</h5>
                </div>
                <div>
                    <button className="bg-[#5C832F] mx-2 w-24 h-9 rounded-lg">Loc atual</button>
                </div>
            </div>
            <div className="col-start-5 ">
                <h1>teste</h1>
            </div>
        </div>
    );
}


export default Mapa;