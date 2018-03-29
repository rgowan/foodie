import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

const mapStateToProps = (state) => {
  return {
    foods: state.food.foods
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setFoods: (foods) => dispatch({
      type: 'SET_FOODS',
      foods
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

  render() {
    const { foods } = this.props;

    return (
      <div className="row">
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

export default connect(mapStateToProps, mapDispatchToProps)(Index);
