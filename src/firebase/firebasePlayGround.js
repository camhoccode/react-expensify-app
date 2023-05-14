// import firebase from "firebase/app";
// import {  getDatabase } from "firebase/database";
import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAyq5IwNGzLO2S9vKe6ObZU0BZBU88KAH0",
  authDomain: "expensify-f63a0.firebaseapp.com",
  projectId: "expensify-f63a0",
  storageBucket: "expensify-f63a0.appspot.com",
  messagingSenderId: "78344537883",
  appId: "1:78344537883:web:89a59513674cb4a594f5be",
  measurementId: "G-R3NXP5H514",
};

// init firebase app
initializeApp(firebaseConfig);
// init services
const db = getFirestore();

// collection ref
const colRef = collection(db, "expenses");

// get collection data
getDocs(colRef)
  .then((snapshot) => {
    let expenses = [];
    snapshot.docs.forEach((doc) => {
      expenses.push({ ...doc.data(), id: doc.id });
    });
    console.log(expenses);
  })
  .catch((e) => console.log(e));

// Define the data sample
const data = {
  description: "rent",
  note: "",
  amount: 1,
  createdAt: 1,
};
// Add the data to the "messages" collection
async function addData() {
  try {
    const messagesRef = collection(db, "messages");
    await addDoc(messagesRef, data);
    console.log("Data successfully written to Firestore!");
  } catch (error) {
    console.error("Error writing document: ", error);
  }
}

addData();
