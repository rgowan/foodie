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
      <div className="row">
        <div className="page-banner col-md-12">
          <BackButton history={this.props.history} />
        </div>
        <div className="tile col-md-6">
          <img src={this.state.food.image} className="img-responsive" />
        </div>
        <div className="col-md-6">
          <h3>{this.state.food.title}</h3>
          <h4>{this.state.food.category}</h4>
        </div>
      </div>
    );
  }
}

export default FoodsShow;
