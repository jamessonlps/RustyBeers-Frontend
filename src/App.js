import { Route, Switch } from 'react-router-dom';

import { Navbar } from './components/Navbar';
import { HomePage } from './views/HomePage/index';
import { Login } from './views/Login/index';
import { BeersList } from './views/BeersList';
import { BeerView } from './views/BeerView';
import { RegisterUser } from './views/RegisterUser';

import { GlobalStyle } from './styles/global';
import { useEffect } from 'react';
import { useUser } from './hooks/useContextUser';
import { UserFavorites } from './views/UserFavorites';

function App() {

  const { logged, setLogged, setUserData } = useUser();

  useEffect(() => {
    const status = window.localStorage.getItem('rusty-beers/userData');
    if (status) {
      setUserData(JSON.parse(status));
      setLogged(true);
    }
    else {
      setUserData({});
      setLogged(false);
    }
  }, []);

  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path = "/" component={HomePage} />
        <Route exact path = "/login" component={Login} />
        <Route exact path = "/register" component={RegisterUser} />
        <Route exact path = "/favorites" component={UserFavorites} />
        <Route exact path = "/beers" component={BeersList} />
        <Route path = "/beers/:id" component={BeerView} />
      </Switch>
      <GlobalStyle />
    </>
  );
}

export default App;
