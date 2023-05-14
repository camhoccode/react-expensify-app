// //Expense Reducer

const expensesReducerDefaultState = [];
const expenseReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.expense];
    case "DELETE_EXPENSE":
      return state.filter(({ id }) => id !== action.id);
    case "EDIT_EXPENSE":
      return state.map((expense) => {
        if (expense.id === action.id) {
          return { ...state, ...action.updates };
        } else {
          return expense;
        }
      });
    case "SET_EXPENSES":
      return action.expenses;
    default:
      return state;
  }
};

export default expenseReducer;

//Expense Reducer

// const initialExpensesState = {
//   expenses: [],
//   expenseId: "",
// };
// const expenseReducer = (state = initialExpensesState, action) => {
//   switch (action.type) {
//     case "ADD_EXPENSE":
//       return {
//         ...state,
//         expenses: [...state.expenses, action.expense],
//       };
//     case "REMOVE_EXPENSE":
//       return {
//         ...state,
//         expenses: state.expenses.filter(({ id }) => id !== action.id),
//       };
//     case "EDIT_EXPENSE":
//       return {
//         ...state,
//         expenses: state.expenses.map((expense) => {
//           if (expense.id === action.id) {
//             return { ...state, ...action.updates };
//           } else {
//             return expense;
//           }
//         }),
//       };
//     case "DISPLAY_EXPENSE_BY_ID":
//       return {
//         ...state,
//         id: action.id,
//       };
//     default:
//       return state;
//   }
// };

// export default expenseReducer;
