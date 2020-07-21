import React from "react";
import ExpenseList from "../vitals/ExpenseList";
import ExpenseListFilter from "../vitals/ExpenseListFilter";
import SortBy from "../vitals/SortBy";
export const Dashboard = () => {
  return (
    <div className="">
      <div className="text-center py-5 bg-primary mb-5">
        <h2 className="text-center py-5">DASHBOARD</h2>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <SortBy className="" />
          </div>
          <div className="col-md-7">
            <ExpenseListFilter />
          </div>
        </div>
      </div>
      <ExpenseList className="mt-5" />
    </div>
  );
};
