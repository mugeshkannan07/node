
const fs = require('fs');
const requesthandler = (req,res) => {
    const url = req.url;
    const method = req.method;
    if(url === '/'){
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<head><title>enter from details</title></head>');
        res.write('<body><form enctype="multipart/form-data" action="/message" method="POST"><input type="text" name="name"></form></body>');
        res.write('</html>');
        return res.end()
    }

    if(url === '/message' && method =='POST'){
        const body=[];
        req.on('data',(chunk) => {
            body.push(chunk);
            console.log(body);
        })
        return req.on('end',()=> {
            console.log('end event received')
            const parsedbody = Buffer.concat(body).toString()
            console.log(parsedbody);
            const message = parsedbody.split('=');
            fs.writeFile('hello.txt',message[1],(err) => {
                console.log('file write competed')
                res.setHeader('Location','/');
                res.statusCode = 302;
                return res.end()
            });
        })
    }

    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>hello from res.write</title></head>');
    res.write('<body><h1>hello from node js</h1></body>');
    res.write('</html>');
    res.end()
}

module.exports.handler = requesthandler;
module.exports.sometext = 'print mugesh';