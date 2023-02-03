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

let user = {
  name: "Farkhodoff",
  sayHi() {
    console.log(`Hi ${this.name}`);
  },
};

user.sayHi();
