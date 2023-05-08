import { createStore, combineReducers } from "redux";
import { v4 as uuidv4 } from "uuid";

// ADD_EXPENSE
const addExpense = ({
  description = "",
  note = "",
  amount = 0,
  createAt = 0,
} = {}) => ({
  type: "ADD_EXPENSE",
  expense: {
    id: uuidv4(),
    description,
    note,
    amount,
    createAt,
  },
});

// REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
  // action generator
  type: "REMOVE_EXPENSE",
  id,
});
// EDIT_EXPENSE
const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates,
});

// SET_TEXT_FILTER
const setTextFilter = (text = "") => ({
  type: "SET_TEXT_FILTER",
  text,
});
// SORT_BY_DATE
const sortByDate = () => ({
  type: "SET_DATE_FILTER",
});
// SORT_BY_AMOUNT
const sortByAmount = () => ({
  type: "SET_AMOUNT_FILTER",
});
// SET_START_DATE
const setStartDate = (number) => ({
  type: "SET_START_DATE",
  number,
});
// SET_END_DATE
const setEndDate = (number) => ({
  type: "SET_END_DATE",
  number,
});

//Expense Reducer

const expensesReducerDefaultState = [];
const expenseReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.expense];
    case "REMOVE_EXPENSE":
      return state.filter(({ id }) => id !== action.id);
    case "EDIT_EXPENSE":
      return state.map((expense) => {
        if (expense.id === action.id) {
          return { ...state, ...action.updates };
        } else {
          return expense;
        }
      });
    default:
      return state;
  }
};

// Filters Reducer
const filterReducerDefaultState = {
  text: "",
  sortBy: "date", // date or amount
  startDate: undefined,
  endDate: undefined,
};
const filterReducer = (state = filterReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_TEXT_FILTER":
      return { ...state, text: action.text };
    case "SET_DATE_FILTER":
      return { ...state, sortBy: "date" };
    case "SET_AMOUNT_FILTER":
      return { ...state, sortBy: "amount" };
    case "SET_START_DATE":
      return { ...state, startDate: action.number };
    case "SET_END_DATE":
      return { ...state, endDate: action.number };
    default:
      return state;
  }
};

//timestamps (milisecond)
// jan 1st 1970 (unix epoch)
// 33400, 22, -222

// Get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter((expense) => {
      const startDateMatch =
        typeof startDate !== "number" || expense.createAt >= startDate;
      const endDateMatch =
        typeof endDate !== "number" || expense.createAt <= endDate;
      const textMatch = expense.description
        .toLowerCase()
        .includes(text.toLowerCase());
      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return a.createAt < b.createAt ? 1 : -1;
      } else if (sortBy === "amount") {
        return a.amount < b.amount ? 1 : -1;
      }
    });
};
//Store creation

const store = createStore(
  combineReducers({
    expenses: expenseReducer,
    filters: filterReducer,
  }),
);

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log("ho", visibleExpenses);
});

const expense1 = store.dispatch(
  addExpense({ description: "rent", amount: 111, createAt: 1000 }),
);
const expense2 = store.dispatch(
  addExpense({ description: "car", amount: 222111, note: "mecr", createAt: 1 }),
);

// store.dispatch(removeExpense({ id: expense1.expense.id }));
// store.dispatch(editExpense(expense2.expense.id, { amount: 50 }));
// store.dispatch(setTextFilter("ca"));

store.dispatch(sortByAmount()); //amount
// store.dispatch(sortByDate()); // date

// store.dispatch(setStartDate(10020));
// store.dispatch(setEndDate(1230));

const demoState = {
  expense: [
    {
      id: "12313",
      description: "cam",
      note: "bigc",
      amount: 222,
      createAt: 0,
    },
  ],
  filters: {
    text: "rent",
    sortBy: "amount", // date or amount
    startDate: undefined,
    endDate: undefined,
  },
};

const user = { name: "yen", age: 24 };
// console.log(user);
// console.log({ ...user, name: "phil", location: "miami" });
