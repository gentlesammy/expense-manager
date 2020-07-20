import React from "react";
import { ExpenseForm } from "../vitals/ExpenseForm";
import { connect } from "react-redux";
import { addExpense } from "../../actions/expenses";
import { useHistory } from "react-router-dom";

const Create = (props) => {
  const history = useHistory();
  return (
    <div className="py-5 mb-2">
      <div className="py-5 text-center bg-primary">
        <h2 className="pt-5">ADD EXPENSES</h2>
        <p className="pb-5">Fill expense details here</p>
      </div>
      <ExpenseForm
        onSubmited={(expense) => {
          props.dispatch(addExpense(expense));
          history.push("/dashboard");
        }}
      />
    </div>
  );
};

export default connect()(Create);
