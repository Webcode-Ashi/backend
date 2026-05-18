const http =require('http')


const server=http.createServer((req,res)=>{
    res.end("chl gye ree by nodejs")
    
})

server.listen(3000,()=>{
    console.log("server is srunning");
    
})