import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    a {
        text-decoration: none;
        align-self: center;
        text-align: center;

        font-size: 1rem;
        font-weight: 600;
        background: white;
        border: 1px solid var(--main-orange);
        border-radius: 0.3rem;
        color: var(--main-orange);

        margin-top: 1rem;
        padding: 0.5rem 1.5rem;

        transition: 0.2s;

        &:hover {
            background: var(--main-orange);
            color: white;
            cursor: pointer;
        }
    }
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
        margin: 1.5rem;

        &.isActive {
            background: var(--main-orange);
            color: white;
        }
    }
`