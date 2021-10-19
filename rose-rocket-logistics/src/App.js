import './App.css';
import Board from './components/Board';
import Order from './components/Order';

function App() {
  return (
    <div className="App">
     <main className="flexbox">
       <Board id="board-1" className="board">
         <Order id="order-1" className="order">
           <p>order one info</p>
         </Order>
       </Board>

       <Board id="board-2" className="board">
         <Order id="order-2" className="order">
           <p>order two info</p>
         </Order>
       </Board>
     </main>
    </div>
  );
}

export default App;
