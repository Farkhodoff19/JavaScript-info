// DATASTRUCTURE | new Date() | JSON

// let students = [
//   { id: 1, name: "Farkhodoff", year: 2003 },
//   { id: 2, name: "Gerakloff", year: 2002 },
// ];

// let res = students.reduce((value, current) => {
//   console.log(value, current);
// }, students);

// console.log(res);
// // CREATE

// let createUser = (user) => {
//   let res = [...students, { id: students.length + 1, ...user }];
//   students = res;
// };

// createUser({ name: "Askaroff", year: 2001 });
// console.log(students);

// DELETE
// let deleteUser = (id) => {
//   let res = students.filter((value) => value.id !== id);
//   students = res;
// };

// deleteUser(1);
// console.log(students);

// UPDATE
// let getUpdatae = (data) => {
//   let res = students.map((value) => {
//     return value.id === data.id ? { ...value, [data.type]: data.value } : value;
//   });

//   students = res;
// };

// getUpdatae({ id: 2, type: "name", value: "Askaroff" });
// console.log(students);
