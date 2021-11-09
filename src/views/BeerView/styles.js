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

    width: 100%;
    margin-top: 5rem;

    div {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    }

    h1 {
        font-size: 3rem;
    }

    p {
        &.tagline {
            font-size: 2rem;
            font-style: italic;
        }

        &.brewed {
            font-size: 1.5rem;
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

    table {
        width: 100%;
        border-spacing: 0.1rem 0.1rem;
        margin: 1rem 0;
        border-radius: 0.3rem;
    }
    
    th {
        text-align: left;
        padding: 0.6rem 1rem;
        background: white;
        width: 18rem;
    }
    
    td {
        background: white;
        padding: 0.6rem 1rem;
    }
`