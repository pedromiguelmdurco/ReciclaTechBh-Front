import { Button } from 'react-bootstrap';
import prefeitura from '../../assets/pref.png'
import proda from '../../assets/proda.png'
import { Link } from 'react-router-dom';
function Footer(){

    
    return(
        <div className="bg-[#5C832F] flex w-full mt-10 py-4 justify-between">
            <div className="flex flex-row  h-full w-1/4 items-center justify-center">
                <img
                    src={prefeitura}
                    className='h-20 w-36  '
                />
                <img
                    src={proda}
                    className='h-9 w-52 '
                />
            </div>
            <div className="flex flex-col  h-full w-1/4">
                <ul className="text-white flex flex-col justify-center text-center font-bolder" target = "_blank">
                    <li><Link to={"/sobre"} className='decoration-none text-white no-underline'>Sobre nós</Link></li>
                    <li><Link to={"/politica"} className='decoration-none text-white no-underline'>Politica de Privacidade</Link></li>
                    <li><Link to={"/Contato"}  className='decoration-none text-white no-underline'>Contato</Link></li>
                </ul>
            </div>
            
            
        </div>
    );
}

export default Footer;