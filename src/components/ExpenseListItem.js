import React from "react";
import { Link, useNavigate } from "react-router-dom";

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
    <div>
      <Link to={`/edit/${id}`}>
        <h3>{description}</h3>
      </Link>
      <p>
        {amount} - {createdAt}
      </p>
    </div>
  );
};
export default ExpenseListItem;
