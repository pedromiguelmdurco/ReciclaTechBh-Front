import { Link } from "react-router-dom";
import './header.css';

function Header(){
    return(
        <header>
            <Link to="/">Descarte</Link>
            <Link to="/login">Login</Link>
            
        </header>
    );
}


export default Header;