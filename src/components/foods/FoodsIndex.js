import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

import Banner from '../utility/Banner';

const mapStateToProps = (state) => {
  return {
    foods: state.foods
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchFoods: (foods) => dispatch({ type: 'GET_FOODS', foods }),
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
      <div className="row">
        <Banner />
        {foods.map(food =>
          <div key={food.id} className="image-tile col-md-4 col-sm-6 col-xs-12">
            <Link to={`/foods/${food.id}`}>
              <img src={food.image} className="img-responsive" />
            </Link>
          </div>
        )}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FoodsIndex);
