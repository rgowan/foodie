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
    setFormData: (food) => dispatch({
      type: 'SET_FORM_DATA',
      food
    }),
    resetFormData: () => dispatch({
      type: 'RESET_FORM_DATA'
    }),
    updateFieldValue: (field, value) => dispatch({
      type: 'UPDATE_FIELD_VALUE',
      field,
      value
    }),
    updateFood: (formData) => dispatch({
      type: 'UPDATE_FOOD',
      food: formData
    })
  };
};

class FoodsEdit extends Component {
  componentDidMount() {
    const foodId  = this.props.match.params.id;
    const { setFormData } = this.props;

    axios
      .get(`/api/foods/${foodId}`)
      .then(res => setFormData(res.data))
      .catch(err => console.log(err));
  }

  handleChange = ({ target: { name, value }}) => {
    const { updateFieldValue } = this.props;
    updateFieldValue(name, value);
  }

  componentWillUnmount() {
    const { resetFormData } = this.props;
    resetFormData();
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const foodId  = this.props.match.params.id;
    const { updateFood, formData, history } = this.props;

    axios
      .put(`/api/foods/${foodId}`, formData)
      .then(res => {
        updateFood(res.data);
        history.push(`/foods/${foodId}`);
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

export default connect(mapStateToProps, mapDispatchToProps)(FoodsEdit);
