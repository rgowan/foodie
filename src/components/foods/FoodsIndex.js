import React from 'react';
import Axios from 'axios';

import { Link } from 'react-router-dom';

class FoodsIndex extends React.Component {
  state = {
    foods: [] 
  }

  componentDidMount() {
    Axios
      .get('/api/foods')
      .then(res => this.setState({ foods: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return(
      <div>
        <div className="row">
          <div className="page-banner col-md-12">
            <button className="main-button">
              <Link to="/foods/new">
                <i className="fa fa-plus" aria-hidden="true"></i>Add Food
              </Link>
            </button>
          </div>
          { this.state.foods.map(food =>
            <div key={food.id} className="image-tile col-md-4 col-sm-6 col-xs-12">
              <Link to={`/foods/${food.id}`}>
                <img src={food.image} className="img-responsive" />
              </Link>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default FoodsIndex;
