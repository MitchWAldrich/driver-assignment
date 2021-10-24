import Button from 'react-bootstrap/Button';
import { useState } from 'react';

function IncompleteOrder(props) {

  const [cost, setCost] = useState(props.cost)
  const [revenue, setRevenue] = useState(props.revenue)

  const handleClick = e => {
    e.preventDefault();
    props.transition('EDIT', props.id)
  }

  if (props.driverId === null && props.revenue === null) {
    return (
      <div
        id={props.id}
        className={props.className}
      >
        <p className={'description'}>{props.description}</p>
        <form onSubmit={props.editOrder(props.orderObject, props.driverId, props.description, props.cost, revenue)}>
        <label>
          Revenue:
          <input
            className="editField"
            name="Revenue"
            type="text"
            placeholder="Revenue"
            onChange={(event) => setRevenue(event.target.value)}
            value={revenue}
          />
          </label>
          <p>Cost: ${props.cost}</p>
          <img
            className="icon"
            src="images/edit.png"
            alt="Edit"
            onClick={handleClick}
          />
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
      >
        <p className={'description'}>{props.description}</p>
        <form onSubmit={props.editOrder(props.orderObject, props.driverId, props.description, cost, props.revenue)}>
        <label>
        Cost:
          <input
            className="editField"
            name="Cost"
            type="text"
            placeholder="Cost"
            onChange={(event) => setCost(event.target.value)}
            value={cost}
            />
          </label>
            <p>Revenue: ${props.revenue}</p>
          <img
            className="icon"
            src="images/edit.png"
            alt="Edit"
            onClick={handleClick}
          />
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
      >
        <p className={'description'}>{props.description}</p>
        <p>Revenue: ${props.revenue}</p>
        <p>Cost: ${props.cost}</p>
        <Button variant="outline-primary" onSubmit={props.editOrder(props.orderObject, props.driver_id, props.description, props.cost, props.revenue)}>Submit</Button>{' '}
      </div>
    )
  }
}

export default IncompleteOrder