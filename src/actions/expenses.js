import db from "../firebase/firebaseSetting";
import {
  addDoc,
  updateDoc,
  getDocs,
  collection,
  deleteDoc,
  doc,
} from "firebase/firestore";

// ADD_EXPENSE
export const addExpense = (expense) => ({
  type: "ADD_EXPENSE",
  expense,
});

export const startAddExpense = (expenseData = {}) => {
  return (dispatch) => {
    const {
      description = "",
      note = "",
      amount = 0,
      createdAt = 0,
    } = expenseData;
    const expense = { description, note, amount, createdAt };
    const expenseCollection = collection(db, "expenses");

    addDoc(expenseCollection, expense).then((ref) => {
      dispatch(
        addExpense({
          id: ref.id,
          ...expense,
        }),
      );
    });
  };
};

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates,
});
export const startEditExpense = (id, updates) => {
  const expensesCollection = collection(db, "expenses");
  return async (dispatch) => {
    await updateDoc(doc(expensesCollection, id), updates);
    dispatch(editExpense(id, updates));
  };
};

// SET_EXPENSES
export const setExpenses = (expenses) => ({
  type: "SET_EXPENSES",
  expenses,
});

// startSetExpenses  from firestore
export const startSetExpenses = () => {
  const expensesCollection = collection(db, "expenses");
  return async (dispatch) => {
    const querySnapshot = await getDocs(expensesCollection);
    const expenses = [];
    querySnapshot.docs.forEach((doc) => {
      expenses.push({ ...doc.data(), id: doc.id });
    });
    dispatch(setExpenses(expenses));
  };
};

// DELETE_EXPENSE
export const deleteExpense = ({ id } = {}) => ({
  type: "DELETE_EXPENSE",
  id,
});

// startDeleteExpense from firestore
export const startDeleteExpense = (id) => {
  const expensesCollection = collection(db, "expenses");
  return async (dispatch) => {
    await deleteDoc(doc(expensesCollection, id));
    dispatch(deleteExpense({ id }));
  };
};
