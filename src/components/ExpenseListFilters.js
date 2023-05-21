import React from "react";
import { connect } from "react-redux";
import {
  setTextFilter,
  sortByAmount,
  sortByDate,
  setStartDate,
  setEndDate,
} from "../actions/filters";
import { DateRangePicker } from "react-dates";

class ExpenseListFilters extends React.Component {
  state = {
    carlendarFocused: null,
  };
  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  };
  onFocusChange = (carlendarFocused) => {
    this.setState(() => ({ carlendarFocused }));
  };
  render() {
    return (
      <div className="content-container">
        <div className="input-group">
          <div className="input-group__item">
            <input
              className="text-input"
              type="text"
              value={this.props.filters.text}
              placeholder="Search expenses"
              onChange={(event) => {
                this.props.dispatch(setTextFilter(event.target.value));
              }}
            />
          </div>
          <div className="input-group__item ">
            <select
              className="select"
              value={this.props.filters.sortBy}
              onChange={(event) => {
                if (event.target.value === "date") {
                  this.props.dispatch(sortByDate());
                } else if (event.target.value === "amount") {
                  this.props.dispatch(sortByAmount());
                }
              }}
            >
              <option value="date">Date</option>
              <option value="amount">Amount</option>
            </select>
          </div>
          <div className="input-group__item">
            <DateRangePicker
              startDate={this.props.filters.startDate}
              endDate={this.props.filters.endDate}
              onDatesChange={this.onDatesChange}
              focusedInput={this.state.carlendarFocused}
              onFocusChange={this.onFocusChange}
              showClearDates={true}
              numberOfMonths={1}
              isOutsideRange={() => false}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStoretoProps = (state) => {
  return {
    filters: state.filters,
  };
};

export default connect(mapStoretoProps)(ExpenseListFilters);
