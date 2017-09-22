import React from 'react';
import ReactDOM from 'react-dom';

import foodsIndex from './components/foodsIndex';

import './scss/style.scss';

class App extends React.Component {

  render() {
    return (
      <main>
        <h1>Infamous foods</h1>
        <nav>
          <li>All foods</li>
          <li>Add food</li>
        </nav>
        <foodsIndex />
      </main>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
