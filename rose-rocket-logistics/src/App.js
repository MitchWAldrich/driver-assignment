import './App.css';
import './index.css';

import Board from './components/Board';
import Order from './components/Order';

import useApplicationData from "./hooks/useApplicationData";

function App() {
  const {
    state,
    setDriver
  } = useApplicationData();

  return (
    <div className="App">
     <main className="flexbox">
       <Board id="board-1" className="board">
         <Order id="order-1" className="order">
         </Order>
       </Board>

       <Board id="board-2" className="board">
         <Order id="order-2" className="order">
         </Order>
       </Board>
     </main>
    </div>
  );
}

export default App;
