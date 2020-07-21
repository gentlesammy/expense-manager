import React from "react";
import { connect } from "react-redux";
import { sortByDate, sortByAmount } from "../../actions/filters";

const SortBy = (props) => {
  return (
    <div className="row">
      <div className="col-md-6 my-2">
        <button
          className="btn  btn-link btn-block py-2"
          onClick={() => {
            props.dispatch(sortByDate());
          }}
        >
          Sort By Date &nbsp; <i className="fa fa-sort" aria-hidden="true"></i>
        </button>
      </div>
      <div className="col-md-6 my-2">
        <button
          className="btn  btn-link mt-xs-3 btn-block py-2"
          onClick={() => {
            props.dispatch(sortByAmount());
          }}
        >
          Sort By Amount &nbsp;{" "}
          <i className="fa fa-sort" aria-hidden="true"></i>
        </button>
      </div>
      &nbsp;
    </div>
  );
};

export default connect()(SortBy);
