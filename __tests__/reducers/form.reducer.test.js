import formReducer from '../../src/reducers/form';

describe('Form Reducer Tests', () => {

  it('Should return a default state', () => {
    expect(
      formReducer(undefined, { type: 'TESTING' })
    ).toEqual(
      {
        title: '',
        image: '',
        category: ''
      }
    )
  });

  describe('Actions', () => {
    it('should handle a UPDATE_FIELD_VALUE type', () => {
      const state = {
        title: '',
        image: '',
        category: ''
      }

      expect(
        formReducer(state, { type: 'UPDATE_FIELD_VALUE', field: 'title', value: 'Testing' })
      ).toEqual(
        { 
          title: 'Testing', 
          image: '', 
          category: ''
        }
      )
    });

    it('should handle a SET_FORM_DATA type', () => {
      const state = {
        title: '',
        image: '',
        category: ''
      }

      expect(
        formReducer(state, { type: 'SET_FORM_DATA', food: { title: 'Testing', image: 'Testing', category: 'Testing'} })
      ).toEqual(
        {
          title: 'Testing', 
          image: 'Testing', 
          category: 'Testing'
        }
      )
    });

    it('should handle a RESET_FORM_DATA type', () => {
      const state = {
        title: 'Testing', 
        image: 'Testing', 
        category: 'Testing'
      }

      expect(
        formReducer(state, { type: 'RESET_FORM_DATA' })
      ).toEqual(
        {
          title: '',
          image: '',
          category: ''
        }
      )
    });   
  });

});