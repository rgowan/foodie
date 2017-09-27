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
        <div className="columns is-0 is-multiline is-mobile">
          {this.state.foods.map(food => {
            return(
              <Link key={food._id} to={`/${food._id}`}>
                <div className="column">
                  <figure className="image">
                    <img src={food.image}/>
                  </figure>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}

export default FoodsIndex;
