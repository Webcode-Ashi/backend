const http =require('http')
const server =http.createServer((req,res)=>{
    if(req.url==='/'){
    res.write('this is home page')
    }
  else if(req.url==='/about'){
    res.write('this is about page')
  }
  else if(req.url==='/contact'){
    res.write('this is contact page')
  }
  else{
    res.write("page not found")
  }
  
   res.end()
})

server.listen(3000,()=>{
    console.log("server running");
    
})