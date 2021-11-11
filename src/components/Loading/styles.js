import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;

    div {
        display: flex;
        align-items: center;
        margin: 1rem;
        padding: 1.2rem;
        border: 1px solid var(--text-body);
        border-radius: 50%;
        width: 15rem;
        height: 15rem;
    }

    p {
        color: var(--blue-light);
        font-size: 1.3rem;
        font-weight: 600;
    }

`