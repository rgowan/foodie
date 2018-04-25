import foodsReducer from '../../src/reducers/foods';

describe('Food Reducer Tests', () => {

  it('Should return a default state', () => {
    expect(
      foodsReducer(undefined, { type: 'TESTING' })
    ).toEqual(
      {
        foods: [],
        food: {}
      }
    )
  });

  describe('Actions', () => {
    it('should handle a SET_FOODS type', () => {
      expect(
        foodsReducer(undefined, { type: 'SET_FOODS', foods: [{ name: 'foodOne' }] })
      ).toEqual(
        {
          foods: [{ name: 'foodOne' }],
          food: {}
        }
      )
    });
  
    it('should handle a SET_FOOD type', () => {
      expect(
        foodsReducer(undefined, { type: 'SET_FOOD', food: { name: 'foodOne' } })
      ).toEqual(
        {
          foods: [],
          food: { name: 'foodOne' }
        }
      )
    });

    it('should handle a CREATE_FOOD type', () => {
      const state = {
        foods: [{ name: 'foodOne' }],
        food: {}
      }

      expect(
        foodsReducer(state, { type: 'CREATE_FOOD', food: { name: 'foodTwo' } })
      ).toEqual(
        {
          foods: [{ name: 'foodOne' }, { name: 'foodTwo' }],
          food: {}
        }
      )
    });

    it('should hanlde a UPDATE_FOOD type', () => {
      const state = {
        foods: [{ id: 1, name: 'foodOne'}, { id: 2, name: 'foodTwo' }],
        food: {}
      }

      expect(
        foodsReducer(state, { type: 'UPDATE_FOOD', food: { id: 2, name: 'foodThree' } })
      ).toEqual(
        {
          foods: [{ id: 1, name: 'foodOne'}, { id: 2, name: 'foodThree' }],
          food: {}
        }
      )
    });

    it('should handle a DELETE_FOOD type', () => {
      const state = {
        foods: [{ id: 1, name: 'foodOne'}, { id: 2, name: 'foodTwo' }],
        food: {}
      }

      expect(
        foodsReducer(state, { type: 'DELETE_FOOD', id: 2 })
      ).toEqual(
        {
          foods: [{ id: 1, name: 'foodOne'}],
          food: {}
        }
      )
    });
  });

});