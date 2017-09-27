import React from 'react';

class BackButton extends React.Component {
  handleClick = () => {
    this.props.history.goBack();
  }

  render() {
    return (
      <div>
        <button
          className="button is-info"
          onClick={this.handleClick}>
          Back
        </button>
      </div>
    );
  }
}

export default BackButton;
