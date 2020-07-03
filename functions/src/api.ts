const express = require('express');

export const auth = express();

auth.use(function(req:any, res:any, next:any){
    console.log(req.headers.origin);
    if( ["https://angular-ssr-u.firebaseapp.com", "http://locahost", "http://localhost:4200", "http://localhost:4000", "https://angular-ssr-u.web.app"].indexOf(req.headers.origin) > -1){
        res.setHeader("Access-Control-Allow-Origin",req.headers.origin);
        console.log('origin set');
    }
    res.set({
        'Access-Control-Allow-Methods': 'GET,POST',
        'Access-Control-Allow-Headers': 'Content-Type',
    });
    if(req.method === "OPTIONS"){
        return res.send(200);
    }
    next();
}).get('/', function(req:any , res:any){

    res.status(200).json({"status":"success", "title" : "Hello"});

});
