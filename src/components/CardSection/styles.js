import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    width: 20rem;
    height: 27rem;
    padding: 2rem 1rem;
    margin: 1rem 0;

    background: var(--background);
    border: 1px solid var(--blue-light);
    border-radius: 1rem;

    img {
        border-radius: 0.3rem;
        margin-bottom: 1rem;
    }

    div {
        text-align: center;
    }

    button {
        background: var(--blue-light);
        color: white;
        font-weight: 600;

        margin-top: 1rem;
        padding: 0.5rem 2rem;
        
        border: none;
        border-radius: 0.3rem;

        transition: 0.2s;

        &:hover {
            background: var(--blue-light2);
        }
    }
`