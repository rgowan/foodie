import React from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom';

class FoodsIndex extends React.Component {
  state = {
    foods: []
  }

  componentWillMount() {
    Axios
      .get('/api/foods')
      .then(res => this.setState({foods: res.data}))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <div className="row">
          {this.state.foods.map(food => {
            return(
              <div key={food._id} className="tile col-md-4">
                <Link to={`/${food._id}`}>
                  <img src={food.image} width="100%"/>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default FoodsIndex;
