const router = require("express").Router();

module.exports = db => {
  router.get("/drivers", (request, response) => {
    db.query(`SELECT * FROM drivers`).then((results) => {
      const drivers = results.rows;
      response.json(drivers);
    });
  });
  return router;
}