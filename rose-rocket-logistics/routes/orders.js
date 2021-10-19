const router = require("express").Router();

module.exports = db => {
  router.get("/orders", (request, response) => {
    db.query(`SELECT * FROM orders`).then((results) => {
      const orders = results.rows;
      response.json(orders);
    });
  });
  return router;
}