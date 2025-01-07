
// difference between filewrite and filewritesync

// const fs = require('fs');

// fs.writeFile('example.txt','this content is written asynchrnously!',(err) => {
//     if (err) {
//         console.error('error writing to example.txt:',err);
//     } else {
//         console.log('example.txt was written succesfully');
//     }
// });

// console.log('this message appears before the file write is cmplete.');



// synchronously write data -----------------------------------------------------------
// const fs = require('fs');
// try{
//     fs.writeFileSync('examplesync.txt','this content is written asynchrnously!');
//     console.log('examplesync.txt was written succesfully');
// } catch(err){
//     console.error(' error written to examplesync.txt:',err);
// }

// console.log('this message appears before the synchrnous file write is cmplete.');



// stream and buffers----------------------------------------------------
// const http = require('http');
// const fs = require('fs');
// const server = http.createServer((req,res)=> {
//     const url = req.url;
//     const method = req.method;
//     if(url === '/'){
//         res.setHeader('Content-type','text/html');
//         res.write('<html>') 
//         res.write('<head><title>Enter from details</title></head>')
//         res.write('<body><form enctype="multipart/formdata action="/message" method="POST"><input type="text" name="msg"><input type="submit" value="send"></form></body>')
//         res.write('</html')
//         return res.end()
//     }
//     if(url === '/message' && method ==='POST'){
//         const body =[];
//         req.on('data',(chunk) => {
//             console.log('chunk')
//             console.log(chunk)
//             body.push(chunk);
//             console.log('body',body)
//         })

//         req.on('end',() => {
//             const parsedBody = Buffer.concat(body).toString();
//             console.log("parseBody",parsedBody)
//             const message = parsedBody.split('=')[1];
//             console.log('message',message);
//             fs.writeFileSync('hello.txt',message[1]);
//         })
//         fs.writeFileSync('hello.txt','dummy');
//         console.log("redirect")
//         res.setHeader('Location','/');
//         res.statusCode = 302;
//         return res.end()
//     }

//     res.setHeader('Content-type','text/html');
//     res.write('<html>');
//     res.write('<head><title>Hello from res.write</title></head>');
//     res.write('<body><h1>hello from node js</h1></body>');
//     res.write('</html');
//     res.end();
// })

// server.listen(3000)

