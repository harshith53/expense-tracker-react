import React from 'react';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
// import { AddTransaction } from './components/AddTransaction';
// import { CategoryPieChart } from './components/CategoryPieChart';
// import { BudgetTracker } from './components/BudgetTracker';
import { GlobalProvider } from './context/GlobalState';
import AddTransaction from './components/AddTransaction';
import CategoryPieChart from './components/CategoryPieChart';
import BudgetTracker from './components/BudgetTracker';


import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
        <CategoryPieChart />
        <BudgetTracker />
      </div>
    </GlobalProvider>
  );
}

export default App;
