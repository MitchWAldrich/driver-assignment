import { useState } from 'react';
import Button from "react-bootstrap/Button";

function Form (props) {
  const [cost, setCost] = useState(props.cost)
  const [revenue, setRevenue] = useState(props.revenue)

  return (
    <div className={props.className}>
      <p>{props.description}</p>
      <br></br>
      <p>Revenue:</p>
      <form onSubmit={props.editOrder(props.orderObject, props.driverId, props.description, cost, revenue)}>
      <input
        className="editField"
        name="Revenue"
        type="text"
        placeholder="Revenue"
        onChange={(event) => setRevenue(event.target.value)}
        value={revenue}
      />
      <p>Cost:</p>
      <input
        className="editField"
        name="Cost"
        type="text"
        placeholder="Cost"
        onChange={(event) => setCost(event.target.value)}
        value={cost}
      />
      <Button variant="outline-primary" type="submit">Submit</Button>{' '}
      </form>
    </div>
  )

}

export default Form