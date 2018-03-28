import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    food: state.food.food
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setFood: (food) => dispatch({
      type: 'SET_FOOD',
      food
    }),
    deleteFood: (id) => dispatch({
      type: 'DELETE_FOOD',
      id
    })
  };
};

class FoodsShow extends Component {
  componentDidMount() {
    const foodId = this.props.match.params.id;
    const { setFood } = this.props;

    axios
      .get(`/api/foods/${foodId}`)
      .then(res => setFood(res.data))
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
        <div className="image-tile col-md-6">
          <img className="img-responsive" src={food.image} />
        </div>
        <div className="col-md-6">
          <h3>{ food.title }</h3>
          <h4>{ food.category }</h4>
          <Link className="btn standard" to={`/foods/${food.id}/edit`} >
            <i className="fa fa-pencil" aria-hidden="true"></i>Edit
          </Link>
          <button className="btn main" onClick={this.deleteFood}>
            <i className="fa fa-trash" aria-hidden="true"></i>Delete
          </button>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FoodsShow);
