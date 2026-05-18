const fs =require('fs')

const students={
    name:"ashi",
    course:"MERN"
}

fs.writeFile('student.json',JSON.stringify(students,null,2),(err)=>{
    if(err){
        throw err
    }
    console.log('file created')
})
fs.readFile('student.json','utf-8',(err,data)=>{
    if(err){
        throw err
    }
    const obj =JSON.parse(data)
    console.log(obj);
    
})

fs.unlink('student.json',(err)=>{
    if(err){
        throw err
    }
    console.log("file deleted");
    
})