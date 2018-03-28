import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import BackButton from '../utility/BackButton';

const mapStateToProps = (state) => {
  return {
    food: state.food
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchFood: (food) => dispatch({ type: 'GET_FOOD', food }),
    deleteFood: (id) => dispatch({ type: 'DELETE_FOOD', id })
  };
};

class FoodsShow extends Component {
  componentDidMount() {
    const foodId = this.props.match.params.id;
    const { fetchFood } = this.props;

    axios
      .get(`/api/foods/${foodId}`)
      .then(res => fetchFood(res.data))
      .catch(err => console.log(err));
  }

  deleteFood = (id) => {
    const foodId = this.props.match.params.id;
    const { deleteFood, history } = this.props;

    axios
      .delete(`/api/foods/${foodId}`)
      .then(() => {
        deleteFood(id);
        history.push('/');
      });
  }

  render() {
    const { food } = this.props;

    return(
      <div className="row">
        <div className="page-banner col-md-12">
          <BackButton />
        </div>
        <div className="image-tile col-md-6">
          <img className="img-responsive" src={food.image} />
        </div>
        <div className="col-md-6">
          <h3>{ food.title }</h3>
          <h4>{ food.category }</h4>
          <button className="standard-button">
            <Link to={`/foods/${food.id}/edit`} >
              <i className="fa fa-pencil" aria-hidden="true"></i>Edit
            </Link>
          </button>
          <button className="main-button" onClick={this.deleteFood}>
            <i className="fa fa-trash" aria-hidden="true"></i>Delete
          </button>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FoodsShow);
