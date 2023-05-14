const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("this is resolved data");
    reject("data fail fetch");
  }, 1500);
});

promise
  .then((data) => {
    console.log(data);
  })
  .catch((e) => console.log("error:", e));

console.log("after");
