import { combineReducers } from 'redux';

const foods = (state = [], action) => {
  switch(action.type) {
    case 'GET_FOODS':
      return action.foods;
    case 'CREATE_FOOD':
      return [...state, { ...action.food }];
    case 'UPDATE_FOOD':
      return state.map(food => {
        if(food.id !== action.id) return food;

        food = {...action.food};
        return food;
      });
    case 'DELETE_FOOD':
      return state.filter(food => food.id !== action.id);
    default:
      return state;
  }
};

const food = (state = {}, action) => {
  switch(action.type) {
    case 'GET_FOOD':
      return action.food;
    default:
      return state;
  }
};

export default combineReducers({ foods, food });
