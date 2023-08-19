// Step-1 require
const fs=require('fs');

// 1. read file from readFileSync without call back function
const txt=fs.readFileSync('demo.txt','utf-8');
console.log(txt);
const time1=performance.now();
// console.log(time1);
// 1. read file from readFileSync with call back function
// fs.readFile('demo.txt','utf-8',(text)=>{
//     console.log(text);
// })
//  const time2=performance.now();
//  console.log(time2);
//  console.log(time2);
