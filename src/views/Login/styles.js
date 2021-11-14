import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 7rem);
  width: 100%;

  a {
    text-decoration: none;
    margin-top: 0.5rem;

    transition: 0.2s;

    &:hover {
      cursor: pointer;
      color: var(--blue-light2);
    }
  }
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 30rem;

  padding: 2rem;

  background: white;
  border: 1px solid gray;
  border-radius: 0.3rem;

  h1 {
    text-align: center;
  }

  input {
    border: none;
    border-radius: 0.3rem;
    background: var(--background);
    
    padding: 0.8rem;
    margin: 1rem 0;
  }

  button {
    text-decoration: none;

    font-weight: 600;
    background: var(--blue-light);
    color: white;

    margin-top: 1.5rem;
    padding: 0.5rem 2rem;

    border: none;
    border-radius: 0.3rem;

    transition: 0.2s;

    &:hover {
      background: var(--blue-light2);
      cursor: pointer;
    }
  }

  p {
    align-self: center;
    color: red;
  }
`