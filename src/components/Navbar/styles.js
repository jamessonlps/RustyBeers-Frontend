import styled from "styled-components";

export const NavContainer = styled.nav`
    display: flex;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;

    position: -webkit-sticky;
    position: sticky;
    top: 0;

    width: 100%;
    height: 6rem;
    padding: 0 1rem;

    background: var(--main-red);

    a {
        font-size: 1.1rem;
        font-weight: 500;
        color: white;

        &.logo-div {
            display: flex;
            justify-content: center;
            align-items: center;

            p {
                font-size: 1.3rem;
                font-weight: 600;
                padding-left: 0.5rem;
            }
        }
    }

    button {
        border: none;
        background: none;
        color: white;
        font-weight: 500;
        font-size: 1.1rem;
    }
`