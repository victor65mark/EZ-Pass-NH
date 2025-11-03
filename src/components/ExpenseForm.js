import React from "react";
import "./ExpenseForm.css";

function ExpenseForm() {
  return (
    <form className="expense-form">
      <input type="text" placeholder="Enter toll name" required />
      <input type="number" placeholder="Amount" required />
      <button type="submit">Add Toll</button>
    </form>
  );
}

export default ExpenseForm;
