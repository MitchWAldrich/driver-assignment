import './App.css';
import './index.css';

import Board from './components/Board';
import Order from './components/Order';

import useApplicationData from "./hooks/useApplicationData";
import { getOrdersByDriverId } from "./helpers/selectors";

function App() {
  const {
    state,
    setDriver
  } = useApplicationData();
  
  const unassignedOrders = state.orders.filter(order => order.driver_id === 1);
  const parsedUnassignedOrders = unassignedOrders.map(unassignedOrder => {

    return (
      <Order
      key={unassignedOrder.id}
      id={unassignedOrder.id}
      className="order"
      description={unassignedOrder.description}
      cost={unassignedOrder.cost}
      revenue={unassignedOrder.revenue}
      >
      </Order>
    )
    
  })

  const assignedDriverBoards = state.drivers.filter(assigned => assigned.id !== 1);
  const driverBoards = assignedDriverBoards.map(driver => {
    
    const driversOrders = state.orders.filter(order => order.driver_id === driver.id);
    const parsedOrders = driversOrders.map(driverOrder => {

      return (
        <Order
        key={driverOrder.id}
        id={driverOrder.id}
        className="order"
        description={driverOrder.description}
        cost={driverOrder.cost}
        revenue={driverOrder.revenue}
        >
        </Order>
      )
    })

    return (
      <Board
        key={driver.id} 
        id={driver.id}
        className="board"
        >
        {driver.name}
        {parsedOrders}
        </Board>
    )
  });


  return (
    <div className="App">
     <main className="flexbox">
       <Board id="board-1" className="board">
         Unassigned Orders
         {parsedUnassignedOrders}
       </Board>

       {driverBoards}
     </main>
    </div>
  );
}

export default App;
