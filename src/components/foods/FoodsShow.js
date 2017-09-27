import React from 'react';
import Axios from 'axios';

import BackButton from '../utility/BackButton';

class FoodsShow extends React.Component {
  state = {
    food: {}
  }

  componentWillMount() {
    Axios
      .get(`/api/foods/${this.props.match.params.id}`)
      .then(res => this.setState({food: res.data}))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <BackButton history={this.props.history} />
        <img src={this.state.food.image} />
        <h1>{this.state.food.title}</h1>
        <h2>{this.state.food.category}</h2>
      </div>
    );
  }
}

export default FoodsShow;
