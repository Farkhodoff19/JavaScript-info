// // ADVANCED MASSIV / ARRAY/ TO"PLAM

// let arr = [
//   { id: 1, year: 2003, name: "Farhodov Og'abek" },
//   { id: 1, year: 2002, name: "Farhodov Og'abek" },
//   { id: 1, year: 2004, name: "Farhodov Og'abek" },
//   { id: 1, year: 2005, name: "Farhodov Og'abek" },
// ];

// let res = arr.filter((value) => value.year === 2002);
// console.log(res);

// let arr = [{ id: 1, name: "Najot ta'lim" }];
// let arr2 = [{ id: 1, name: "Najot ta'limsssssssssssssssssssssssssssss" }];
// console.log(arr.toString() === arr2.toString());
// console.log();

// // let response = arr.filter((value) => value.year === 2003);

// // console.log(response);

// let calc = 23 * "yigirma uch";

// console.log(calc);

// let arrNumber = [23, 24, 26, 27, "19"];

// console.log(arrNumber.some((value) => typeof value === "number"));
// console.log(arrNumber.fill("farkhodoff", 1));

// let arr = [2, 3, 1];

// arr.sort();
// console.log(arr);

// let arr = [1, 2, 4];
// arr.splice(2, 0, 3);
// console.log(arr);

// let arr = [2, 3, 4, 5];

// let sum = arr.reduce((value) => {
//   return (value += value);
// });

// console.log(sum);

// let str = ["orange", "apple", "banana", "kiwi"];

// let res = str.filter((value, index) => {
//   return value.length <= 5;
// });

// console.log(res);

// let users = [
//   { id: 1, year: 2003, name: "Farhodov Og'abek" },
//   { id: 2, year: 2002, name: "Askarov Azizbek" },
//   { id: 3, year: 2002, name: "Askarov Azizbek" },
//   { id: 4, year: 2002, name: "Askarov Azizbek" },
//   { id: 5, year: 2004, name: "Eshmatov Olimjon" },
// ];

// let res = users.filter((value) => value.year === 2002);

// console.log(res);

// let num = [22, 322];

// // let res = num.sort((a, b) => a - b);
// let res = num.every((value) => {
//   return typeof value === "number";
// });

// let res = num.some((value) => {
//   return typeof value === "string";
// });

// console.log(res);

// // console.log(res);

// let str = ["Watermelon", "banana", "kiwi", "apple"];

// let res = str.sort((a, b) => a.localeCompare(b));
// let res = str.sort();

// console.log(res);

// ARRAY METHODS
// filter, reduce, sort, find, findIndex, forEach, map, some, every, fill, copyWithin, flat, new Map, A rray.from

let users = [
  { id: 1, year: 2003, name: "Farhodov Og'abek" },
  { id: 2, year: 2002, name: "Askarov Azizbek" },
  { id: 3, year: 2002, name: "Askarov Azizbek" },
  { id: 4, year: 2002, name: "Askarov Azizbek" },
  { id: 5, year: 2004, name: "Eshmatov Olimjon" },
];

// let res = users.find((value, index) => {
//   return value.id == 5;
// });

// console.log(res);

// let num = [1, [2, [3, 4]], 5, 6];

// let res = num.copyWithin(0, 3, 6);
// console.log(res);
// let res = num.fill(33, 0, 1);
// console.log(res);

// let res = num.flat(Infinity).reduce((s, c) => {
//   return s + c;
// });

// console.log(res);

// GET DUPLICATE NUMBER
// let num = [
//   1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6,
//   7, 7, 7, 8, 8, 9, 111, 111, 222, 333, 222, 333, 444, 444,
// ];

// let res = num
//   .filter((value, index, array) => array.indexOf(value) === index)
//   .sort((a, b) => a - b);
// console.log(res);

// let nM = new Map([
//   ["a", 1],
//   ["b", 1],
// ]).keys();

// console.log(nM);

let obj = new Map([
  ["a", 1],
  ["b", 2],
]).entries();

let obj1 = new Map([
  ["a", 1],
  ["b", 2],
]).entries();

console.log(obj.next());
console.log(obj1.next());
console.log(obj.next());
console.log(obj1.next());
