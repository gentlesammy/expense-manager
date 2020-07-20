import React, { useState } from "react";
import moment from "moment";
import "react-dates/initialize";
import { SingleDatePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";

export const ExpenseForm = (props) => {
  const { onSubmited, expense } = props;
  const [description, setDescription] = useState(
    expense ? expense.description : ""
  );
  const [note, setNote] = useState(expense ? expense.note : "");
  const [amount, setAmount] = useState(expense ? expense.amount : "");
  const [date, setDate] = useState(
    expense ? moment(expense.created_at) : moment()
  );
  const [focused, setFocused] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const onDateChange = (date) => {
    setDate(date);
  };

  const focusChange = () => {
    setFocused((focused) => {
      return !focused;
    });
  };

  return (
    <div className="formarea p-2 py-5 bg-dark my-5">
      {errorMsg !== "" && <p className="text-center text-danger">{errorMsg}</p>}
      <div className="row">
        <div className="col-md">
          <input
            type="text"
            className="form-control my-2"
            placeholder="Expense Title "
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          ></input>
          <input
            type="number"
            className="form-control my-2"
            placeholder="Amount"
            value={amount}
            onChange={(e) => {
              let price = e.target.value;
              if (price.match(/^\d*(\.\d{0,2})?$/)) {
                setAmount(e.target.value);
              }
            }}
          ></input>
        </div>
        <div className="col-md">
          <textarea
            type="text"
            className="form-control my-2"
            rows="3"
            placeholder="Note"
            value={note}
            onChange={(e) => {
              setNote(e.target.value);
            }}
          ></textarea>
        </div>
      </div>
      <div className="row">
        <div className="col-md">
          <SingleDatePicker
            date={date}
            onDateChange={onDateChange}
            focused={focused}
            onFocusChange={focusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
            opeDirection={() => "OPEN_UP"}
          />
        </div>
        <div className="col-md">
          <button
            type="button"
            className="btn btn-primary btn-md btn-block my-2"
            onClick={(e) => {
              setLoading(true);
              if (description === "" || amount === "") {
                setErrorMsg("All fields are required");
                setLoading(false);
              } else {
                setErrorMsg("");
                setLoading(false);
                onSubmited({
                  description: description,
                  created_at: date.valueOf(),
                  note: note,
                  amount: amount,
                });
              }
            }}
          >
            {loading
              ? "...Loading"
              : expense
              ? "Update Expense"
              : "Add Expense"}
          </button>
        </div>
      </div>
    </div>
  );
};
