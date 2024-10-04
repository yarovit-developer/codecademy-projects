import Transactions from '../features/transactions/Transactions';  // Moving up one level to src
import Budgets from '../features/budgets/Budgets';  // Moving up one level to src
import React from 'react';
import '../index.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Expense Tracker</h1>
        <Budgets />
        <Transactions />
      </header>
    </div>
  );
}

export default App;
