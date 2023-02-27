const os = require('node:os');


// show nfo of useer 

const user = os.userInfo();
console.log(user);

// method returns the system  uptime in seconds 
console.log(`the system Uptime is ${os.uptime()} seconds`);

const currentOs = {
    name:os.type(),
    release:os.release(),
    totalMe:os.totalmem(),
    freeMem:os.freemem(),
}

console.log(currentOs);
