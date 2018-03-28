import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const AddFoodLink = () => (
  <Link className="btn main" to="/foods/new">
    <i className="fa fa-plus"></i>Add Food
  </Link>
);

const BackButton = ({ history }) => (
  <div>
    <button onClick={ history.goBack } className="btn main">
      <i className="fa fa-arrow-left"></i>Back
    </button>
  </div>
);

const Header = ({ history }) => (
  <header>
    <h1>foodie</h1>
    <h2>For the <span>foodie</span> in everyone...</h2>
    <hr />
    <i className="fa fa-cutlery"></i>
    <div>
      { history.location.pathname === '/' ?
        <AddFoodLink />
        :
        <BackButton history={history}/>
      }
    </div>
  </header>
);

export default withRouter(Header);
