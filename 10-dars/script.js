// MASSIV / ARRAY/ TO"PLAM
// let arr = [
//   {},
//   "farkhodoff",
//   19,
//   true,
//   false,
//   [],
//   function get() {},
//   null,
//   undefined,
//   NaN,
// ];

// console.log(arr[arr.length - 1]); // arrayning oxirgi elementini tanlab oliw // old way
// console.log(arr.at(-1)); // arrayning oxirgi elementini tanlab oliw // new way

// console.log(arr.toString()); // arrayni stringa o'tkazish

// console.log(typeof arr.join());

// let arr = [1, 2, 3, 4, 5];
// let arr = ["farkhodoff", "dinazarov", "qurbonov", "tamara"];
// for (value of arr) {
//   console.log(value);
// }

// for (index in arr) {
//   console.log(index);
// }
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
//   //   console.log(i);
// }
// let res = arr.concat(arr2);

// console.log(res);

// console.log([] == 0); // true
// console.log([] == "0"); // false
// console.log([] == undefined); // false
// console.log([] == false); // true
// console.log([] == null); // false

const company = ["Webbrain", "Academy"];
function getDuplicateLetters(wba) {
  wba = wba.join("").split("");
  const res = {};

  wba.forEach((value) => {
    res[value] = (res[value] || 0) + 1;
  });

  return res;
}
console.log(getDuplicateLetters(company));

// ARRAY METHODS
// length, isArray, concat, join, toString, unshift, shift, pop, splice
// slice, indexOf, lastIndexOf, split, reverse, includes, push,
