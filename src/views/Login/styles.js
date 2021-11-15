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
    color: var(--main-orange);
    transition: 0.2s;

    &:hover {
      color: var(--main-red);
    }
  }
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 30rem;
  width: 80%;

  padding: 2rem;

  background: white;
  border: 1px solid var(--border);
  border-radius: 0.3rem;

  h1 {
    text-align: center;
    color: var(--main-red);
  }

  input {
    border: none;
    border-radius: 0.3rem;
    background: var(--background);
    
    padding: 0.8rem;
    margin: 1rem 0;
  }

  p {
    align-self: center;
    color: red;
  }
`