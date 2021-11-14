import { useState } from "react";
import { Redirect, useHistory } from "react-router";
import { Link } from "react-router-dom";
import { useUser } from "../../hooks/useContextUser";
import { register } from "../../services/api";
import { Container, FormContainer } from "./styles";

export function RegisterUser() {
  const [name, setName]         = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [msg, setMsg] = useState('');
  const [loading, setLoading] = useState(false);

  const { setUserData, logged, setLogged } = useUser();

  const history = useHistory();

  if (logged === true) {
    return (<Redirect to="/" />);
  }

  async function handleRegister(event) {
    event.preventDefault();
    setLoading(true);
    setMsg('');

    if (name.replace(/\s/g, '') === '' || lastname.replace(/\s/g, '') === '' || email.replace(/\s/g, '') === '' || password.replace(/\s/g, '') === '' || confirmPassword.replace(/\s/g, '') === '') {
      setMsg('Fields cannot be empty');
      setLoading(false);
      return;
    }
    else if (password.length < 6) {
      setMsg('Your password must be at least 6 characters long');
      setLoading(false);
      return;
    }
    else if (password !== confirmPassword) {
      setMsg('Passwords do not match');
      setLoading(false);
      return;
    }

    await register(name, lastname, email, password)
      .then((res) => {
        if (res.email) {
          window.localStorage.setItem('rusty-beers/userData', JSON.stringify(res));
          setLogged(true);
          setUserData(res);

          history.push('/');
        }
        else {
          setMsg("User already exists");
          setLoading(false);
        }
      })
      .catch((err) => {
        setMsg('An error has occurred. Please try again');
        setLoading(false);
      });
  }
  
  return (
    <Container>
      <FormContainer>
        <h1>Create account</h1>
        <input 
          type="text" 
          placeholder="Name" 
          onChange={e => setName(e.target.value)} 
        />
        <input 
          type="text" 
          placeholder="Last name" 
          onChange={e => setLastname(e.target.value)} 
        />
        <input 
          type="text" 
          placeholder="Email" 
          onChange={e => setEmail(e.target.value)} 
        />
        <input 
          type="password" 
          placeholder="Password" 
          onChange={e => setPassword(e.target.value)} 
        />
        <input 
          type="password" 
          placeholder="Confirm password" 
          onChange={e => setConfirmPassword(e.target.value)} 
        />

        {msg ? <p>{msg}</p> : null}

        <button 
          disabled={loading === true}
          type="submit" 
          onClick={handleRegister} >Register</button>
      </FormContainer>
      <Link to="login">Already have an account? Access here</Link>
    </Container>
  );
}