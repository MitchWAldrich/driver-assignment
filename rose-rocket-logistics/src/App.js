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

  const driverBoards = state.drivers.map( driver => {
    getOrdersByDriverId(state.orders, driver.id);
  // const parsedDriverBoards = driverBoard.map(driver => {
    return (
      <Board
        key={driver.id} 
        id={driver.id}
        className="board"
        >
          <Order id="order-1" className="order">
          </Order>
        </Board>
    )
  });

  return (
    <div className="App">
     <main className="flexbox">
       <Board id="board-1" className="board">
         <Order id="order-1" className="order">
         </Order>
       </Board>

       {driverBoards}
     </main>
    </div>
  );
}

export default App;
