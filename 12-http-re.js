const http = require('node:http');

const server = http.createServer((req , res) => {
    if(req.url === '/'){

        res.write('Welcom to my Websit in node js');
        res.end();
        return;
    } 
    if(req.url === "/about"){
        res.write('Welcom to about page');
        res.end();
        return;

    }
    res.write(`
    <h1>Oopes!!</h1>
    <p>sory we can't seem to find the page </p>
    <a href='/'>back home </a>
    `);
    res.end();
    return;

});

server.listen(5000);
