import Texto from "./texto";


function Sobre(){
    return(
        <div>

            <div className="ml-2">
                <h1 className="text-[#5C832F] mx-2 my-2" >Sobre Nós</h1>
            </div>
            <div className="box-decoration-slice border-solid border-2 border-[#5C832F] mx-6">
                <Texto/>
            </div>
        </div>
    )
}

export default Sobre;