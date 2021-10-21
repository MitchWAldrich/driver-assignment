const router = require("express").Router();

module.exports = db => {
  router.get("/orders", (request, response) => {
    db.query(`SELECT * FROM orders`).then((results) => {
      const orders = results.rows;
      response.json(orders);
    });
  });
  
  router.put("/orders/:id", (request, response) => {
    const { id, driver_id, description, cost, revenue } = request.body;

    db.query(`
    UPDATE orders
    SET driver_id = $1, description = $2, cost = $3, revenue = $4
    WHERE id = $5
    `, [driver_id, description, cost, revenue, id])
    // console.log('updated order:', request.body)
    .then((results) => {
      response.status(200)
    })
    .catch((e) => {
      console.log(e.message)
    })
  })

  return router;
}