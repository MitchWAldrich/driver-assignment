import { getOrderByOrderId } from "../helpers/selectors";

function Board(props) {
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

  return (
    <div
      id={props.id}
      className={props.className}
      onDrop={drop}
      onDragOver={dragOver}
    >
      {props.children}
    </div>
  )
}

export default Board