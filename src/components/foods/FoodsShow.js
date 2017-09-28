import React from 'react';
import {Link} from 'react-router-dom';
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

  deleteFood = ({ _id }) => {
    Axios
      .delete(`/api/foods/${_id}`)
      .then(() => this.props.history.push('/'));
  }

  render() {
    return (
      <div className="row">
        <div className="page-banner col-md-12">
          <BackButton history={this.props.history} />
        </div>
        <div className="image-tile col-md-6">
          <img src={this.state.food.image} className="img-responsive" />
        </div>
        <div className="col-md-6">
          <h3>{this.state.food.title}</h3>
          <h4>{this.state.food.category}</h4>
          <button className="standard-button">
            <Link to={`/foods/${this.state.food._id}/edit`}>
              <i className="fa fa-pencil" aria-hidden="true"></i>Edit
            </Link>
          </button>
          <button className="main-button" onClick={() => this.deleteFood(this.state.food)}>
            <i className="fa fa-trash" aria-hidden="true"></i>Delete
          </button>
        </div>
      </div>
    );
  }
}

export default FoodsShow;
