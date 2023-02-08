// ADVANCED MASSIV / ARRAY/ TO"PLAM

let arr = [
  { id: 1, year: 2003, name: "Farhodov Og'abek" },
  { id: 1, year: 2002, name: "Farhodov Og'abek" },
  { id: 1, year: 2004, name: "Farhodov Og'abek" },
  { id: 1, year: 2005, name: "Farhodov Og'abek" },
];

let response = arr.filter((value) => value.year === 2003);

console.log(response);
