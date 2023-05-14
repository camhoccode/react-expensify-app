import React from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
// import "../firebase/firebaseSetting";
// import { addDoc, collection, getFirestore } from "firebase/firestore";

const now = moment();
console.log(now.format("MMMM Do, YYYY"));

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      description: props.expense ? props.expense.description : "",
      note: props.expense ? props.expense.note : "",
      amount: props.expense ? (props.expense.amount / 100).toString() : "",
      createAt: props.expense ? moment(props.expense.createAt) : moment(),
      carlendarFocused: false,
      error: "",
    };
  }

  onDescriptionChange = (event) => {
    const description = event.target.value;
    this.setState(() => ({ description }));
  };
  onNoteChange = (event) => {
    const note = event.target.value;
    this.setState(() => ({ note }));
  };
  onAmountChange = (event) => {
    const amount = event.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      // allow user to delete all input
      this.setState({ amount });
    }
  };
  onDateChange = (createAt) => {
    // prevent user to detele date
    if (createAt) {
      this.setState(() => ({ createAt }));
    }
  };
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ carlendarFocused: focused }));
  };
  onSubmit = async (event) => {
    event.preventDefault();

    if (!this.state.description || !this.state.amount) {
      this.setState({ error: "Please provide description and amount" });
    } else {
      this.setState({ error: "" });
      // try {
      //   const db = getFirestore();
      //   const ref = collection(db, "expenses");
      //   await addDoc(ref, {
      //     description: this.state.description,
      //     amount: parseFloat(this.state.amount, 10) * 100,
      //     createAt: this.state.createAt.valueOf(),
      //     note: this.state.note,
      //   });
      // } catch (error) {
      //   console.log("Error: ", error);
      // }
      console.log("Submitted");
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        createAt: this.state.createAt.valueOf(),
        note: this.state.note,
      });
    }
  };
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <input
            type="text"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
          />
          <SingleDatePicker
            date={this.state.createAt} // momentPropTypes.momentObj or null
            onDateChange={this.onDateChange} // PropTypes.func.isRequired
            focused={this.state.carlendarFocused} // PropTypes.bool
            onFocusChange={this.onFocusChange} // PropTypes.func.isRequired
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <textarea
            placeholder="Add a note for your expense"
            value={this.state.textArea}
            onChange={this.onNoteChange}
          ></textarea>
          <button type="submit">Add Expense</button>
        </form>
      </div>
    );
  }
}
