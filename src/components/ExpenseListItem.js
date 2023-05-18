import React from "react";
import { Link, useNavigate } from "react-router-dom";
import moment from "moment";
import numeral from "numeral";

const ExpenseListItem = ({ id, description, amount, createdAt }) => {
  // const navigate = useNavigate();
  // const onPageClicked = () => {
  //   dispatch({
  //     type: "DISPLAY_EXPENSE_BY_ID",
  //     id,
  //   });
  //   navigate(`/expenses/${id}`);
  // };
  return (
    <div key={id}>
      <Link to={`/edit/${id}`}>
        <h3>{description}</h3>
      </Link>
      <p>
        {numeral(amount / 100).format("$0,0.00")} -{" "}
        {moment(createdAt).format("Do MMMM, YYYY")}
      </p>
    </div>
  );
};
export default ExpenseListItem;
