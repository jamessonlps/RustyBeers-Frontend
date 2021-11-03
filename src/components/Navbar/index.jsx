import { Link } from "react-router-dom";

import { NavContainer } from "./styles";

export function Navbar() {
    return (
        <NavContainer>
            <Link style={LinkStyle}>Página inicial</Link>
            <Link style={LinkStyle}>Bebidas</Link>
            <Link style={LinkStyle}>Entrar</Link>
        </NavContainer>
    );
}

const LinkStyle = {
    textDecoration: 'none',
    color: 'white',
}
