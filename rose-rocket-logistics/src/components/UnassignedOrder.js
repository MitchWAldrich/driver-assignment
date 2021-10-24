import Order from './Order';
import IncompleteOrder from './IncompleteOrder';
import Form from './Form';

import { getOrderByOrderId } from '../helpers/selectors';
import EditMode from '../hooks/editMode';

export default function UnassignedOrder(props) {
  const drop = e => {
    e.preventDefault();
    const order_id = e.dataTransfer.getData('order_id');
    const orderObject = getOrderByOrderId(props.state.orders, Number(order_id))

    const order = document.getElementById(order_id);
    order.style.display = 'block';

    e.target.appendChild(order);

    props.editDriver(orderObject, props.id)
  }

  const dragOver = e => {
    e.preventDefault();
  }

  const EDIT = 'EDIT';
  const SHOW = 'SHOW';

  const { mode, transition, editId } = EditMode('SHOW');

  const unassignedOrders = props.state.orders.filter(order => order.driver_id === null)

  const unassignedCompleteOrders = unassignedOrders.filter(order => order.cost !== null && order.revenue !== null);
  const parsedUnassignedCompleteOrders = unassignedCompleteOrders.map(unassignedCompleteOrder => {

    return (
      <article>
        {mode === SHOW && (
          <>
            <Order
              key={unassignedCompleteOrder.id}
              id={unassignedCompleteOrder.id}
              className="order"
              driverId={unassignedCompleteOrder.driver_id}
              description={unassignedCompleteOrder.description}
              cost={unassignedCompleteOrder.cost}
              revenue={unassignedCompleteOrder.revenue}
              transition={transition}
            >
            </Order>
          </>
        )}
        {mode === EDIT && editId !== unassignedCompleteOrder.id && (
          <>
            <Order
              key={unassignedCompleteOrder.id}
              id={unassignedCompleteOrder.id}
              className="order"
              driverId={unassignedCompleteOrder.driver_id}
              description={unassignedCompleteOrder.description}
              cost={unassignedCompleteOrder.cost}
              revenue={unassignedCompleteOrder.revenue}
              transition={transition}
            >
            </Order>
          </>
        )}
        {mode === EDIT && editId === unassignedCompleteOrder.id && (
          <Form
            key={unassignedCompleteOrder.id}
            id={unassignedCompleteOrder.id}
            className="order"
            driverId={unassignedCompleteOrder.driver_id}
            orderObject={unassignedCompleteOrder}
            description={unassignedCompleteOrder.description}
            cost={unassignedCompleteOrder.cost}
            revenue={unassignedCompleteOrder.revenue}
            editOrder={props.editOrder}
          >
          </Form>
        )}
      </article>
    )
  })

  const unassignedIncompleteOrders = unassignedOrders.filter(order => order.cost === null || order.revenue === null);
  const parsedUnassignedIncompleteOrders = unassignedIncompleteOrders.map(unassignedIncompleteOrder => {

    return (
      <article>
        {mode === SHOW && (
          <>
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
              onDrop={drop}
              onDragOver={dragOver}
              transition={transition}
            >
            </IncompleteOrder>
          </>
        )}
        {mode === EDIT && editId !== unassignedIncompleteOrder.id && (
          <>
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
              onDrop={drop}
              onDragOver={dragOver}
              transition={transition}
            >
            </IncompleteOrder>
          </>
        )}
        {mode === EDIT && editId === unassignedIncompleteOrder.id && (
          <Form
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
          </Form>
        )}
      </article>
    )
  })


  return (
    <div>
      {parsedUnassignedIncompleteOrders}
      {parsedUnassignedCompleteOrders}
    </div>
  )
}

