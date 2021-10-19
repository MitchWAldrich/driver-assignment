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

  return { state, setDriver }
};