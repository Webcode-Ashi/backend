const fs= require('fs')

const users =[
    {
        name:"ashi",
        age:"20"
    },
    {
        name:"astha",
        age:"20"
    },
    {
        name:"saloni",
        age:"20"
    },
    {
        name:"sakshi",
        age:"20"
    },
]

fs.writeFile("friend.json",JSON.stringify(users,null,2),(err)=>{
    if(err){
        throw err
    }
    console.log("file Created");
    
})
fs.readFile('friend.json',"utf-8",(err,data)=>{
    if(err){
        throw err
    }
    const users =JSON.parse(data)
    users.push({
        name:"ashish",
        age:"21"
    })
    fs.writeFile('friend.json',JSON.stringify(users,null,2),(err)=>{
        if(err){
            throw err
        }
        console.log("user edited");
        
    })
})