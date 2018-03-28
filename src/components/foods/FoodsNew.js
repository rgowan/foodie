import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import FoodsForm from './FoodsForm';

const mapStateToProps = (
  state
) => {
  return {
    formData: state.formData
  };
};

const mapDispatchToProps = (
  dispatch
) => {
  return {
    updateFieldValue: (name, value) => dispatch({ type: 'UPDATE_FIELD_VALUE', name, value }),
    createFood: (formData) => dispatch({ type: 'CREATE_FOOD', food: formData })
  };
};

class FoodsNew extends Component {
  handleChange = ({ target: { name, value }}) => {
    const { updateFieldValue } = this.props;
    updateFieldValue(name, value);
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { createFood, formData, history } = this.props;

    axios
      .post('/api/foods', formData)
      .then(res => {
        createFood(res.data);
        history.push('/');
      })
      .catch(err => console.log(err));
  }

  render() {
    const { formData } = this.props;

    return (
      <FoodsForm
        food={formData}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FoodsNew);
