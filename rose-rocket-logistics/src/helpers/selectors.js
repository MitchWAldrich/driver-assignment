export function getOrdersByDriverId(orderState, driverId) {

  return orderState.find(order => order.driver_id === driverId)
}

export function getOrderByOrderId(orderState, orderId) {
  
  return orderState.find(order => order.id === orderId);
}