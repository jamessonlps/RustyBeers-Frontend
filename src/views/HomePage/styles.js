import styled from "styled-components";

export const Container = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;

    h1 {
        text-align: center;
        margin: 3rem 0 2rem 0;
    }

    div {
        &.title-calculator {
            background: white;
        }
    }
`

export const HeaderContent = styled.div`
    display: flex;
    flex-direction: column;

    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    border-radius: 1rem;

    padding: 3rem;
    max-width: 50rem;

    a {
        text-decoration: none;
        align-self: flex-start;

        font-size: 1.2rem;
        font-weight: 600;
        background: var(--blue-light);
        color: white;

        margin-top: 2rem;
        padding: 0.5rem 2rem;

        border: none;
        border-radius: 0.3rem;

        transition: 0.2s;

        &:hover {
            background: var(--blue-light2);
        }
    }
`

export const CardsSectionContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;

    width: 100%;
    padding: 0 1rem 3rem 1rem ;
`

export const CalculatorContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;

    background: white;

    padding: 4rem 0 2rem 0;

    ul {
        list-style-type: none;
    }

    li {
        font-size: 1.2rem;
        margin-top: 1.2rem;
    }

    div {
        &.text-calculator-container {
            display: flex;
            flex-direction: column;
            max-width: 30rem;
        }
    }

    button {
        align-self: center;

        background: var(--blue-light);
        color: white;
        font-weight: 600;

        margin-top: 2rem;
        padding: 0.5rem 2rem;

        border: none;
        border-radius: 0.3rem;

        transition: 0.2s;

        &:hover {
            background: var(--blue-light2);
        }
    }
`