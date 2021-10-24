import './App.css';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Board from './components/Board';
import Order from './components/Order';
import UnassignedOrder from './components/UnassignedOrder';

import useApplicationData from "./hooks/useApplicationData";

function App() {
  const {
    state,
    editOrder,
    editDriver
  } = useApplicationData();

  const assignedDriverBoards = state.drivers.filter(assigned => assigned.id !== null);
  const driverBoards = assignedDriverBoards.map(driver => {

    const driversOrders = state.orders.filter(order => order.driver_id === driver.id);
    const parsedOrders = driversOrders.map(driverOrder => {

      return (
        <Order
          key={driverOrder.id}
          id={driverOrder.id}
          driverId={driverOrder.driver_id}
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
        state={state}
        editDriver={editDriver}
      >
        {driver.name}
        {parsedOrders}
      </Board>
    )
  });


  return (
    <div className="App">
      <main className="flexbox">
        <Board
          className="board"
          state={state}
          editDriver={editDriver}
          editOrder={editOrder}
        >
          Unassigned Orders
          <UnassignedOrder
            className="order"
            state={state}
            editDriver={editDriver}
            editOrder={editOrder}
          >
          </UnassignedOrder>
        </Board>
        {driverBoards}
      </main>
    </div>
  );
}

export default App;
