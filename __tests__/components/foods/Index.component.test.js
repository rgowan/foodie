import React from 'react';
import configureStore from 'redux-mock-store'

import IndexComponent from '../../../src/components/foods/Index';

let wrapper;
let store;

const mockStore = configureStore();

const initialState = {
  food: {
    foods: [
      {
        title: 'Doughnuts',
        image: 'https://pbs.twimg.com/profile_images/674114897458823168/UVvPWXRM_400x400.jpg',
        category: 'Desert'
      }, {
        title: 'The Beast Burger',
        image: 'https://i.pinimg.com/originals/38/05/23/380523d88c371fa5eed5fc139d2bf4e8.jpg',
        category: 'Dinner'
      }, {
        title: 'Latin Breakfast',
        image: 'https://media1.popsugar-assets.com/files/thumbor/n0yP3KlLR0HrhwLup9bv-bYzNvU/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2015/10/30/797/n/37139775/09873d98_edit_img_image_38926273_1446168147/i/Latin-Inspired-Comfort-Food-Recipes.png',
        category: 'Breakfast'
      }
    ]
  },
  activeFilter: 'SHOW_ALL'
}

describe('Index Compoment Tests', () => {

  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = shallow(<IndexComponent  store={store} />);
  });


  it('Should render to the DOM', () => {
    expect(
      wrapper.length
    ).toEqual(
      1
    );
  });

});