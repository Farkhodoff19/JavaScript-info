// Object

// let obj = {
//   name: "Farkhodoff",
//   surname: "Ogabek",
//   tel: +998914585828,
// };

// for (let key in obj) {
//   console.log(key[key]);
// }

// let key = "name";

// console.log(obj.name);
// console.log(obj["name"]);

// const obj = {
//   name: "Farkhodoff",
//   age: 19,
//   isMarried: false,
//   isDeveloper: true,
// };

// for (let key in obj) {
//   if (typeof obj[key] === "string") {
//     console.log(key, obj[key]);
//   }
// }

// const person = {
//   name: "John",
//   surname: "Smith",
// };

// person.name = "Pete";
// delete person.name;
// console.log(person);

// let schedule = {};

// function isEmpty(obj) {
//   if (obj === {}) {
//     return obj;
//   } else {
//     return obj;
//   }
// }

// schedule["8:30"] = "Get up";

// console.log(isEmpty(schedule));

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// for (let key in salaries) {
//   if (key > key) {
//     console.log(key, obj[key]);
//   }
// }

// console.log(salaries);

// let menu = {
//   widht: 200,
//   height: 300,
//   title: "My menu",
// };

// for (let key in menu) {
//   if (typeof menu[key] === "number") {
//     menu[key] = menu[key] * 2;
//   }
// }

// console.log(menu);

// let obj = {
//   name: "Farkhodoff",
// };

// let Fname = "name";

// console.log(obj.name);
// console.log(obj[Fname]);
// console.log(obj["Fname"]);

// let salaries = {
//   ann: 100,
//   jack: 250,
//   xaydar: 50,
// };

// if (salaries.ann > salaries.jack && salaries.jack > salaries.xaydar) {
//   console.log(salaries.ann);
// }

// for (let value in salaries) {
//   console.log(salaries[value]);
// }

menu = {
  width: 400,
  height: 600,
  title: "My menu",
};

for (let key in menu) {
  //   console.log(key, menu[key]);
  if (typeof menu[key] === "number") {
    menu[key] = menu[key] * 2;
  }
}

console.log(menu);
