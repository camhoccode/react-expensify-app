import { initializeApp } from "firebase/app";
import {
  collection,
  getDocs,
  getDoc,
  getFirestore,
  addDoc,
  setDoc,
  updateDoc,
  deleteDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

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
const googleProvider = new GoogleAuthProvider();
const auth = getAuth();

export { googleProvider, auth, db as default };
//  const expensesCollection = collection(db, "expenses");
// collection ref
// const notesRef = collection(db, "notes");
// const expensesRef = sRef(db, "expenses");
//fetch
//   getDocs(expensesCollection).then((snapshot) => {
//     const expenses = [];
//     snapshot.docs.forEach((doc) => {
//       expenses.push({ ...doc.data(), id: doc.id });
//     });
//     console.log(expenses);
//   });

// onSnapshot(expensesCollection, (snapshot) => {
//   const expenses = [];
//   snapshot.docChanges().forEach((change) => {
//     if (change.type === "added") {
//       getDocs(expensesCollection).then((querySnapshot) => {
//         querySnapshot.docs.forEach((doc) => {
//           expenses.push({ ...doc.data(), id: doc.id });
//         });
//       });
//     }
//     if (change.type === "modified") {
//       getDoc(doc(db, "expenses", change.doc.id)).then((doc) => {
//         console.log(doc.data());
//       });
//     }
//   });
//   console.log(expenses);
// });

// for (let i = 0; i < notes.length; i++) {
//   const noteRef = doc(notesRef);
//   setDoc(noteRef, notes[i]);
// }

// for (let i = 0; i < expenses.length; i++) {
//   const expenseRef = doc(expensesCollection);
//   setDoc(expenseRef, expenses[i]);
// }

// updateDoc(doc(notesRef, "eHYSixbE0IHVHkwcpvky"), {
//   body: "buy car",
// });

// deleteDoc(doc(notesRef, "ErI8laarmp8rwDwtZPmp"));
