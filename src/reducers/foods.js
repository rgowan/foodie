import { combineReducers } from 'redux';

const defaultState = {
  foods: [],
  food: {}
};

function updateFoodArray(state, action) {
  return state.foods.map(food => {
    if(food.id !== action.id) return food;
    food = action.food;
    return food;
  });
}

const food = (state = defaultState, action) => {
  switch(action.type) {
    case 'SET_FOODS':
      return { ...state, foods: action.foods };
    case 'SET_FOOD':
      return { ...state, food: action.food };
    case 'CREATE_FOOD':
      return { ...state, foods: [...state, { ...action.food }] };
    case 'UPDATE_FOOD':
      return { ...state, foods: updateFoodArray(state, action) };
    case 'DELETE_FOOD':
      return { ...state, foods: state.foods.filter(food => food.id !== action.id) };
    default:
      return state;
  }
};

const formData = (state = {
  title: '',
  image: '',
  category: ''
}, action) => {
  switch(action.type) {
    case 'UPDATE_FIELD_VALUE':
      return {...state, [action.field]: action.value };
    case 'SET_FORM_DATA':
      return action.food;
    default:
      return state;
  }
};

export default combineReducers({ food, formData });
