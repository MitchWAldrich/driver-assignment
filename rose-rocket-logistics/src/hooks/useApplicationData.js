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

  const editOrder = (order, driver_id, description, cost, revenue, isAssigned) => {
    return (
      axios.put('/api/orders/:id', {
        ...order,
        driver_id,
        description,
        cost,
        revenue,
        isAssigned
      }).then(() => {
        console.log('order updated!')
      }).catch((e) => {
        console.log(e.message)
      })
    )
  }

  const editDriver = (order, driverId) => {
    return (
      axios.put('/api/orders/:id', {
        ...order,
        driver_id: driverId
      }).then(() => {
        console.log('driver updated!')
      }).catch((e) => {
        console.log(e.message)
      })
    )
  }

  return { state, setDriver, editOrder, editDriver }
};