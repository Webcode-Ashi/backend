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
    res.setHeader('Access-Control-Allow-Origin','*')
     res.setHeader('Access-Control-Allow-Methods','POST,GET,OPTIONS')
     res.setHeader('Access-Control-Allow-Headers','Content-Type')
     if(req.method==='OPTIONS'){
        res.writeHead(200)
        res.end()
        return
     }
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
else if(req.url==='/get-data' && req.method==='GET'){
    const students =await collection.find().toArray()
    res.writeHead(200,{
        'content-type':'application/json'
    })
    res.end(JSON.stringify({students}))
}
})
server.listen(3000,()=>{
    console.log("server is running");
    
})