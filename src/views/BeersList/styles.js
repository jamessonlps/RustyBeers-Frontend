import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

export const ListBeersContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    width: 100%;
`

export const Pagination = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;

    button {
        width: 2rem;
        height: 2rem;
        margin: 1rem;

        font-weight: 500;

        border: 1px solid var(--blue-light2);
        border-radius: 0.2rem;

        &.isActive {
            background: var(--blue-light);
            color: white;
        }
    }
`