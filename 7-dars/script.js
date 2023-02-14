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

// let obj = {
//   Fname: "Hello",
//   age: 19,
//   child: {
//     chilName: "Farkhodoff",
//   },
// };
// let {
//   Fname,
//   age,
//   child: { chilName },
// } = obj;

// console.log(chilName);

// SPREAD OPERATOR

// let obj = {
//   childName: "Farkhodoff",
//   age: 1947,
// };

// // console.log(obj);

// // obj = { ...obj.child };
// console.log({ childName: "IT CENTER", ...obj });

// let obj = {
//   name: "Farkhodoff",
//   child: {
//     childname: "testing name",
//   },
// };

// const {
//   name: newName,
//   child: { childname },
// } = obj;

// console.log(childname);
// console.log(newName);
