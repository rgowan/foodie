import React from 'react';

const BackButton = ({history}) => {
  return (
    <div>
      <button
        onClick={() => history.goBack()}>
        <i className="fa fa-arrow-left" aria-hidden="true"></i>Back
      </button>
    </div>
  );
};

export default BackButton;
