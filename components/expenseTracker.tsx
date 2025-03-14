import React, { useState } from "react";
import useExpenseStore from "../store/transactions";

const ExpenseTracker: React.FC = () => {
  const { transactions, balance, addTransaction } = useExpenseStore();
  const [amount, setAmount] = useState<number>(0);
  const [type, setType] = useState<"income" | "expense">("income");

  const handleAddTransaction = () => {
    if (amount > 0) {
      addTransaction(type, amount);
      setAmount(0); 
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4 text-center">Expense Tracker</h1>


      <div className="mb-4 p-4 bg-gray-100 rounded-lg text-center">
        <h2 className="text-xl font-semibold">Balance: ₹{balance}</h2>
      </div>

      <div className="mb-4 flex flex-col gap-2">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          placeholder="Enter amount"
          className="p-2 border rounded"
        />
        <select
          value={type}
          onChange={(e) => setType(e.target.value as "income" | "expense")}
          className="p-2 border rounded"
        >
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
        <button
          onClick={handleAddTransaction}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add Transaction
        </button>
      </div>
      <div className="w-full bg-gray-50 p-4 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Transaction History</h3>
        {transactions.length === 0 ? (
          <p className="text-gray-500 text-center">No transactions yet.</p>
        ) : (
          <ul className="space-y-2">
            {transactions.map((tx) => (
              <li
                key={tx.id}
                className={`p-2 rounded ${
                  tx.type === "income" ? "bg-green-200" : "bg-red-200"
                }`}
              >
                {tx.type.toUpperCase()}: ₹{tx.amount}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ExpenseTracker;
