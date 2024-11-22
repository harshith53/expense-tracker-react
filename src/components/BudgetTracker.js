import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const BudgetTracker = () => {
  const [category, setCategory] = useState('');
  const [budget, setBudget] = useState(0);
  const { transactions } = useContext(GlobalContext);

  const currentExpenses = transactions
    .filter((t) => t.category === category && t.amount < 0)
    .reduce((acc, t) => acc + Math.abs(t.amount), 0);

  const onSubmit = (e) => {
    e.preventDefault();
    alert(`Budget for ${category} set to $${budget}`);
    setCategory('');
    setBudget(0);
  };

  return (
    <div>
      <h3>Set Budget</h3>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="category">Category</label>
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="">Select Category</option>
            <option value="Food">Food</option>
            <option value="Travel">Travel</option>
            <option value="Bills">Bills</option>
            <option value="Shopping">Shopping</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="budget">Budget</label>
          <input
            type="number"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            placeholder="Enter budget..."
          />
        </div>
        <button className="btn">Set Budget</button>
      </form>

      {category && (
        <div>
          <h4>Current Spending: ${currentExpenses}</h4>
          <h4>Remaining Budget: ${budget - currentExpenses}</h4>
        </div>
      )}
    </div>
  );
};

export default BudgetTracker;
