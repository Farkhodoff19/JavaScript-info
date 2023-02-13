// NUMBERS

// console.log(100_000_000 + 1);

// let obj1 = {
//   child: { name: "s" },
// };

// let obj2 = {
//   child: { name: "f" },
// };

// console.log(Object.assign(obj1,obj2));
// console.log("child" in obj1);
// console.log(destructureObj);
// console.log({ ...destructureObj });

let obj = {
  name: "Farkhodoff",
  age: 19,
  child: {
    name: "toshmat",
    age: 21,
    child: {
      name: "roza",
      age: 22,
    },
  },
};

let sum = 0;

while (obj) {
  sum += obj.age;

  obj = obj.child;
}

console.log(sum);
