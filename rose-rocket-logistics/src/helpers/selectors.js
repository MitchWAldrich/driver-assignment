const ordersMockup = [
  {
  "id": 1,
  "driver_id": 1,
  "description": "Construction Materials",
  "cost": 100,
  "revenue": 4200,
  "isassigned": true
  },
  {
  "id": 2,
  "driver_id": 1,
  "description": "Construction Materials",
  "cost": 71,
  "revenue": 3948,
  "isassigned": true
  },
  {
  "id": 3,
  "driver_id": 1,
  "description": "Wood and Lumber",
  "cost": 264,
  "revenue": 1951,
  "isassigned": true
  },
  {
  "id": 4,
  "driver_id": 1,
  "description": "Wood and Lumber",
  "cost": 117,
  "revenue": 4991,
  "isassigned": true
  },
  {
  "id": 5,
  "driver_id": 2,
  "description": "Meat",
  "cost": 279,
  "revenue": 6740,
  "isassigned": true
  },
  {
  "id": 6,
  "driver_id": 2,
  "description": "Meat",
  "cost": 538,
  "revenue": 3618,
  "isassigned": true
  },
  {
  "id": 7,
  "driver_id": 2,
  "description": "Fresh Produce",
  "cost": 421,
  "revenue": 5346,
  "isassigned": true
  },
  {
  "id": 8,
  "driver_id": 2,
  "description": "Farm Supplies",
  "cost": 171,
  "revenue": 7430,
  "isassigned": true
  },
  {
  "id": 9,
  "driver_id": 2,
  "description": "Cheetos",
  "cost": 310,
  "revenue": 7232,
  "isassigned": true
  },
  {
  "id": 10,
  "driver_id": 3,
  "description": "Rose Rocket Swag Shirts",
  "cost": 351,
  "revenue": 5404,
  "isassigned": true
  }
  ];

export function getOrdersByDriverId(orderState, driverId) {

  return orderState.filter(order => order.driver_id === driverId)
}

// console.log(getOrdersByDriverId(ordersMockup, 3))