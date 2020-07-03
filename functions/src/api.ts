const express = require('express');

export const auth = express();

auth.get('/', function(req:any , res:any){

    res.status(200).json({"status":"success", "title" : "Hello"});

});
