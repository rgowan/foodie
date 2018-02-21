import React from 'react';
import Axios from 'axios';

import FoodsForm from './FoodsForm';

class FoodsEdit extends React.Component {
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
      .put(`/api/foods/${this.props.match.params.id}`, this.state.food)
      .then(() => this.props.history.push(`/foods/${this.props.match.params.id}`))
      .catch(err => console.log(err));
  }

  componentDidMount() {
    Axios
      .get(`/api/foods/${this.props.match.params.id}`)
      .then(res => this.setState({ food: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return(
      <FoodsForm
        food={this.state.food}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
      />
    );
  }
}

export default FoodsEdit;
