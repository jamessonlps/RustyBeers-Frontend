import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: 0 auto;

    a {
        text-decoration: none;
        align-self: center;

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
            cursor: pointer;
        }
    }
`

export const ImageTitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;

    background: white;
    border-radius: 0.3rem;
    
    width: 100%;
    margin-top: 3rem;
    padding: 4rem 0;

    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 70%;
    }

    h1 {
        font-size: 2.5rem;
        align-self: center;
    }

    hr {
        align-self: center;
        color: lightgray;
        margin-bottom: 2rem;
    }

    p {
        margin: 0.6rem 0;

        &.tagline {
            font-size: 1.6rem;
            font-style: italic;
        }

        &.brewed {
            font-size: 1.4rem;
        }
    }
`

export const DetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 3rem 0;
    border-radius: 0.3rem;

    background: #9933ff44;

    div {
        display: flex;
        
        button {
            margin: 1rem;
            padding: .6rem 1rem;
            
            background: white;
            color: var(--blue-light);
            border: 1.2px solid var(--blue-light);
            border-radius: .3rem;

            transition: 0.2s;

            &:hover {
                background: var(--blue-light);
                color: white;
            }

            &.isActive {
                background: var(--blue-light);
                color: white;
            }
        }

        &.details {
            display: flex;
            flex-direction: column;
            padding: 1rem;
        }

    }

    ul {
        list-style-type: none;
        li {
            padding: 0.2rem 0;
        }
    }

    p {
        &.topic {
            font-size: 1.2rem;
            font-weight: 500;
            margin: 0.7rem 0 0.5rem 0;
        }
        &.items {
            font-size: 1.2rem;
            padding: 0.5rem 0;
        }
    }

`