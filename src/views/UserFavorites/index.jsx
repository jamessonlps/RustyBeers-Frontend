import { useEffect, useState } from "react";
import { useUser } from '../../hooks/useContextUser';
import { getBeersByIds, getFavoritesBeers } from "../../services/api";
import { Container } from "./styles";
import { CardBeer } from '../../components/CardBeer/index';
import { Redirect } from "react-router";

export function UserFavorites() {
  const [beers, setBeers]       = useState([]);
  const [msg, setMsg]         = useState('');
  const [loading, setLoading] = useState(true);

  const { userData, setUserData, logged } = useUser();

  useEffect(async() => {
    await getFavoritesBeers(userData.email)
      .then(async(res) => {
        await getBeersByIds(res.favorites)
          .then((res) => {
            setBeers(res);
            setLoading(false);
          })
          .catch(() => {
            setMsg('error loading drinks');
            setLoading(false);
          });
      })
      .catch((err) => {
        setMsg('error identifying drinks');
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (!logged) {
      return (
        <Redirect to="/login" />
      );
    }
  }, [logged]);

  if (!logged) {
    return (
      <Redirect to="/login" />
    );
  }

  return (
    <Container>
      <h1>My favorites beers</h1>

      {msg ? <p>{msg}</p> : null}

      {beers.length === 0 ? <span>Your favorites list is empty &#128532;</span> : null}

      {beers.map((item) => (
        <CardBeer info={item} beers={beers} setBeers={setBeers} ></CardBeer>
      ))}
    </Container>
  );
}