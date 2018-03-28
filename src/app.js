import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import store from './reducers/foods';
import Header from './components/utility/Header';
import Routes from './components/utility/Routes';

import 'bootstrap-css-only';
import 'font-awesome/css/font-awesome.css';

import './scss/style.scss';

class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(store)}>
        <Router>
          <main className="container">
            <Header />
            <Routes />
          </main>
        </Router>
      </Provider>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
