import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const AddFoodLink = (
  
) => (
  <Link className="main-button" to="/foods/new">
    <i className="fa fa-plus" aria-hidden="true"></i>Add Food
  </Link>
);

const BackButton = ({
  history
}) => (
  <div>
    <button onClick={ history.goBack } className="main-button">
      <i className="fa fa-arrow-left" aria-hidden="true"></i>Back
    </button>
  </div>
);

const Banner = ({
  history
}) => (
  <div className="page-banner col-md-12">
    { history.location.pathname === '/' ?
      <AddFoodLink />
      :
      <BackButton history={history}/>
    }
  </div>
);

export default withRouter(Banner);
