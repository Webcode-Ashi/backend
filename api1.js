const http =require('http')


http.createServer((req,res)=>{
    res.writeHead(200,{"content-type":"text/html"})
    res.write
    ("<h1>Welcome in node.js</h1>")
    res.end("chl gye ree by nodejs")

    
}).listen(3000,()=>{
    console.log("server is running");
    
})
