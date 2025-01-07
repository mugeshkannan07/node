
// Asynchronous reading---------------------------
// const fs = require('fs');

// fs.readFile('example.txt','utf-8',(err,data) => {
//     if(err) {
//         console.error('Error reading file:',err);
//     } else{
//         console.log('file content:',data);
//     }
// });
// console.log('hello')



// synchronous reading---------------------------
// const fs = require('fs');
// try{
//      const data = fs.readFileSync('example.txt','utf-8');
//     console.log('file content:',data);
//  } catch(err){
//     console.error('Error reading file:',err);
//  }

// console.log('hello')





// create file---------------------------------------------
// const fs = require('fs');

// Async operation----------------------------------
// console.log('start async operation');
// fs.writeFile('asyncfile.txt','hello from async!',(err) => {
//         if(err) {
//             console.error('Async error creating file:',err);
//         } else{
//             console.log('Async file created successfully');
//         }
//     });
//     console.log('end async operation');


    // sync operation----------------------------------
    // const fs = require('fs');
    // console.log('start sync operation');
    // fs.writeFileSync('syncfile.txt','hello from sync!')
    // console.log('sync file created successfully');
    // console.log('end sync operation');


    // update file--------------------
    // const fs = require('fs');
    // fs.appendFile('example.txt','\nThis is additional content.',(err) => {
    //     if (err) {
    //         console.error(' error upadting file:',err);
    //     } else{
    //         console.log(' file upadted successfully!');
    //     }
    // });




// overwrite entire file-------------------------
    // const fs = require('fs');
    // fs.writeFile('example.txt','This will replace entire content.',(err) => {
    //         if (err) {
    //             console.error(' error overwriting file:',err);
    //         } else{
    //             console.log(' file overwritten successfully!');
    //         }
    //     });


    // delete file-----------------------------------
    // Asynchronus-----deletion------------------------------------
    // const fs = require('fs');
    // fs.unlink('example.txt',(err) => {
    //             if (err) {
    //                 console.error(' error deleting file:',err);
    //             } else{
    //                 console.log(' file deleted successfully!');
    //             }
    //         });


    
    // synchronus---------deletion--------------------------------
    //  const fs = require('fs');
    // fs.unlinkSync('example.txt')
    //  console.log(' file deleted successfully!');
              


// Rename file--------------------------------------------
// Asynchronus-----------------------------------------
    //   const fs = require('fs');
    // fs.rename('oldname.txt','newname.txt',(err) => {
    //             if (err) {
    //                 console.error(' error rename file:',err);
    //             } else{
    //                 console.log(' file renamed successfully!');
    //             }
    //         });




// synchronus-----------------------------------------
// const fs = require('fs');
// fs.renameSync('oldname.txt','newname.txt');
//  console.log(' file deleted successfully!');









// const http = require('http');
// const routes = require('./routes');
// console.log(routes.sometext)
// const server = http.createServer(routes.handler)
// server.listen(3000)



// console.log("1. start coking");

// setTimeout(() => {
//     console.log("2: pasta is ready!");
// }, 2000);

// console.log("3: preparing the salad");