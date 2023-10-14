import http from "http";
import fs from "fs";
import {generateLovePercent} from "./features.js"
//console.log(myname);
//console.log(generateLovePercent());

const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        fs.readFile("./index.html",(err,data)=>{
            res.end(data);
        });
               
    }
    else if (req.url ==='/about'){
        res.end(`<h1>Love is ${generateLovePercent()}</h1>`);
    }
    else if (req.url === '/contact'){
        res.end("<h1>Contact Page!  </h1>");
    }
    else{
        res.end("<h1>page not found!</h1>");
    }
    

});
server.listen(5000,() =>{
    console.log("server is working!");
});