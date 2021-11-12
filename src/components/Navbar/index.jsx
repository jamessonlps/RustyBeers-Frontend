import { Link } from "react-router-dom";

import LogoIamge from '../../assets/logo.png';
import { NavContainer } from "./styles";

export function Navbar() {
    return (
        <NavContainer>
            <Link className="logo-div" to="/" style={LinkStyle}>
                <img src={LogoIamge} alt="logo" />
                <p>Rusty Beers</p>
            </Link>
            <Link to="/beers" style={LinkStyle}>Beers</Link>
            <Link to="/login" style={LinkStyle}>Login | Sign In</Link>
        </NavContainer>
    );
}

const LinkStyle = {
    textDecoration: 'none',
    color: 'white',
}
