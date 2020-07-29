import React from 'react';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import GlobalStyled from './styles/globalStyles.js';
import Routes from './routes';
import history from './services/history'

function App() {
  return (
    <>
      <Route history={history}>
        <Header />
        <GlobalStyled />
        <Routes />
      </Route>
    </>
  );
}

export default App;
