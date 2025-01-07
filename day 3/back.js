// call back------------
// const fs = require('fs');

// fs.readFile('example.txt','utf-8',(err,data) => {
//     if (err) {
//         console.log('Error reading the file:',err);
//         return;
//     }
//     console.log('file content:',data);
// });
 
// console.log('this message print first!');



// promises------------------------------------
// const fs = require('fs');

// function readFileAsync(filePath){
// return new Promise((resolve,reject) => {
//     fs.readFile(filePath,'utf-8',(err,data) => {
//         if(err){
//             reject('error reading the file:'+err);
//         }else{
//             resolve(data);
//         }
//     });
// });
// }


// promises to rea example.txt------------------------
// readFileAsync('example.txt')
// .then((data) => {
//     console.log('File content:', data);
// })
// .catch((error) =>{
//     console.log(error);
// });
// console.log('this message prints first!');


// Async/Await------------------------------------------
// const fs = require('fs').promises;

// async function readFileContent(){
//     try{
//         const data = await fs.readFile('example.txt','utf-8');
//         console.log('File content:',data);
//     } catch(err){
//         console.log('error:',err);
//     }
// }

// readFileContent();
// console.log('this message prints first!');


// import required modules----------------------------------------
// const fs = require('fs');
// const path = require('path');
// const os = require('os');

// const directorypath = path.join(__dirname,'html_files');
// const filePath = path.join(directorypath,'example.html');
// if (!fs.existsSync(directorypath)){
//     fs.mkdirSync(directorypath);
//     console.log(`Directory created at:${directorypath}`);
// } else{
//     console.log(`Directory already exists at: ${directorypath}`);
// }

// const htmlContent =`
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>HTML</title>
// </head>
// <body>
//     <h1>Hello this is a sample</h1>
// </body>
// </html>`;

// fs.writeFile(filePath,htmlContent,(err) => {
//     if (err) {
//         console.error('error writing HTML file:',err);
//     } else {
//         console.log(`HTML file created at:' ${filePath}`);
//     }
// });

// fs.readFile(filePath,'utf-8',(err,data) => {
//     if (err){
//         console.error('Error reading HTML file:',err);
//     } else {
//         console.log('HTML file content:\n',data);
//     }
// });

// console.log('Operating System Information:');
// console.log('OS Type:',os.type());
// console.log('OS Platform:',os.platform());
// console.log('OS CPU architecture:',os.arch());
// console.log('OS Home Directory:',os.homedir());
// console.log('OS Separator:',path.sep);


// import required module--------------------------------
// const fs = require('fs');
// const path = require('path');
// const http = require('http');

// const PORT = 3000;

// const server = http.createServer((req,res) => {
//     if (req.method === 'GET'){
//         if(req.url === '/'){
//             fs.readFile(path.join(__dirname,'index.html'),(err,data)=> {
//                 if (err){
//                     res.writeHead(500,{'Content-Type': 'text/plain'});
//                     res.end('Error loading the page');
//                 } else {
//                     res.writeHead(200, {'Content-Type': 'text/html'});
//                     res.end(data);
//                 }
//             });
//         } else if (req.url === '/cakes'){
//             fs.readFile(path.join(__dirname,'cakes.json'),'utf-8',(err,data) =>{
//                 if (err){
//                     res.writeHead(500,{'Content-Type': 'text/plain'});
//                     res.end('Error reading cake data');
//                 } else {
//                     res.writeHead(200, {'Content-Type': 'text/html'});
//                     res.end(data);
//                 }
//             });
//           }  else{
//             // 404 for other paths error----
//                 res.writeHead(404, {'Content-Type': 'text/html'});
//                 res.end('Not Found');
//                }
//             }
//         });


// server.listen(PORT,() => {
//     console.log(`server is running at http://localhost:${PORT}`);
// });          
