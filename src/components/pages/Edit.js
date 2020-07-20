import React from "react";
import { connect } from "react-redux";
import { ExpenseForm } from "../vitals/ExpenseForm";
import { updateExpense } from "../../actions/expenses";
const Edit = (props) => {
  return (
    <div className="py-5 mb-2">
      <div className="py-5 text-center bg-primary">
        <h2 className="pt-5">EDIT EXPENSE</h2>
        <p className="pb-5">You can change expense details here</p>
      </div>
      <ExpenseForm
        expense={props.expense}
        onSubmited={(expense) => {
          props.dispatch(
            updateExpense({ id: props.expense.id, update: expense })
          );
          props.history.push("/dashboard");
        }}
      />
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find(
      (expense) => expense.id === props.match.params.id
    ),
  };
};

export default connect(mapStateToProps)(Edit);
