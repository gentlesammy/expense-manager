import React from "react";
import ExpenseList from "../vitals/ExpenseList";
import ExpenseListFilter from "../vitals/ExpenseListFilter";
import SortBy from "../vitals/SortBy";
export const Dashboard = () => {
  return (
    <div className="py-5">
      <div className="text-center py-5 bg-primary mb-5">
        <h2 className="text-center py-5">DASHBOARD</h2>
      </div>
      <div className="d-flex justify-content-between wrap-content py-3">
        <SortBy className="mr-3" />
        <ExpenseListFilter />
      </div>
      <ExpenseList />
    </div>
  );
};
