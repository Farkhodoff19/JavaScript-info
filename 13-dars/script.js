// DATASTRUCTURE | new Date() | JSON

let students = [
  { id: 1, name: "Farkhodoff", year: 2003 },
  { id: 2, name: "Gerakloff", year: 2002 },
];

// GET CREATE
let addUser = (data) => {
  return (students = [...students, data]);
};

addUser({ name: "Farkhodoff", year: 2007 });

console.log(students);
