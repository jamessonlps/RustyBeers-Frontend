import { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import { Navbar } from './components/Navbar';
import { HomePage } from './views/HomePage/index';
import { Login } from './views/Login/index';
import { BeersList } from './views/BeersList';
import { BeerView } from './views/BeerView';
import { RegisterUser } from './views/RegisterUser';
import { UserFavorites } from './views/UserFavorites';
import { CaloriesCalculator } from './views/CaloriesCalculator';
import { FiltersSearch } from './views/FiltersSearch/index';

import { useUser } from './hooks/useContextUser';
import { GlobalStyle } from './styles/global';

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
        <Route exact path = "/calculator" component={CaloriesCalculator} />
        <Route exact path = "/beers/filter" component={FiltersSearch} />
        <Route exact path = "/beers" component={BeersList} />
        <Route path = "/beers/:id" component={BeerView} />
      </Switch>
      <GlobalStyle />
    </>
  );
}

export default App;
