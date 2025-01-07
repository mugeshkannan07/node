
// routing-------------------------------------------------------------
// const http = require('http');
// const fs = require('fs');

// const server = http.createServer((req,res)=> {
//     const url = req.url;
//     const method = req.method;

// handle the root route---------------------------------------------------
//     if(url === '/'){
//         res.setHeader('Content-type','text/html');
//         res.write('<html>');
//         res.write('<head><title>Hme Page</title></head>');
//         res.write('<body><h1>Welcome to the home page!</h1>');
//         res.write('<a href="/about">Go to about page</a>');
//         res.write('</body></html');
//         return res.end();
//     }

// handle the about route---------------------------------------------------
//     if(url === '/about'){
//         res.setHeader('Content-type','text/html');
//         res.write('<html>');
//         res.write('<head><title>About Page</title></head>');
//         res.write('<a href="/about">Go back to home page</a>');
//         res.write('</body></html');
//         return res.end()
//     }

// handle the redirect route---------------------------------------------------
//     if(url === '/redirect'){
//         res.setHeader('Location','/');
//         res.statusCode = 302;
//         return res.end();
//     }

// handle the 404 route--------------------------------------------------------
//     res.statusCode = 404;
//     res.setHeader('Content-type','text/html');
//     res.write('<html>');
//     res.write('<head><title>404 Not Found</title></head>');
//     res.write('<a href="/about">Page Not Found</a>');
//     res.write('</body></html');
//     return res.end()
// });

// server.listen(3000, () => {
//     console.log('Server is running on http://localhost:3000');
// });




// simple http ServiceWorkerRegistration(basic)-----------------------------------------
// const http = require('http');

// const server = http.createServer((req,res)=>{
//     res.setHeader('Content-type','text/html');
//         res.write('<html>');
//         res.write('<head><title>My first node.js server</title></head>');
//         res.write('<h1>Hello from node,js</h1></body>');
//         res.write('</html');
//         res.end();
// });

// server.listen(8080, () => {
//     console.log('Server is listening on http://localhost:8080');
//     });



// routing and handling different urls -----------------------------------------------------
// const http = require('http');

// const server = http.createServer((req,res)=> {
//     const url = req.url;

//     if(url === '/'){
//         res.setHeader('Content-type','text/html');
//         res.write('<html>');
//         res.write('<head><title>Hme Page</title></head>');
//         res.write('<body><h1>Welcome to the home page!</h1>');
//         res.write('</body></html');
//         return res.end();
//     }

//     if(url === '/about'){
//         res.setHeader('Content-type','text/html');
//         res.write('<html>');
//         res.write('<head><title>About Page</title></head>');
//         res.write('<body><h1>this is the about page</h1></body>');
//         res.write('</html');
//         return res.end()
//     }
//     else{
//         res.statusCode = 404;
//             res.setHeader('Content-type','text/html');
//             res.write('<html>');
//             res.write('<head><title>404 Not Found</title></head>');
//             res.write('<body><h1>Page Not Found</h1></body>');
//             res.write('</html');
//             return res.end();
//     }
// });

// server.listen(3000, () => {
//         console.log('Server is listening on http://localhost:3000');
//         });




// get method---------------------------------------------------------------------------
// const http = require('http');
// const fs = require('fs');
// const path = require('path');
// const { error } = require('console');

// const server = http.createServer((req,res) => {
//     if (req.method === 'GET' && req.url === '/data') {
//         const filePath = path.join(__dirname,'data.json');

//         fs.readFile(filePath,'utf-8',(err,jsonData) => {
//             if (err) {
//                 res.writeHead(500, {'content-type': 'application/json'});
//                 res.end(JSON.stringify({error:'Failed to load data from file.'}));
//                 return;
//             }
//             res.writeHead(200, {'content-type': 'application/json'});
//             res.end(jsonData);
//         });
//     }else if(req.method === 'GET' && req.url ==='/'){
//         res.writeHead(200, {'content-type': 'text/plain'});
//         res.end('welcome to the server! use /data to fetch the data.');
//     } else {
//         res.writeHead(404, {'content-type': 'application/json'});
//         res.end(JSON.stringify({error:'Invalid route or method.'}));
//     }
// });

// const PORT = 3000;
// server.listen(PORT,() => {
//     console.log('server is running on http://localhost:${PORT}');
// });




// post methods--------------------------------------------------------------------
// const { error } = require('console');
// const http = require('http');
// const querystring = require('querystring');

// const users = [];

// const server = http.createServer((req,res) => {
//         if (req.method === 'GET' && req.url === '/') {
// const htmlForm = `
// <html>
// <body>
//     <h1>Register</h1>
//     <form action="/register" method="POST">
//         <label for="name">Name:</label>
//         <input type="text" id="name" name="name" required> <br> <br>
//         <label for="email">Email:</label>
//         <input type="text" id="email" name="email" required> <br> <br>
//         <button type="submit">submit</button>
//     </form>
// </body>
// </html>
// `;
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         res.end(htmlForm);
//         } else if (req.method === 'POST' && req.url === '/register'){
//             let body = '';
//             req.on('data', chunk => {
//                 body += chunk;
//                 console.log('body',body)
//             });

//             req.on('end',() => {
//                 try{
//                     const formData = querystring.parse(body);
//                     console.log("formdata", formData);
//                     console.log(formData.name);
//                     console.log(formData.email);

//                     if (!formData.name || !formData.email) {
//                         res.writeHead(400, {'Content-Type': 'application/json'});
//                         res.end(JSON.stringify({error:'name and email are required'}));
//                         return;
//                     }

//                     const newUser = {
//                         id: users.length +1,
//                         name: formData.name,
//                         email:formData.email
//                     };

//                     users.push(newUser);

//                     res.writeHead(201, {'Content-Type': 'application/json'});
//                     res.end(JSON.stringify({message:'user registerd successfully!',user:}));
//                  } catch (error){
//                             res.writeHead(500, {'Content-Type': 'application/json'});
//                             res.end(JSON.stringify({error:'server error occured'}));
//                         }
//                     ));
//                  } else {
//                         res.writeHead(404, {'Content-Type': 'application/json'});
//                         res.end(JSON.stringify({error:'Route or method not found'}));
//                     }
                
//             }); 
        
        

//         const PORT = 3000;
//         server.listen(PORT,() => {
//             console.log('server is running on http://localhost:${PORT}');
//         });






// const fs = require('fs');
// function readFileExample(){
//     try{
//         const data = fs.readFileSync('example.txt','utf-8');
//         console.log('File cntent:',data);
//     } catch (error) {
//         console.log('An error occured:',error.message);
//     }finally {
//         console.log('Attempt to read file completed.');
//     }
// }
// readFileExample();