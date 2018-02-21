const Food = require('../models/food');

function foodsIndex(req, res, next) {
  Food
    .find()
    .exec()
    .then(foods => res.json(foods))
    .catch(next);
}

function foodsCreate(req, res, next) {
  Food
    .create(req.body)
    .then(food => res.status(201).json(food))
    .catch(next);
}

function foodsShow(req, res, next) {
  Food
    .findById(req.params.id)
    .exec()
    .then((food) => {
      if(!food) return res.notFound();
      res.json(food);
    })
    .catch(next);
}

function foodsUpdate(req, res, next) {
  Food
    .findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(food => res.status(200).json(food))
    .catch(next);
}

function foodsDelete(req, res, next) {
  Food
    .findByIdAndRemove(req.params.id)
    .then(() => res.status(204).end())
    .catch(next);
}

module.exports = {
  index: foodsIndex,
  create: foodsCreate,
  show: foodsShow,
  update: foodsUpdate,
  delete: foodsDelete
};
