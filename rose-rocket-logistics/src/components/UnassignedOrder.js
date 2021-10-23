import Board from './Board';
import Order from './Order';
import IncompleteOrder from './IncompleteOrder';

import EditOrder from '../hooks/editOrder';

export default function UnassignedOrder(props) {
   
  const unassignedOrders = props.state.orders.filter(order => order.driver_id === null)

  const unassignedCompleteOrders = unassignedOrders.filter(order => order.cost !== null && order.revenue !== null );
  const parsedUnassignedCompleteOrders = unassignedCompleteOrders.map(unassignedCompleteOrder => {

    return (
      <Order
      key={unassignedCompleteOrder.id}
      id={unassignedCompleteOrder.id}
      className="order"
      driverId={unassignedCompleteOrder.driver_id}
      description={unassignedCompleteOrder.description}
      cost={unassignedCompleteOrder.cost}
      revenue={unassignedCompleteOrder.revenue}
      >
      </Order>
    )
  })

  const unassignedIncompleteOrders = unassignedOrders.filter(order => order.cost === null || order.revenue === null );
  const parsedUnassignedIncompleteOrders = unassignedIncompleteOrders.map(unassignedIncompleteOrder => {

    return (
      <IncompleteOrder
      key={unassignedIncompleteOrder.id}
      id={unassignedIncompleteOrder.id}
      className="order"
      orderObject={unassignedIncompleteOrder}
      driverId={unassignedIncompleteOrder.driver_id}
      description={unassignedIncompleteOrder.description}
      cost={unassignedIncompleteOrder.cost}
      revenue={unassignedIncompleteOrder.revenue}
      editOrder={props.editOrder}
      >
      </IncompleteOrder>
    )
  })


  return (
    <div>
    {parsedUnassignedIncompleteOrders}
    {parsedUnassignedCompleteOrders}
    </div>
  )
}

