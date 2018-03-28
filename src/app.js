import React           from 'react';
import ReactDOM        from 'react-dom';
import { createStore } from 'redux';
import { Provider }    from 'react-redux';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import reducer    from './reducers/foods';
import FoodsIndex from './components/foods/FoodsIndex';
import FoodsShow  from './components/foods/FoodsShow';

import 'bootstrap-css-only';
import 'font-awesome/css/font-awesome.css';

import './scss/style.scss';

class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <Router>
          <div className="container">
            <header>
              <h1><Link to="/">foodie</Link></h1>
              <h2>For the <span>foodie</span> in everyone...</h2>
              <hr />
              <i className="fa fa-cutlery"></i>
            </header>
            <main>
              <Switch>
                {/* <Route path="/foods/:id/edit" component={FoodsEdit} />
                <Route path="/foods/new" component={FoodsNew} /> */}
                <Route path="/foods/:id" component={FoodsShow} />
                <Route exact path="/" component={FoodsIndex} />
              </Switch>
            </main>
          </div>
        </Router>
      </Provider>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
