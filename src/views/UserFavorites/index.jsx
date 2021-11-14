import { useEffect, useState } from "react";
import { Redirect } from "react-router";
import { useUser } from '../../hooks/useContextUser';
import { getBeersByIds, getFavoritesBeers } from "../../services/api";
import { CardBeer } from '../../components/CardBeer/index';
import { Loading } from '../../components/Loading/index';
import { BeersContainer, Container } from "./styles";

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
            setMsg('Error loading drinks');
            setLoading(false);
          });
      })
      .catch((err) => {
        setMsg('Error identifying drinks');
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

  if (loading) {
    return (
      <Loading />
    );
  } 
  else {
    return (
      <Container>
        <h1>My favorite beers</h1>

        {msg ? <p>{msg}</p> : null}

        {beers.length === 0 ? <span>Your favorites list is empty &#128532;</span> : null}

        <BeersContainer>
          {beers.map((item) => (
            <CardBeer info={item} beers={beers} setBeers={setBeers} ></CardBeer>
          ))}
        </BeersContainer>

      </Container>
    );
  }
}