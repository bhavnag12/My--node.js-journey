// console.log("start");
// //setTimeout(() => console.log("Mid"),5000);

// for(let x = 0 ;x<=100; x++){}
// console.log("mid");
// console.log("end");
// console.log("1");
// const getConsole = () => {
//   console.log("2");
//     setTimeout(() => {
//         console.log("3");
//     }, 2000);
    
// };
// getConsole();
// for(let i = 0; i < 5e9 ; i++) {
//     console.log("4");
// }

// default export-----------------------------
// import multiply,{add} from "./utils.js";
// //cons fs = require('fs');
 
// const output = add(1,2);
// console.log("add",output);
// //console .log("add:",add(1,2));

// const sample =multi(5,6);
// console.log("sample:",sample);

//named export----------------------------
// import {add} from "./utils.js";
// import multiply from "./utils.js";

// const output = add(1,2);
import {div }from "./function/function.js"

console.log('div',div(9 ,3));

import fs from "fs"

const output = fs.readFileSync('file.txt',"utf8")
console.log("output:",output);
fs.writefileSync("file.txt","New Content");
fs.appendFileSync("file.txt","\nNew Content");
console.log("ended");





