import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
import App from "./App";
import configureStore from "./store/configureStore";
// import * as serviceWorker from './serviceWorker';
import { addExpense } from "./actions/expenses";
import { filterExpenseByText } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";
import { Provider } from "react-redux";

const store = configureStore();
const jsx = (
  <Provider store={store}>
    <App />
  </Provider>
);
ReactDOM.render(
  <React.StrictMode>{jsx}</React.StrictMode>,
  document.getElementById("root")
);

// const removeExpenseOne = store.dispatch(
//   removeExpense({ id: expenseone.expense.id })
// );

store.dispatch(
  addExpense({
    description: "Water  Bill",
    note: "Bill  paid for water used in June",
    amount: 2000,
    created_at: 1200,
  })
);

store.dispatch(
  addExpense({
    description: "Gas Bill",
    note: "Bill  paid for Cooking Gas used in June",
    amount: 1000,
    created_at: 1300,
  })
);

store.dispatch(
  addExpense({
    description: "Take Ope Out",
    note: "Take my queen out to a fast food center and enjoy",
    amount: 10000,
    created_at: 1600003009941,
  })
);

store.dispatch(
  addExpense({
    description: "Shopping spree",
    note: "Opeyemi, Oyinkan and i going on a shooping spree",
    amount: 1000000,
    created_at: 1620003009941,
  })
);

store.dispatch(
  addExpense({
    description: "4.5kva Generator Purchase",
    note: "Bought a generator set of 4.5kva that could work with freezer",
    amount: 120000,
    created_at: 1200003009941,
  })
);

store.dispatch(
  addExpense({
    description: " PS 3 Game",
    note: "Bought Ps3 Sony Game  with pad and some game disc",
    amount: 45000,
    created_at: 1020003009941,
  })
);

const state = store.getState();
const getVisibleExpensess = getVisibleExpenses(state.expenses, state.filters);
// console.log(getVisibleExpensess);

// store.dispatch(
//   updateExpense({
//     id: expensetwo.expense.id,
//     update: {
//       description: "Take Opeyemi to Mr Bigg's",
//       noter: "this is not funny",
//     },
//   })
// );

// store.dispatch(filterExpenseByText("Rent"));
// store.dispatch(filterExpenseByText());
// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());
// store.dispatch(sortByStartDate(125));
// store.dispatch(sortByStartDate());
// store.dispatch(sortByEndDate(1983));
// store.dispatch(sortByEndDate());
//sortByStartDate
