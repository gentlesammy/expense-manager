import React from "react";
import { connect } from "react-redux";
import {
  filterExpenseByText,
  sortByStartDate,
  sortByEndDate,
} from "../../actions/filters";
import moment from "moment";
import { DateRangePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";

class ExpenseListFilter extends React.Component {
  state = {
    calendarFocused: null,
  };

  onFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }));
  };
  render() {
    return (
      <div className="row mb-5">
        <div className="col-md-5">
          <input
            type="text"
            value={this.props.filters.text}
            placeholder="Search By Topic"
            className="form-control bg-white text-primary py-4"
            onChange={(e) => {
              this.props.dispatch(filterExpenseByText(e.target.value));
            }}
          />
        </div>

        <div className="col-md-7">
          <DateRangePicker
            startDate={this.props.filters.startDate}
            endDate={this.props.filters.endDate}
            onDatesChange={({ startDate, endDate }) => {
              this.props.dispatch(sortByStartDate(startDate));
              this.props.dispatch(sortByEndDate(endDate));
            }}
            numberOfMonths={1}
            isOutsideRange={() => false}
            focusedInput={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            showClearDates={true}
            className="bg-primary"
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    filters: state.filters,
  };
};

export default connect(mapStateToProps)(ExpenseListFilter);
