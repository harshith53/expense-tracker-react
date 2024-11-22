import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF6666'];

const CategoryPieChart = () => {
  const { transactions } = useContext(GlobalContext);

  // Group transactions by category
  const categoryData = transactions.reduce((acc, transaction) => {
    if (transaction.amount < 0) {
      const existingCategory = acc.find((item) => item.name === transaction.category);
      if (existingCategory) {
        existingCategory.value += Math.abs(transaction.amount);
      } else {
        acc.push({ name: transaction.category, value: Math.abs(transaction.amount) });
      }
    }
    return acc;
  }, []);

  return (
    <div>
      <h3>Category-wise Expenses</h3>
      <PieChart width={400} height={400}>
        <Pie
          data={categoryData}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="#8884d8"
          label
        >
          {categoryData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default CategoryPieChart;
