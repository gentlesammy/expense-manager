// * Set text filter
export const filterExpenseByText = (text = "") => ({
  type: "FILTER_EXPENSE",
  text,
});
// * Sort by date
export const sortByDate = () => ({
  type: "SORT_BY_DATE",
});
// * Sort by amount
export const sortByAmount = () => ({
  type: "SORT_BY_AMOUNT",
});
// * Set Start Date
export const sortByStartDate = (startDate) => ({
  type: "SET_START_DATE",
  startDate,
});
// * Set End Date
export const sortByEndDate = (date) => ({
  type: "SET_END_DATE",
  date,
});
