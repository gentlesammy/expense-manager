import React from "react";
import { connect } from "react-redux";
import { removeExpense } from "../../actions/expenses";
import { Link } from "react-router-dom";
const Expense = (props) => {
  const {
    id: uid,
    description,
    note,
    amount,
    created_at: date_created,
  } = props.expen;
  return (
    <div className="col-md-6 my-2">
      <div className="card p-2">
        <div className="d-flex justify-content-between align-items-center">
          <h6 className="text-primary">{description}</h6>
          <div>
            <button className="btn btn-primary btn-sm">
              <Link to={`/edit/${uid}`}>
                <i className="fa fa-pen text-white"></i>
              </Link>
            </button>
            &nbsp;
            <button
              className="btn btn-danger btn-sm"
              onClick={(uid) => {
                props.dispatch(removeExpense({ id: props.expen.id }));
              }}
            >
              <i className="fas fa-trash"></i>
            </button>
          </div>
        </div>

        <p>
          <small>
            <strong>Created: </strong>
            {new Date(date_created).toDateString()}
          </small>
        </p>
        <p>
          <strong>Amount:</strong> #{amount}
        </p>
        <p>
          <strong>Detail: </strong>
          {note}{" "}
        </p>
      </div>
    </div>
  );
};

export default connect()(Expense);
