import React from "react";
import "./ExpenseItems.css";

const ExpenseItems = () => {
  return (
    <div className="expense-item">
      <div>date</div>
      <div className="expense-item__description">
        <h2>car</h2>
        <div className="expense-item__price">$289</div>
      </div>
    </div>
  );
};

export default ExpenseItems;
