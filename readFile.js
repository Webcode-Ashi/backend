const { log } = require('console')
const fs =require('fs')

fs.appendFile('demo.txt','\n this is new file',(err,data)=>{
    if(err){
        throw err
    }
    console.log('file updated');
    
})
fs.readFile('demo.txt','utf-8',(err,data)=>{
    if(err){
        throw err
    }
    console.log(data);
})