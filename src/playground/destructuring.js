//
// obj destruc
//

//
// array des
//

const address = ["277 huynh gam", "tay thanh", "tan phu", "hcm"];
const [, , quan = "aa"] = address;

console.log(`you are in ${quan}`);

const item = ["coffee(hot)", "$2", "$2.5", "$3"];
// const [coffee, sSize, mSize, Lsize] = item;
const [nameItem, s, m, l] = item;
console.log(`a M-size ${nameItem} hot cost ${m}`);

// const person = {
//   name: "And",
//   age: 22,
//   location: {
//     city: "hcm",
//     temp: 33,
//   },
// };

// const { name: firstName = "anoy", age, location } = person;

// console.log(`${firstName} is ${age} years old`);
// const { city, temp: temperature } = person.location;

// if (city && temperature) {
//   console.log(`it's ${temperature} in ${city}`);
// }

const book = {
  title: "ego is the enemy",
  author: "ryan",
  publisher: {
    // name: "panguin",
  },
};

const { name: publishername = "self-published" } = book.publisher;

console.log(publishername);
