// // Objects Part II / Advanced Objects

// let persons = {
//   name: "Farkhodoff",
//   age: 19,
//   child: {
//     name: "Najmiddin",
//     age: 21,
//     child: {
//       name: "Botir",
//       age: 22,
//     },
//   },
// };

// let sum = 0;

// while (persons) {
//   sum = sum + persons.age;

//   persons = persons.child;
// }

// console.log(sum);

// let user = {
//   name: "Farkhodoff",
//   sayHi() {
//     console.log(`Hi ${this.name}`);
//   },
// };

// user.sayHi();

// let person = {
//   name: `Farkodof`,
//   ae: 19,
//   cild: {
//     name: `Cros`,
//     ae: 21,
//     cild: {
//       ae: 22,
//     },
//   },
// };

// let sum = 0;

// while (person) {
//   sum = sum + person.ae;

//   person = person.cild;
// }

// console.log(sum);

// DISTRUCTURE

let obj = {
  Fname: "Hello",
  age: 19,
};
let { Fname, age } = obj;

console.log(Fname);
