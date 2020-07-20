import React from "react";
import { connect } from "react-redux";
import { sortByDate, sortByAmount } from "../../actions/filters";

const SortBy = (props) => {
  return (
    <div>
      <button
        className="btn  btn-primary"
        onClick={() => {
          props.dispatch(sortByDate());
        }}
      >
        Sort By Date &nbsp; <i className="fa fa-sort" aria-hidden="true"></i>
      </button>
      &nbsp;
      <button
        className="btn  btn-primary mt-xs-3"
        onClick={() => {
          props.dispatch(sortByAmount());
        }}
      >
        Sort By Amount &nbsp; <i className="fa fa-sort" aria-hidden="true"></i>
      </button>
      <div className="form-group">
        <input
          type="date"
          className="form-control"
          onChange={(e) => {
            console.log(e.traget.value);
          }}
        ></input>
      </div>
    </div>
  );
};

export default connect()(SortBy);
