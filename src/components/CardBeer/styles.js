import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 20rem;
    height: 27rem;

    justify-content: space-evenly;

    margin: 1rem;
    padding: 2rem;

    background: white;
    border-radius: 0.3rem;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 1.5px 5px 0 rgba(0, 0, 0, 0.19);

    h3 {
        text-align: center;
        font-size: 1.2rem;
    }

    a, button {
        text-decoration: none;
        align-self: center;

        font-size: 1rem;
        font-weight: 600;
        background: var(--blue-light);
        color: white;

        margin-top: 2rem;
        padding: 0.5rem 1.5rem;

        border: none;
        border-radius: 0.3rem;

        transition: 0.2s;

        &:hover {
            background: var(--blue-light2);
            cursor: pointer;
        }
    }

    p {
        font-weight: 500;
        
        &.description {
            font-weight: 400;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2; 
            -webkit-box-orient: vertical;
        }
    }
`

export const HeaderCard = styled.div`
    display: flex;

    div {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;

        padding-left: 0.8rem;

        p {
            align-self: center;
            text-align: center;
            font-size: 1.1rem;
            font-style: italic;
        }
    }
`