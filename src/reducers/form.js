const defaultState = {
  title: '',
  image: '',
  category: ''
}

const form = (state = defaultState, action) => {
  switch(action.type) {
    case 'UPDATE_FIELD_VALUE':
      return {...state, [action.field]: action.value};
    case 'SET_FORM_DATA':
      return action.food;
    case 'RESET_FORM_DATA':
      return defaultState
    default:
      return state;
  };
};

export default form;