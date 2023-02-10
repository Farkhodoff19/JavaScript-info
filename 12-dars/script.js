// ADANCED ARRAYS / CRUD
// CREATE
// READ
// UPDATE
// DELETE

let students = [
  { id: 1, name: "Abbos", year: 2003 },
  { id: 1, name: "Oga'bek", year: 2004 },
  { id: 1, name: "Boboqul", year: 2000 },
  { id: 1, name: "Azizbek", year: 2002 },
];

const sortByYear = () => {
  let result = students.sort((a, b) => b.year - a.year);
  students = result;
};

const sortByAlphabet = () => {
  let result = students.sort((a, b) => a.name.localeCompare(b.name));
  students = result;
};

// sortByYear();
sortByAlphabet();
console.log(students);
