import { Route, Switch } from 'react-router-dom';

import { Navbar } from './components/Navbar';
import { HomePage } from './views/HomePage/index';
import { Login } from './views/Login/index';
import { BeersList } from './views/BeersList';
import { BeerView } from './views/BeerView';
import { Loading } from './components/Loading';

import { GlobalStyle } from './styles/global';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path = "/" component={HomePage} />
        <Route exact path = "/login" component={Login} />
        <Route exact path = "/beers" component={BeersList} />
        <Route path = "/beers/:id" component={BeerView} />
        <Route path = "/loading" component={Loading} />
      </Switch>

      <GlobalStyle />
    </>
  );
}

export default App;
