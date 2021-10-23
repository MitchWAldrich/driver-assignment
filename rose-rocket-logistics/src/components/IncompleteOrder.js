import Edit from './Edit';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

function IncompleteOrder (props) {

  const [cost, setCost] = useState(props.cost)
  const [revenue, setRevenue] = useState(props.revenue)


  const dragStart = e => {
    const target = e.target;

    e.dataTransfer.setData('order_id', target.id);

    setTimeout(() => {
      target.style.display = "none";
    }, 0);
  }
  
  const dragOver = e => {
    e.stopPropagation();
  }

  if (props.driverId === null && props.revenue === null) {
    return (
      <div
        id={props.id}
        className={props.className}
        draggable="true"
        onDragStart={dragStart}
        onDragOver={dragOver}
      >
        <p>{props.description}</p>
        <br></br>
        <p>Revenue:</p>
        <form onSubmit={props.editOrder(props.orderObject, props.driverId, props.description, props.cost, revenue)}>
        <input
          className="editField"
          name="Revenue"
          type="text"
          placeholder="Revenue"
          onChange={(event) => setRevenue(event.target.value)}
          value={revenue}
        />
        <p>Cost: ${props.cost}</p>
        <Edit></Edit>
        <Button variant="outline-primary" type="submit">Submit</Button>{' '}
        </form>
      </div>
    )
  } 
  if (props.driverId === null && props.cost === null) {
    return (
      <div
      id={props.id}
      className={props.className}
      draggable="true"
      onDragStart={dragStart}
          onDragOver={dragOver}
          >
          <p>{props.description}</p>
          <br></br>
          <p>Revenue: ${props.revenue}
          </p>
          <p>Cost:</p>
          <form onSubmit={props.editOrder(props.orderObject, props.driverId, props.description, cost, props.revenue)}> 
          <input
            className="editField"
            name="Cost"
            type="text"
            placeholder="Cost"
            onChange={(event) => setCost(event.target.value)}
            value={cost}
            />
          <Edit></Edit>
          <Button variant="outline-primary" type="submit">Submit</Button>{' '}
          </form>
        </div>
      )
    } 
    
  if (props.driverId === null && props.cost !== null && props.revenue !== null) {
    return (
      <div
        id={props.id}
        className={props.className}
        draggable="true"
        onDragStart={dragStart}
        onDragOver={dragOver}
      >
        <p>{props.description}</p>
        <br></br>
        <p>Revenue: ${props.revenue}</p>
        <p>Cost: ${props.cost}</p>
        <Edit></Edit>
        <Button variant="outline-primary" onSubmit={props.editOrder(props.orderObject, props.driver_id, props.description, props.cost, props.revenue)}>Submit</Button>{' '}
      </div>
    )
  }
}

export default IncompleteOrder