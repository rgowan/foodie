import filterReducer from '../../src/reducers/filter';
import filter from '../../src/reducers/filter';

describe('Filter Reducer Tests', () => {

  it('Should return a default state', () => {
    expect(
      filterReducer(undefined, { type: 'TESTING' })
    ).toEqual(
      'SHOW_ALL'
    )
  });

  describe('Actions', () => {
    it('should handle a SET_FILTER type', () => {
      expect(
        filterReducer('SHOW_ALL', { type: 'SET_FILTER', filter: 'SHOW_BREAKFAST'})
      ).toEqual(
        'SHOW_BREAKFAST'
      )
    });
  });

});