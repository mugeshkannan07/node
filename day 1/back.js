// -------------------------callback---------------------
// const fs = require("fs");

// fs.readFile("example.txt", "utf-8", (error,data) => {
//     if(error) {
//      console.error("Error reading file:", error);
//      return;
//     }
//     console.log("File contact:", data);
// });
// console.log("moving on to other tasks...");


//---------------------create file--------------- 
// const fs = require('fs');
// fs.writeFileSync('hello.txt','hello from node js')



// const https = require('./https')
// const http = require('http')
// function requestListener(request , response){
//     console.log(request)
// }

// // http.createServer()
//  var a = http.createServer(requestListener)
//  a.listen(3000);



// directly call function-------------
// const http= require('http')
// const server = http.createServer((request , response) =>{
//     console.log(request)
// });
// server.listen(8080);
// console.log("hello, node.js");



// aync example
// const { error } = require("console");
// const fs = require("fs");
// fs.readFile("example.txt","utf-8", (error,data)=>{
//     if(error){
//         console.error("error reading file:",error);
//         return;
//     }
//     console.log("file content:",data);
// });
// console.log("moving on to other tasks...");