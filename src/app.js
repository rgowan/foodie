import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import FoodsIndex from './components/foods/FoodsIndex';
import FoodsShow from './components/foods/FoodsShow';

import 'bulma/css/bulma.css';
import 'font-awesome/css/font-awesome.css';
import './scss/style.scss';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
          <header>
            <h1>foodie</h1>
            <h2>For the <span>foodie</span> in everyone...</h2>
            <hr />
            <i className="fa fa-cutlery" aria-hidden="true"></i>
          </header>
          <main>
            <Route exact path="/" component={FoodsIndex} />
            <Route path="/:id" component={FoodsShow} />
          </main>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
