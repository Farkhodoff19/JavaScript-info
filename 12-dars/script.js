// // ADANCED ARRAYS / CRUD
// // CREATE
// // READ
// // UPDATE
// // DELETE

let students = [
  { id: 1, name: "farkhodoff", year: 2003 },
  { id: 2, name: "to'ychi off", year: 2002 },
  { id: 3, name: "xaydaroff", year: 2001 },
  { id: 4, name: "askarofff", year: 2000 },
];

// CREATE
// let createUser = (user) => {
//   // BEST PRACTICE
//   students = [...students, { id: students.length + 1, ...user }];
//   // BAD PRACTICE
//   // students.push(user);
// };
// createUser({ name: "iskandaroff", year: 2021 });
// console.log(students);

// READ
// let getYear = students.sort((a, b) => b.year - a.year);
// console.log(students);

// let getName = students.sort((a, b) => a.name.localeCompare(b.name));
// console.log(students);

// DELETE
// let deleteUser = (id) => {
//   let res = students.filter((value) => value.id !== id);
//   students = res;
// };

// deleteUser(3);
// deleteUser(2);
// console.log(students);
