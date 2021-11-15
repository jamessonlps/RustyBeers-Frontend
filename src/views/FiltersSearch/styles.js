import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  h1 {
    color: var(--main-red);
    font-size: 2rem;
    align-self: center;
  }
`

export const InputContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 90%;
  max-width: 40rem;

  padding: 1rem;
  margin-top: 1rem;

  border: 1px solid var(--border);
  border-radius: 0.3rem;

  background: white;

  input, select {
    border: none;
    border-radius: 0.3rem;
    background: var(--background);
    
    padding: 0.8rem;
    margin: 0.4rem 0;
  }
`

export const BeersContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  h3 {
    align-self: center;
    color: var(--main-orange);
    margin: 1rem 0;
  }
`