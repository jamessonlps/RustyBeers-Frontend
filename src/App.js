import { Route, Switch } from 'react-router-dom';

import { Navbar } from './components/Navbar';
import { HomePage } from './views/HomePage/index';
import { Login } from './views/Login/index';
import { BeersList } from './views/BeersList';
import { BeerView } from './views/BeerView';

import { GlobalStyle } from './styles/global';
import { useEffect } from 'react';
import { useUser } from './hooks/useContextUser';

function App() {

  const { logged, setLogged } = useUser();

  useEffect(() => {
    const status = window.localStorage.getItem('rusty-beers/userData');
    if (status !== null) {
      console.log("logado")
    }
  }, [])

  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path = "/login" component={Login} />
        <Route exact path = "/" component={HomePage} />
        <Route exact path = "/beers" component={BeersList} />
        <Route path = "/beers/:id" component={BeerView} />
      </Switch>
      <GlobalStyle />
    </>
  );
}

export default App;
