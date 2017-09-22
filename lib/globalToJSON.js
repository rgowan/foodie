function globalToJSON(schema) {
  schema.set('toJSON', {
    getters: true,
    transform(obj, json) {
      delete json._id;
      delete json.__v;
      delete json.password;
    }
  });
}

module.exports = globalToJSON;