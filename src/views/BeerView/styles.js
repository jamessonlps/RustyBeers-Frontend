import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    max-width: 80rem;
    margin: 0 auto;
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
        width: 80%;
    }

    h1 {
        font-size: 3rem;
        align-self: center;
        color: var(--main-red);
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
            color: var(--text-body);
        }

        &.brewed {
            font-size: 1.3rem;
        }
    }

    button {
        align-self: center;
    }
`

export const DetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 3rem 0;
    border-radius: 0.3rem;

    background: #f36e3733;

    div {
        display: flex;
        flex-wrap: wrap;
        
        button {
            margin: 1rem;

            &.isActive {
                background: var(--main-orange);
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