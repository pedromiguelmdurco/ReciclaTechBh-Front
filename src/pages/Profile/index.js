import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';


function Profile(){

    /*const [profiles, setFilmes] = useState;

    useEffect(()=>{
        const lista = ["joao",'pedro','matheus','jorge']
    }, []);*/

    return(
        <div className='container'>
            <img className='imagemprof' src=''></img>
            <h1>Nome Nome</h1>
            <ul className='lista'>
                <li>Nome Completo</li>
                <li>CEP</li>
                <li>Empresas contatas</li>
            </ul>

               
        </div>
    );
}


export default Profile;