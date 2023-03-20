import { useState } from "react";
import React from "react";
import "./Newxpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense() {
  return (
    <div className="new-expense">
      <ExpenseForm />
    </div>
  );
}

export default NewExpense;
