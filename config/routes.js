const router = require('express').Router();
const foods  = require('../controllers/foods');

router.route('/foods')
  .get(foods.index)
  .post(foods.create);

router.route('/foods/:id')
  .get(foods.show)
  .put(foods.update)
  .delete(foods.delete);

router.all('/*', (req, res) => res.notFound());

module.exports = router;
