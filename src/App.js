import logo from './logo.svg';
import './App.css';
import Balance from './ReduxComponent/Balance';
import BalanceEvent from './ReduxComponent/BalanceEvent';

function App() {
  return (
    <div className="App">
      <Balance />
      <BalanceEvent />
    </div>
  );
}

export default App;
