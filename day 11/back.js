
// Hashing a password----------------------------------------
// const bcrypt = require('bcrypt');

// const password = "mypassword123";
// const saltRounds = 10;

// bcrypt.hash(password, saltRounds,(err,hash) => {
//     if(err) {
//         console.error("Error hashing password:", err);
//         return;
//     }
//     console.log("hashed password:",hash);
// });





// simulate saving a hashed password---------------------------------
// const bcrypt = require('bcrypt');
// // simulate user data
// const user = {
//     username: "user123",
//     password: null,
// };

// // register user 
// async function registerUser(plainPassword) {
//     const saltRounds = 12;
//     try{
//         user.password = await bcrypt.hash(plainPassword,saltRounds);
//         console.log("user registered with hashed password:", user.password);
//     } catch (err) {
//         console.error("error during registration:", err);
//     }
// }

// registerUser("mypassword123");





// example:2 User login--------------
// const bcrypt = require('bcrypt');

// const user = {
//         username: "user123",
//         password: null,
//     };
// // step:1
//     async function registerUser(plainPassword) {
//             const saltRounds = 12;
//             try{
//                 user.password = await bcrypt.hash(plainPassword,saltRounds);
//                 console.log("user registered with hashed password:", user.password);
//             } catch (err) {
//                 console.error("error during registration:", err);
//             }
//         }
// // step:2
//         async function registerUser(plainPassword) {
//             try{
//                 if(!user.password) {
//                 console.log("no user registered yet.");
//                 return;
//              }
//                 const match = await bcrypt.compare(inputPassword, user.password);
//                 if (match) {
//                 console.log("Login successful!");
//             } else {
//                 console.log("Invalid password.");
//                 }
//             }   catch(err) {
//                 console.error("error during login:",err);
//             }
//          }

// //  simulating the process---
//  (async () => {
//     await registerUser("mypassword123");

//     setTimeout(() => loginUser("mypassword123"), 2000);
//     setTimeout(() => loginUser("wrongPassword"),3000);
//  })();       






//  comparing passwords---------
// const bcrypt = require('bcrypt');
// const storedHash = "$2b$12$ePMPKadtOcfPWdLOB/Hh5.2Be59MywU4nrZm2iXnYzRxZerOPMdBS";
// const userEnteredPassword = "mypassword123";

// bcrypt.compare(userEnteredPassword, storedHash,(err,result) => {
//     if (err) {
//         console.error("error comparing password:",err);
//         return;
//     }
//     if (result) {
//       console.log("password is correct!");
//     } else {
//         console.log("Invalid password.");
//     }
// });