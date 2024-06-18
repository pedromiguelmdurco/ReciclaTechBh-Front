import { Button } from 'react-bootstrap';
import prefeitura from '../../assets/logoPrefeituraBranca.png'
import proda from '../../assets/logoProdabelBRANCA.png'
import { Link } from 'react-router-dom';
function Footer(){

    
    return(
        <div className="bg-[#5C832F] flex flex-col md:flex-row w-full mt-10 py-4 justify-between items-center">
            <div className="flex flex-col md:flex-row h-full w-full md:w-1/4 items-center justify-center mb-4 md:mb-0">
            <img
                    src={prefeitura}
                    className='h-20 w-36 mb-4 md:mb-0 md:mr-4'
                    alt="Prefeitura"
                />
                <img
                    src={proda}
                    className='h-9 w-52'
                    alt="Proda"
                />
            </div>
            <div className='flex flex-col md:flex-row justify-center items-center mb-4 md:mb-0'>
                <a className='px-5 text-white no-underline mb-2 md:mb-0 font-bold' href='https://ead.pbh.gov.br/' target='_blank' rel="noopener noreferrer">Plataforma de ensino PBH</a>
                <a className='px-5 text-white no-underline mb-2 md:mb-0 font-bold' href='https://www.youtube.com/watch?v=C8INbBUzn2A' target='_blank' rel="noopener noreferrer">Logística Reversa</a>
                <a className='px-5 text-white no-underline font-bold' href='https://prefeitura.pbh.gov.br/sutransp/LGPD' target='_blank' rel="noopener noreferrer">LGPD</a>
            </div>
            <div className="flex flex-col h-full w-full md:w-1/4 items-center">
                <ul className="text-white flex flex-col items-center text-center font-bold space-y-2">
                    <li><Link to={"/sobre"} className='decoration-none text-white no-underline'>Sobre nós</Link></li>
                    <li><Link to={"/politica"} className='decoration-none text-white no-underline'>Política de Privacidade</Link></li>
                    <li><Link to={"/Contato"} className='decoration-none text-white no-underline'>Contato</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;