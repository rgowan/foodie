const mongoose   = require('mongoose');
mongoose.Promise = require('bluebird');

const { dbURI } = require('../config/environment');
const Food      = require('../models/food');

const foodData = [{
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
}, {
  title: 'Earth Natural Salad',
  image: 'https://static1.squarespace.com/static/58458473bebafbacb77b5ede/t/5845948e893fc075987258b8/1480955031862/',
  category: 'Lunch'
}, {
  title: 'Wagamama Rarmen with Dumplings',
  image: 'https://www.wagamama.com/-/media/wagamamamainsite/food-category-images/vegan-560px.jpg',
  category: 'Lunch'
}, {
  title: 'Fish Steak',
  image: 'https://www.grassingtonhouse.co.uk/images/720x720/720x720-gallery-food-01.jpg',
  category: 'Dinner'
}];

mongoose
  .connect(dbURI, { useMongoClient: true })
  .then(db => db.dropDatabase())
  .then(() => Food.create(foodData))
  .then(foods => console.log(`${foods.length} foods created!`))
  .catch(err => console.log(err))
  .finally(() => mongoose.connection.close());
