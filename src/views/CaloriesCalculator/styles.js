import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const FormCalculator = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;

  width: 30rem;
  margin-top: 3rem;
  padding: 2rem;

  background: white;
  border: 1px solid var(--border);
  border-radius: 0.3rem;

  h1 {
    align-self: center;
    margin-bottom: 1rem;
    color: var(--main-red);
  }

  label {
    color: var(--text-body);
  }

  input {
    border: none;
    border-radius: 0.3rem;
    background: var(--background);
    
    padding: 0.8rem;
    margin: 1rem 0;
  }

  button {
    margin-bottom: 1.5rem;
  }
`