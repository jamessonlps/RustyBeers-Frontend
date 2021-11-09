import { Route, Switch } from 'react-router-dom';

import { Navbar } from './components/Navbar';
import { HomePage } from './views/HomePage/index';
import { Login } from './views/Login/index';
import { BeersList } from './views/BeersList';
import { BeerView } from './views/BeerView';

import { GlobalStyle } from './styles/global';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path = "/" component={HomePage} />
        <Route exact path = "/entrar" component={Login} />
        <Route exact path = "/cervejas" component={BeersList} />
        <Route path = "/cervejas/:id" component={BeerView} />
      </Switch>

      <GlobalStyle />
    </>
  );
}

export default App;
