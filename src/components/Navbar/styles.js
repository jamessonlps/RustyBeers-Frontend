import styled from "styled-components";

export const NavContainer = styled.nav`
    display: flex;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    height: 6rem;
    padding: 0 1rem;

    background: var(--blue-light);

    a {
        font-size: 1.3rem;
        font-weight: 500;

        &.logo-div {
            display: flex;
            justify-content: center;
            align-items: center;

            p {
                font-size: 1.5rem;
                font-weight: 600;
                padding-left: 0.5rem;
            }
        }
    }
`