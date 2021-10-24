import { useState } from 'react';
import Button from "react-bootstrap/Button";

function Form(props) {
  const [cost, setCost] = useState(props.cost)
  const [revenue, setRevenue] = useState(props.revenue)

  return (
    <div className={props.className}>
      <p className={'description'}>{props.description}</p>
      <form className={'editForm'} onSubmit={props.editOrder(props.orderObject, props.driverId, props.description, cost, revenue)}>
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
        <Button className={"formSubmit"} variant="outline-primary" type="submit">Submit</Button>{' '}
      </form>
    </div>
  )

}

export default Form