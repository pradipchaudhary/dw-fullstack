/* 
hasing
    same text has differnt hased code ( for securtiy reason)
    generate hased code
    verify hased code
 */

// password@123 => $2b$10$HsDe9ZaWnr9L/XITt975leJuBPN86IjpYJfK6r9Quk.6Cbugm30/y

import bcrypt from "bcrypt";

// let password = " password@123";

// let hasedPass = await bcrypt.hash("password", 10);

// console.log(hasedPass);
let dbPassword =  " $2b$10$k2csrg3XL2soO2RyQ1Cgaex2eok5xsBP3lrbpuP7Dv0s9rP6XdBO6"

let isValidPassword = await bcrypt.compare("password@123",dbPassword)

console.log(isValidPassword)

/* 
bcrypt.hash("abc",10)
    here this code convert abc to  hashed code
bcrypt.compare("Password@123", dbPassword);
    this code result either true or false
    if Password@123 is used to make dbPassword it will return true else return false
*/
