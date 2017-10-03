module.exports = (app) => {
  const api = app.app.api.pets;

  app.route('/api/v1/pets')
     .post(api.store)
     .get(api.index)
     .put(api.modify);

  app.route('/api/v1/pets:id')
     .delete(api.exclude);
}
