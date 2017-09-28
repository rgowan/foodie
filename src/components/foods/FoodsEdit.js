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
  };

  componentDidMount() {
    Axios
      .get(`api/foods/${this.props.match.params.id}`)
      .then(res => this.setState({ food: res.data }))
      .catch(err => console.log(err));
  }

  handleChange = ({target: {name, value} }) => {
    this.setState(prevState => {
      prevState.food[name] = value;
      return prevState;
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    Axios
      .put(`api/foods/${this.props.match.params.id}`, this.state.food)
      .then(res => this.props.history.push(`/foods/${res.data._id}`))
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

export default FoodsEdit;
