import React from 'react';

class foodsIndex extends React.Component {

  state = {
    foods: []
  };

  render() {
    return (
      <ul id="foods">
        {this.state.foods.map(food => <li key={food.id}>
          <strong>{food.name}</strong>
          <em>{food.location}</em>
          <span className={'status ' + food.status.toLowerCase()}>{food.status.toUpperCase()}</span>
          <button className="delete" onClick={() => this.deletefood(food)}>x</button>
        </li>)}
      </ul>
    );
  }
}

export default foodsIndex;
