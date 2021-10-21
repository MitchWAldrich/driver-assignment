const ordersMockup = [
  {
  "id": 1,
  "driver_id": 1,
  "description": "Construction Materials",
  "cost": 100,
  "revenue": 4200,
  },
  {
  "id": 2,
  "driver_id": 1,
  "description": "Construction Materials",
  "cost": 71,
  "revenue": 3948,
  },
  {
  "id": 3,
  "driver_id": 1,
  "description": "Wood and Lumber",
  "cost": 264,
  "revenue": 1951,
  },
  {
  "id": 4,
  "driver_id": 1,
  "description": "Wood and Lumber",
  "cost": 117,
  "revenue": 4991,
  },
  {
  "id": 5,
  "driver_id": 2,
  "description": "Meat",
  "cost": 279,
  "revenue": 6740,
  },
  {
  "id": 6,
  "driver_id": 2,
  "description": "Meat",
  "cost": 538,
  "revenue": 3618,
  },
  {
  "id": 7,
  "driver_id": 2,
  "description": "Fresh Produce",
  "cost": 421,
  "revenue": 5346,
  },
  {
  "id": 8,
  "driver_id": 2,
  "description": "Farm Supplies",
  "cost": 171,
  "revenue": 7430,
  },
  {
  "id": 9,
  "driver_id": 2,
  "description": "Cheetos",
  "cost": 310,
  "revenue": 7232,
  },
  {
  "id": 10,
  "driver_id": 3,
  "description": "Rose Rocket Swag Shirts",
  "cost": 351,
  "revenue": 5404,
  }
  ];

export function getOrdersByDriverId(orderState, driverId) {

  return orderState.find(order => order.driver_id === driverId)
}

export function getOrderByOrderId(orderState, orderId) {
  
  return orderState.find(order => order.id === orderId);
}

// console.log(getOrdersByDriverId(ordersMockup, 3))
// console.log(getOrderByOrderId(ordersMockup, 5))
