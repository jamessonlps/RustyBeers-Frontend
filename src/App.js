import { Route, Switch } from 'react-router-dom';

import { HomePage } from './views/HomePage/index';
import { Login } from './views/Login/index';

import { GlobalStyle } from './styles/global';

function App() {
  return (
    <>
      <Switch>
        <Route exact path = "/" component={HomePage} />
        <Route exact path = "/entrar" component={Login} />
      </Switch>

      <GlobalStyle />
    </>
  );
}

export default App;
