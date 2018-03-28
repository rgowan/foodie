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
  }

  handleChange = ({ target: { name, value } }) => {
    const food = Object.assign({}, this.state.food, { [name]: value });
    this.setState({ food });
  }

  handleSubmit = e => {
    e.preventDefault();

    Axios
      .post('/api/foods', this.state.food)
      .then(() => this.props.history.push('/'))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <FoodsForm
        handleSubmit={ this.handleSubmit }
        handleChange={ this.handleChange }
        handleImageUpload={ this.handleImageUpload }
        food={ this.state.food }
      />
    );
  }
}

export default FoodsNew;
