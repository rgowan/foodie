import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

import Filters from '../utility/Filters';

const mapStateToProps = (state) => {
  return {
    foods: state.food.foods,
    activeFilter: state.filter
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setFoods: (foods) => dispatch({
      type: 'SET_FOODS',
      foods
    }),
    setFilter: (filter) => dispatch({
      type: 'SET_FILTER',
      filter
    })
  };
};

class Index extends Component {
  componentDidMount() {
    const { setFoods } = this.props;

    axios
      .get('/api/foods')
      .then(res => setFoods(res.data))
      .catch(err => console.log(err));
  }

  handleFilterChange = (filter) => {
    const { setFilter } = this.props;
    setFilter(filter);
  }

  foodsFilter = () => {
    const { activeFilter, foods } = this.props;

    switch(activeFilter) {
      case 'SHOW_ALL':
        return foods;
      case 'SHOW_BREAKFAST':
        return foods.filter(food => food.category === 'Breakfast');
      case 'SHOW_LUNCH':
        return foods.filter(food => food.category === 'Lunch');
      case 'SHOW_DINNER':
        return foods.filter(food => food.category === 'Dinner');
      case 'SHOW_DESERT':
        return foods.filter(food => food.category === 'Desert');
    }
  }

  render() {
    const { foods, activeFilter } = this.props;

    return (
      <Fragment>
        <Filters
          handleFilterChange={this.handleFilterChange}
          activeFilter={activeFilter}
        />
        <div className="row">
          {this.foodsFilter().map(food =>
            <div key={food.id} className="image-tile col-md-4 col-sm-6 col-xs-12">
              <Link to={`/foods/${food.id}`}>
                <img src={food.image} className="img-responsive" />
              </Link>
            </div>
          )}
        </div>
      </Fragment>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);
