// 1.understand respnse------------------
// const http = require('http');
// const server = http.createServer((req,res) => {
//     res.setHeader('Content-type','text/html');

//     res.write('<html>')
//     res.write('<head><title>Hello from res.write</title></head>')
//     res.write('<body><h1>hello from node js</h1></body>')
//     res.write('</html')
//     res.end()
// })

// server.listen(3000)



//2. Routing Request-----------------------------
// const http = require('http');
// const server = http.createServer((req,res)=> {
//     const url = req.url;
//     if(url === '/'){
//         res.setHeader('Content-type','text/html');
//         res.write('<html>') 
//         res.write('<head><title>Enter from details</title></head>')
//         res.write('<body><form action="/message" method="POST"><input type="text" name="msg"><input type="submit" value="send"></form></body>')
//         res.write('</html')
//         return res.end()
//     }
//     res.setHeader('Content-type','text/html');

//     res.write('<html>')
//     res.write('<head><title>Hello from res.write</title></head>')
//     res.write('<body><h1>hello from node js</h1></body>')
//     res.write('</html')
//     res.end()
// })

// server.listen(8080)



// Redircting Request-------------------------------
const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res) =>{
    const url = req.url;
    const method = req.method;

    if(url === '/'){
        res.setHeader('Content-type','text/html');
                res.write('<html>') 
                res.write('<head><title>Enter from details</title></head>')
                res.write('<body><form action="/message" method="POST"><input type="text" name="msg"><input type="submit" value="send"></form></body>')
                res.write('</html')
                return res.end()
    }
    if(url === '/message' && method ==='POST'){
        const body =[];
        req.on('data',(chunk) => {
            body.push(chunk);
            console.log('body',body)
        });
        req.on('end',() => {
            const parsedBody = Buffer.concat(body).toString();
            console.log("parseBody",parsedBody)
            const message = parsedBody.split('=')[1];
            console.log('message',message)
            fs.writeFile('hello.txt',message,(err) => {
                if (err){
                    console.error('Error writing to file:',err);
                    res.statusCode = 500;
                    res.setHeader('Content-Type','text/plain');
                    res.write('Server Error');
                    return res.end();
                }
                console.log('File written successfully.Redirecting to /');

                res.statusCode = 302;
                res.setHeader('location','/');
                res.end();
            });
        });
    } else{
        res.setHeader('Content-type','text/html');
        res.write('<html>');
        res.write('<head><title>Hello from res.write</title></head>');
        res.write('<body><h1>hello from node js</h1></body>');
        res.write('</html');
        res.end();
    }
});

server.listen(3000,() => {
    console.log('server is running on http://localhost:3000');
})




// Parsing Request Body------------------------------------
// const http = require('http');
// const server = http.createServer((req,res) =>{
//     if (req.method === 'POST') {
//         const body = [];

//         req.on('end',() => {
//             const parsedBody = Buffer.concat(body).toString();

//             console.log('Received Data:',parsedBody);

//             res.setHeader('Content-Type','text/plain');
//             res.write('data received');
//             res.end();
//         });
//     }else{
//         res.setHeader('Content-Type','text/plain');
//         res.write('<html>');
//         res.write('<body><form action="/message" method="POST"><input type="text" name="msg"><input type="submit" value="send"></form></body>');
//         res.write('</html>');
//         return res.end()
//     }
// });
//       server.listen(3000,() => {
//       console.log('server is running on http://localhost:3000');
//       });