// npm install node fetch--------------------
// const fetchData = async() => {
//     try {
//         const fetch = (await import('node-fetch')).default;
//         const respnse = await fetch('https://jsonplaceholder.typicode.com/posts');
//         if(!Response.ok){
//             throw new Error(`HTTP Error: ${respnse.status}`);
//         }
//         const data = await respnse.json();
//         console.log(data.slice(0,5));
//     } catch(error) {
//         console.error('Error fetching data:',error.message);
//     }
// };

// fetchData();





// Event-Driven Architecture--------------------------
// step:1  import the events module-------------------
// const EventEmitter = require('events');

// // step:2 create an instance of EventEmitter-------------------
// const eventEmitter = new EventEmitter();

// // step 3 add a listener for an event---------------------
// eventEmitter.on('greet', (name) => {
//     console.log(`Hello, ${name}!`);
// });

// // step 4 Emit the event------------------------------
// eventEmitter.emit('greet','mugesh');





// Import event module-------------------------------------
// const EventEmitter = require('events');
// const { listeners } = require('process');

// // create an instance f eventEmitter-------------
// const eventEmitter = new EventEmitter();

// // register multiple listener----------------
// eventEmitter.on('start',() => {
//     console.log('The start event was triggered!');
// });


// eventEmitter.on('end',() => {
//     console.log('The end event was triggerd!');
// });

// // Emit events-----------
// eventEmitter.emit('end');
// eventEmitter.emit('starts');




// global objects-----------

// console.log(__dirname);

// const fs = require('fs');
// const path = require('path');

// const filePath = path.join(__dirname,'example.txt');
// console.log("filePath", filePath);

// console.log("__filename",__filename);






// form validation-------------
const http = require('http');
const url = require('url');
const querystring = require('querystring');

// utility function to validation email-----------
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function validateAge(age) {
    const ageNumber = parseInt(age);
    return !isNaN(ageNumber) && ageNumber >= 18;
}

const server = http.createServer((req,res) => {
    const method = req.method;
    const requestUrl = url.parse(req.url, true);

    if(method === 'GET' && requestUrl.pathname === '/') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(`
        <form action="/" method="POST">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required> <br> <br>

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required> <br> <br>

        <label for="age">Age:</label>
        <input type="number" id="age" name="age" required> <br> <br>

        <button type="submit">Submit</button>
    </form>`);
    }

    else if (method === 'POST' && requestUrl.pathname === '/') {
        let body = '';

        req.on('data', chunk => {
            body += chunk;
        });

        req.on('end', () => {
            console.log("body",body)
            const formData = querystring.parse(body);
            console.log("form data", formData);
            const {name,email,age} = formData;

            const error = [];

            if (!name || name.trim().length === 0) {
                error.push('Name is required.');
            }

            if (!validateEmail(email)) {
                error.push('Invalid email format.');
            }

            if (!validateAge(age)) {
                error.push('You must be at least 18 years old.');
            }

            if (error.length > 0) {
                res.writeHead(400, {'Content-Type': 'text/html'});
                res.end(`
                    <h1>Form Submission Failed</h1>
                    <p>${error.join('<br>')}</p>
                    <a href ="/">Go Back</a>`);
            } else {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(`
                    <h1>Form Submitted successfully!</h1>
                     <h2>Submitted Data:</h2>
                     <p><strong>Name:</strong>${name}</p>
                     <p><strong>Email:</strong>${email}</p>
                     <p><strong>Age:</strong>${age}</p>
                      <a href ="/">Go Back</a>
                     `);
            }
        });
    } else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end('  <h1>Page Not Found</h1>')
    }
    });
    
    server.listen(8080, () => {
        console.log('server is running at http://localhost:8080/');
    });




