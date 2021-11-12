import { useState } from "react";
import { Redirect } from "react-router";
import { useUser } from "../../hooks/useContextUser";
import { Container } from "./styles";
import { loggin } from "../../services/api";


export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [msg, setMsg] = useState('');
  const [loading, setLoading] = useState(false);

  const { setUserData, logged, setLogged } = useUser();

  if (logged === true) {
    return (<Redirect to="/" />);
  }

  async function handleLogin(event) {
    event.preventDefault();
    setLoading(true);
    setMsg('');
    
    let logginResponse = await loggin(email, password)
      .then(response => response)
      .catch((err) => {
        setMsg("An error has occurred. Please try again");
      });

    setLoading(false);

    if (logginResponse === 'incorrect password' || logginResponse === 'user does not exist') {
      setMsg(logginResponse);
    }
    else {
      // window.localStorage.setItem('user', JSON.stringify(logginResponse));
      // console.log("TUDO CERTINHO");
      setUserData(logginResponse);
      setLogged(true);
    }
  }


  return (
    <Container>
      <h1>Página de Login</h1>
      <form>
        <input type="text" placeholder="Email" onChange={e => setEmail(e.target.value)} />
        <input type="text" placeholder="Password"  onChange={e => setPassword(e.target.value)} />

        {msg ? <p>{msg}</p> : null}

        <button type="submit" onClick={handleLogin}>Loggin</button>
      </form>
    </Container>
  )
}