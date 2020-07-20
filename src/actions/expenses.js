import { v4 as uuid } from "uuid";
// * Add expense
export const addExpense = ({
  description = "",
  amount = 0,
  note = "",
  created_at = 0,
} = {}) => ({
  type: "ADD_EXPENSE",
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    created_at,
  },
});
// * Remove expense
export const removeExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  id,
});
// * Edit expense
export const updateExpense = ({ id, update } = {}) => ({
  type: "UPDATE_EXPENSE",
  id,
  update,
});
// * Set text filter
export const filterExpenseByText = (text = "") => ({
  type: "FILTER_EXPENSE",
  text,
});
