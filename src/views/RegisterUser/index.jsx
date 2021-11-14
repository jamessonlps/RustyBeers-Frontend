import { useState } from "react";
import { Redirect } from "react-router";
import { useUser } from "../../hooks/useContextUser";
import { register } from "../../services/api";
import { Container } from "./styles";

export function RegisterUser() {
  const [name, setName]         = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');

  const { setUserData, logged, setLogged } = useUser();

  if (logged === true) {
    return (<Redirect to="/" />);
  }

  async function handleRegister(event) {
    event.preventDefault();
    await register(name, lastname, email, password)
      .then((res) => {
        if (res.email) {
          window.localStorage.setItem('rusty-beers/userData', JSON.stringify(res));
          setLogged(true);
          setUserData(res);
          console.log(res);

          return (<Redirect to="/" />)
        }
        else {
          console.log("user already exists");
        }
      })
      .catch((err) => console.log(err.message))
  }
  
  return (
    <Container>
      <form>
        <input type="text" placeholder="name" onChange={e => setName(e.target.value)} />
        <input type="text" placeholder="lastname" onChange={e => setLastname(e.target.value)} />
        <input type="text" placeholder="email" onChange={e => setEmail(e.target.value)} />
        <input type="password" placeholder="password" onChange={e => setPassword(e.target.value)} />

        <button type="submit" onClick={handleRegister} >Register</button>
      </form>
    </Container>
  );
}