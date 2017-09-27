import React from 'react';

class BackButton extends React.Component {
  handleClick = () => {
    this.props.history.goBack();
  }

  render() {
    return (
      <div>
        <button
          onClick={this.handleClick}>
          <i className="fa fa-arrow-left" aria-hidden="true"></i>Back
        </button>
      </div>
    );
  }
}

export default BackButton;
