import axios from "axios";
import { useState, useEffect } from "react";

export default function useApplicationData() {
  const [state, setState] = useState({
    driver: 'Name',
    drivers: [],
    orders: []
  })

  const setDriver = driver => setState({ ...state, driver });

  useEffect(() => {
    Promise.all([
      axios.get('/api/drivers'),
      axios.get('/api/orders')
    ]).then((all) => {
      const [drivers, orders] = all;
      setState(prev => ({ ...prev, drivers: drivers.data, orders: orders.data }))
    })
  }, []);

  const editOrder = (order, driver_id, description, cost, revenue) => {

    return axios.put(`/api/orders/`, {
      ...order,
      driver_id,
      description,
      cost,
      revenue
    }).then((result) => {
      console.log('order updated!')
    }).catch((error) => {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log('Error', error.message);
      }
    })
  }

  const editDriver = (order, driverId) => {
    return axios.put(`/api/orders/`, { ...order, driver_id: driverId })
      .then((result) => {
        console.log('driver updated!')
      }).catch((error) => {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log('Error', error.message);
        }
      })
  }

  return { state, setDriver, editOrder, editDriver }
};