// #1
// object keylarini toping
// let obj = {
//   id: 1,
//   name: "WebBrain",
// };

// #1 Answer
// for (let key in obj) {
//   console.log(key);
// }

// #2
// object valuelarining raqamga tenglarini toping
// let obj = {
//   id: 1,
//   name: "WebBrain",
// };

// // #2 Answer
// for (let toNum in obj) {
//   if (typeof obj[toNum] === "number") {
//     console.log(toNum, obj[toNum]);
//   }
// }

// No3
// object valuelarining boolean tipidagi malumotlrini qaytaring keylari bn biriga
// let obj = {
//   id: 1,
//   name: "WebBrain",
//   offline: true,
//   online: true,
//   individual: false,
// };
// // chiqish
// // {   offline:true,
// //     online:true,
// //     individual:false
// // }

// for (let key in obj) {
//   if (typeof obj[key] === "boolean") {
//     console.log(key, obj[key]);
//   }
// }

// No4
// object va string berilgan .agar object keylari ichida stringga teng bolgan key bolsa shu key va valueni chiqazing
// let obj = {
//   id: 1,
//   name: "WebBrain",
//   offline: true,
//   online: true,
//   individual: false,
// };
// chiqish
//     name:"WebBrain"

// #4 Answer
// function Search(obj) {
//   for (let key in obj) {
//     if (typeof obj[key] === "string") {
//       console.log((str = key), obj[key]);
//     }
//   }
// }

// Search(obj);
