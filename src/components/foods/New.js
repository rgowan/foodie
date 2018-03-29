import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import Form from './Form';

const mapStateToProps = (state) => {
  return {
    formData: state.form
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateFieldValue: (field, value) => dispatch({
      type: 'UPDATE_FIELD_VALUE',
      field,
      value
    }),
    resetFormData: () => dispatch({
      type: 'RESET_FORM_DATA'
    }),
    createFood: (formData) => dispatch({
      type: 'CREATE_FOOD',
      food: formData
    })
  };
};

class New extends Component {
  componentWillUnmount() {
    const { resetFormData } = this.props;
    resetFormData();
  }


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
      <Form
        food={formData}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(New);
