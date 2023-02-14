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

// UPDATE
// let updateUser = (data) => {
//   let res = students.map((value) =>
//     value.id === data.id ? { ...value, [data.type]: data.value } : value
//   );
//   students = res;
// };

// updateUser({
//   id: 2,
//   type: "name",
//   value: "Shabnam",
// });

// updateUser({
//   id: 2,
//   type: "year",
//   value: 1999,
// });
// console.log(students);

// DELETE
// let deleteUser = (id) => {
//   let res = students.filter((value) => value.id !== id);
//   students = res;
// };

// deleteUser(3);
// deleteUser(2);
// console.log(students);

// GET NAME
// let getName = (key) => {
//   let res = students.filter((value) => {
//     return value.name.toLowerCase().includes(key.toLowerCase());
//   });

//   students = res;
// };

// getName("farkhodoff");
// console.log(students);

// GET BY ID
// let getByID = (key) => {
//   let res = students.filter((value) => value.id === key);

//   students = res;
// };

// getByID(3);
// console.log(students);

// GET FILTER
// const getFilter = ({ key, value }) => {
//   let res = students.filter((usr) =>
//     `${usr[key]}`.toLowerCase().includes(`${value}`.toLowerCase())
//   );

//   students = res;
// };

// getFilter({ value: 3, key: "id" });
// // getFilter({ value: "farkhodoff", key: "name" });
// console.log(students);
