import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

import Food from '../utility/Food';

const mapStateToProps = (state) => {
  return {
    foods: state
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchFoods: (foods) => dispatch({ type: 'GET_FOODS', foods}),
    deleteFood: (id) => dispatch({ type: 'DELETE_FOOD', id })
  };
};

class FoodsIndex extends Component {
  componentDidMount() {
    const { fetchFoods } = this.props;

    axios
      .get('/api/foods')
      .then(res => fetchFoods(res.data))
      .catch(err => console.log(err));
  }

  render() {
    const { foods } = this.props;

    return (
      <Fragment>
        <div className="row">
          <div className="page-banner col-md-12">
            <Link className="main-button" to="/foods/new">
              <i className="fa fa-plus" aria-hidden="true"></i>Add Food
            </Link>
          </div>
          { foods.map(food =>
            <Food key={food.id} data={food} />
          )}
        </div>
      </Fragment>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FoodsIndex);
