import styled from "styled-components";

export const Container = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
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
        background: var(--main-red);
        color: white;

        margin-top: 2rem;
        padding: 0.5rem 2rem;

        border: none;
        border-radius: 0.3rem;

        transition: 0.2s;
    }
`

export const CardsSectionContainer = styled.section`
    display: flex;
    flex-direction: column;
    background: white;
    width: 100%;
    min-height: 100vh;

    h1 {
        font-size: 2.5rem;
        text-align: center;
        color: var(--main-red);
        margin: 3rem 0 0.1rem 0;
    }

    hr {
        align-self: center;
        width: 70%;
        height: 1px;
        margin-bottom: 2rem;
    }

    a {
        text-decoration: none;
        text-align: center;
        align-self: center;
        
        margin-top: 1rem;
        padding: 0.5rem 1.5rem;
        width: 15rem;

        font-size: 1rem;
        font-weight: 600;
        background: white;
        
        border: 1px solid var(--main-orange);
        border-radius: 0.3rem;
        color: var(--main-orange);

        transition: 0.2s;

        &:hover {
            background: var(--main-orange);
            color: white;
            cursor: pointer;
        }
    }
`

export const CardsSectionContent = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    background: white;

    img {
        max-width: 40rem;
        max-height: 40rem;
        align-self: center;
    }

    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    button {
        align-self: center;
        width: 15rem;
    }
`

export const Card = styled.div`
    display: flex;
    flex-direction: row;
    max-width: 25rem;

    margin: 1rem;
    padding: 1.5rem;

    border: 1px solid var(--main-orange);
    border-radius: 0.3rem;

    h2 {
        color: var(--main-orange);
    }

    p {
        color: var(--light-gray);
        font-weight: 500;
    }
`

export const CalculatorSectionContainer = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 90vh;
    background: white;

    h1 {
        font-size: 2.5rem;
        text-align: center;
        color: var(--main-red);
        margin: 3rem 0 0.1rem 0;
    }

    hr {
        align-self: center;
        width: 70%;
        height: 1px;
        margin-bottom: 2rem;
    }

    button {
        margin-top: 1.5rem;
    }
`

export const CalculatorContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;

    /* background: white; */

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
            justify-content: center;
            max-width: 30rem;
        }
    }
`