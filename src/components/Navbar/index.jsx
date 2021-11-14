import { Link } from "react-router-dom";
import { useHistory } from "react-router";

import LogoIamge from '../../assets/logo.png';
import { NavContainer } from "./styles";
import { useUser } from "../../hooks/useContextUser";

export function Navbar() {
    const { userData, logged, setLogged, setUserData } = useUser();
    const history = useHistory();

    function loggout(e) {
        e.preventDefault();
        window.localStorage.removeItem('rusty-beers/userData');
        window.localStorage.clear();
        setLogged(false);
        setUserData({});
    
        history.push('/');
    }

    return (
        <NavContainer>
            <Link className="logo-div" to="/" style={LinkStyle}>
                <img src={LogoIamge} alt="logo" />
                <p>Rusty Beers</p>
            </Link>
            <Link to="/beers" style={LinkStyle}>Beers</Link>

            {logged ? (<Link style={LinkStyle} to="/favorites">Favorites</Link>) : null}

            {logged ? (
                <button onClick={loggout}>Loggout</button>
            ) 
            : (
                <Link to="/login" style={LinkStyle}>Login | Sign In</Link>
            )}
            
        </NavContainer>
    );
}

const LinkStyle = {
    textDecoration: 'none',
    color: 'white',
}
