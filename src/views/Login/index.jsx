import { useState } from "react";
import { Redirect, useHistory } from "react-router";
import { useUser } from "../../hooks/useContextUser";
import { Container, FormContainer } from "./styles";
import { loggin } from "../../services/api";
import { Link } from "react-router-dom";


export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [msg, setMsg] = useState('');
  const [loading, setLoading] = useState(false);

  const { setUserData, logged, setLogged } = useUser();
  const history = useHistory();

  if (logged === true) {
    return (<Redirect to="/" />);
  }

  async function handleLogin(event) {
    event.preventDefault();
    setLoading(true);
    setMsg('');

    if (email === '' || password === '') {
      setMsg('Fields cannot be empty');
      setLoading(false);
      return;
    }

    let logginResponse = await loggin(email, password)
      .then(response => response)
      .catch((err) => {
        setMsg("An error has occurred. Please try again");
        setLoading(false);
        return;
      });

    setLoading(false);

    if (logginResponse === 'incorrect password' || logginResponse === 'user does not exist') {
      setMsg('Please check your information and try again');
      setLoading(false);
    }
    else {
      window.localStorage.setItem('rusty-beers/userData', JSON.stringify(logginResponse));
      setUserData(logginResponse);
      setUserData(logginResponse);
      setLogged(true);
      
      history.push('/');
    }
  }


  return (
    <Container>
      <FormContainer>
        <h1>Sign-In</h1>

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

        {msg ? <p>{msg}</p> : null}

        <button 
          disabled={loading === true}
          type="submit" 
          onClick={handleLogin}>
            Continue
        </button>
      </FormContainer>
      <Link to="/register" >Don't have an account? Register here</Link>
    </Container>
  )
}