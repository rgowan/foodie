import React    from 'react';
import Axios    from 'axios';
import { Link } from 'react-router-dom';

import BackButton from '../utility/BackButton';

class FoodsShow extends React.Component {
  state = {
    food: {}
  }

  deleteFood = () => {
    Axios
      .delete(`/api/foods/${this.props.match.params.id}`)
      .then(() => this.props.history.push('/'))
      .catch(err => console.log(err));
  }

  componentDidMount() {
    Axios
      .get(`/api/foods/${this.props.match.params.id}`)
      .then(res => this.setState({ food: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return(
      <div className="row">
        <div className="page-banner col-md-12">
          <BackButton />
        </div>
        <div className="image-tile col-md-6">
          <img src={this.state.food.image} className="img-responsive" />
        </div>
        <div className="col-md-6">
          <h3>{ this.state.food.title }</h3>
          <h4>{ this.state.food.category }</h4>
          <button className="standard-button">
            <Link to={`/foods/${this.state.food.id}/edit`} >
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

export default FoodsShow;
