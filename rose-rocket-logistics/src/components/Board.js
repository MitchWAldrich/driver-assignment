import { getOrderByOrderId } from "../helpers/selectors";

function Board (props) {
  const drop = e => {
    e.preventDefault();
    const order_id = e.dataTransfer.getData('order_id');
    const orderObject = getOrderByOrderId(props.state.orders, Number(order_id))
    props.editDriver(orderObject, props.id)

    const order = document.getElementById(order_id);
    order.style.display = 'block';
    // console.log('order_id', order_id)
    // console.log('order', order)
    // console.log('state', props.state.orders)
    // console.log('boardId', props.id)

    // console.log('orderObj', orderObject)
    e.target.appendChild(order);
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
      { props.children }
    </div>
  )
}

export default Board