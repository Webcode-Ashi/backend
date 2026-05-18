const http =require('http')

const {MongoClient}=require('mongodb')
const url='mongodb://localhost:27017/'
const client =new MongoClient(url)
let collection;
const connectdb=async()=>{
    await client.connect()
    const database=client.db('college')
    collection=database.collection('students')
    console.log("mongodb connected");
    
}
connectdb()
const server =http.createServer((req,res)=>{
if(req.url==='/'){
    res.end("api is working")
}
else if (req.url==='/register' && req.method==='POST'){
    let body ='';
    req.on('data',(chunk)=>{
        body +=chunk.toString()
    })
    req.on('end',async()=>{
        const data =JSON.parse(body)
        await collection.insertOne(data)
        res.writeHead(200,{
            'content-type':'application/json'
        })
        res.end(JSON.stringify({message:"data saved"}))
    })
}
})
server.listen(3000,()=>{
    console.log("server is running");
    
})