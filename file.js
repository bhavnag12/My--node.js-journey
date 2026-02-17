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
// import {div }from "./function/function.js"

// console.log('div',div(9 ,3));

// import fs from "fs"

// const output = fs.readFileSync('file.txt',"utf8")
// console.log("output:",output);
// fs.writefileSync("file.txt","New Content");
// fs.appendFileSync("file.txt","\nNew Content");
// console.log("ended");


// import os from "os"

// //os.platform

// console.log("os.platform():",os.platform())


// const a = () => {
//     b();
//     console.log("~ a ~ a:");
// };
// const b = () => {
//   //  c();
//     console.log("~ b ~ b:");
//     c();
// };
// const c= () =>{
//     console.log("~ c ~ c:");
// };
// a();
// const a = () => {
//     setTimeout(()=>{
//         console.log("async function:");
//     },0);
//    b();
//    console.log("~ a ~ a:");
//  };
// const b = () => {
//    c();
//     console.log("~ b ~ b:");
//     //c();
// };
// const c= () =>{
//     console.log("~ c ~ c:");
// };
// a();

// const a =()=>{

//      setTimeout(()=>{
//         console.log("async function 1");
//     },1000);

//     setTimeout(()=>{
//         console.log("async function 2");
//     },0);
//     b();
//     console.log("~a ~ a:");
// };


// const b =()=>{

//     console.log("~b ~ b:");
//     c();
// };



// const c =()=>{
//         console.log("~c ~ c:");
// };
// a();

// const a = () => {
//     setTimeout(()=>{
//         console.log("asyn Function 2:");
//     },0);
//     console.log("~ b ~ b:");

//     Promise.resolve().then(()=>{
//         console.log("asyn Function 3:");
//     });

//     Promise.resolve().then(()=>{
//         console.log("asyn Function 4:");
//     });
// };

// a();

// const fetchData = (a,b,cb)=>{
//     cb (`${a+b} Data Initilized`);
// };




// const internalFunction = (data) =>{
//     console.log("~ data:",data);
// };
// fetchData(1,2,internalFunction);

//URL
//https:// -> Protocol
//glauniversity.in -> Domain
// UploadAttendance.aspx -> Path parm
// paccess_key = MjAyNi0wMi0xNw==&param2 = value2 -> Query param
// #key -> Hash

/* <div id = "2" ></div>
<div id = "3"></div>
<div id = "someVariable"></div>
<div id = "4"></div> */



const[, , functionName, value1 ,value2] = process.argv;

//connst functionName = process.agrv[2];
console.log("functionNme:" , functionName);
//const value1 = process.argv[3]
console.log("value1:" , value1);
//const value2 = process.argv[4];
console.log("value2:" ,value2);

if(functionName === "add"){
    console.log("add ", number(value1) + Number(value2));
}
if(functionName === "multi"){
    console.log("add :" , value1 * value2);
}