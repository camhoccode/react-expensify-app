import moment from "moment";

export default [
  {
    id: "1",
    description: "Gum",
    note: "",
    amount: 195,
    createdAt: 0,
  },
  {
    id: "2",
    description: "Rent",
    note: "",
    amount: 109500,
    createdAt: moment(0).subtract(4, "days").valueOf(),
  },
  {
    id: "3",
    description: "Credit Card",
    note: "",
    amount: 4500,
    createdAt: moment(0).add(4, "days").valueOf(),
  },
];

// CREATE A COMPONENT TO SUMARY ALL VISIBLE EXPENSE:
//'should return 0 if no expenses',
//should correctly add up a single expense'
//should correctly add up multiple expenses
// const sumaryExpenseList = (arr) => {
//     if (arr.length === 0) return 'no expense'
//     let sumAmount = 0
//     for (let i = 0; i < arr.length; i++) {
//         sumAmount += arr[i].amount
//     }
//     return sumAmount
// }

// sumaryExpenseList()
