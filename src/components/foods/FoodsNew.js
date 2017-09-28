import React from 'react';
import Axios from 'axios';

import FoodsForm from './FoodsForm';

class FoodsNew extends React.Component {
  state = {
    food: {
      title: '',
      image: '',
      category: ''
    }
  };

  handleChange = ({target: {name, value} }) => {
    this.setState(prevState => {
      prevState.food[name] = value;
      return prevState;
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    Axios
      .post('/api/foods', this.state.food)
      .then(() => this.props.history.push('/'))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <FoodsForm
        history={this.props.history}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        food={this.state.food}
      />
    );
  }
}

export default FoodsNew;
