import React from 'react';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './store';
import Header from './components/Header';
import GlobalStyled from './styles/globalStyles';
import Routes from './routes';
import history from './services/history';

function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Router history={history}>
            <Header />
            <GlobalStyled />
            <ToastContainer autoClose={2500} />
            <Routes />
          </Router>
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
