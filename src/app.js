import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import 'bootstrap-css-only';
import 'font-awesome/css/font-awesome.css';
import './scss/style.scss';

import food from './reducers/foods.js';
import form from './reducers/form.js';
import filter from './reducers/filter.js';
const store = combineReducers({ food, form, filter })

import Header from './components/utility/Header';
import Routes from './components/utility/Routes';

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
