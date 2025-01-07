// exports imports---------------------

// const fs = require('fs');
// const requestHandler = ()=>{
//     console.log('hello from mugesh');
// };

// // // exporting single property------------
// module.exports = requestHandler;


// // // //  exporting multiple property------------
// module.exports = {handler: requestHandler,someText: 'printing'};

// // using exports to add property-------------------
// exports.handler = requestHandler;
// exports.someText = 'print';


// // // using module.exports directly for each propety-----------
// module.exports.handler = requestHandler;
// module.exports.someText = 'print mugesh';




// import--------------------------------------
// const http = require('http');
// const fs = require('fs');
// const path = require('path');

// http.createServer((req,res) => {
//     const filePath = path.join(__dirname,'index.html');

//     fs.readFile(filePath, 'utf-8', (err,data) => {
//         if (err){
//             console.error('Error reading file:',err);
//             res.writeHead(500,{'Content-Type':'text/plain'});
//             res.end('Server Error');
//             return;
//         }
//         res.writeHead(200,{'Content-Type': 'text/html'});
//         res.end(data);
//     });
// }).listen(3000,() => {
//     console.log('server is running at http://localhost:3000');
// });



// objects in javascript------------------------------------
// const person ={
//     name: 'mugesh',
//     age: 23,
//     greet: function(){
//         console.log('hello, '+this.name);
//     }
// };

// console.log(person.name);
// person.greet();




// array in javascript------------------------------------
// const fruits = ['apple','orange','banana'];
// console.log(fruits[0]);



// Arrow function---------
// const greet = (name) => {
//     console.log('hello,' +name);
// };

// greet('alice');


// spread and rest operators
// const numbers =[1,2,3];
// const moreNumbers = [...numbers,4,5];
// console.log(moreNumbers);


// const person1 = {name:'mugesh',age:23};
// const updaedPerson = {...person1,city:'thanjavur'};
// console.log(updaedPerson);

// rest operators-------------------
// const sum = (...numbers) => {
//     return numbers.reduce((total,num) => total + num,0);
// };
// console.log(sum(1,2,3,4));


// Destructing in js----------------
// const person2 ={ name2:'mugesh',age2:23};
// const { name2 ,age2 } = person2;
// const  name2=person2.name2 ;
// const  age2=person2.age2 ;
// console.log("out",name2);
// console.log(age2);


// Array destructing
// const numbers = [1,2,3];

// const[first,second] = numbers;
// console.log(first);
// console.log(second);


// setting simple server------
// const http = require('http');

// const server = http.createServer((req,res) => {
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.end('hello, this is my first server!');
// });

// server.listen(3000,() => {
//     console.log('server is running on http://localhost:3000');
// });