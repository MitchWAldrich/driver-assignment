import axios from "axios";
import { useState, useEffect } from "react";

export default function useApplicationData() {
  const [state, setState] = useState({
    driver: 'Name',
    drivers: [],
    orders: []
  })

  const setDriver = driver => setState({...state, driver });

  useEffect(() => {
    Promise.all([
      axios.get('/api/drivers'),
      axios.get('/api/orders')
    ]).then((all) => {
      const [drivers, orders] = all;
      setState(prev => ({...prev, drivers: drivers.data, orders: orders.data}));
    })
  }, []);

  const editOrder = (order, driver_id, description, cost, revenue) => {

    return (
      axios.put('/api/orders/:id', {
        ...order,
        driver_id,
        description,
        cost,
        revenue
      }).then(() => {
        console.log('order updated!')
      }).catch((e) => {
        console.log(e.message)
      })
    )
  }

  const editDriver = async (order, driverId) => {
    console.log('orderED', order)
    return await axios.put(`/api/orders/${order.id}`, {
        ...order,
        driver_id: driverId
      }).then((result) => {
        console.log('driver updated!', result)
      }).catch((e) => {
        console.log(e.response.data)
      })
  }

  return { state, setDriver, editOrder, editDriver }
};