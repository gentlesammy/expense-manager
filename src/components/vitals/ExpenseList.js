import React from "react";
import { connect } from "react-redux";
import Expense from "./ExpenseItem";
import SelectExpenses from "../../selectors/expenses";
const ExpenseList = ({ expenses, filters }) => {
  return (
    <div className="row">
      {expenses.map((expense, key) => {
        return <Expense key={expense.id} expen={expense} />;
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    expenses: SelectExpenses(state.expenses, state.filters),
  };
};

export default connect(mapStateToProps)(ExpenseList);
