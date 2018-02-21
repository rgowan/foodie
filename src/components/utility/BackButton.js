import React from 'react';
import { withRouter } from 'react-router-dom';

const BackButton = ({ history }) => {
  return(
    <div>
      <button onClick={ history.goBack } className="main-button">
        <i className="fa fa-arrow-left" aria-hidden="true"></i>Back
      </button>
    </div>
  );
};

export default withRouter(BackButton);
