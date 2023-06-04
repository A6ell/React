const fs=require('fs')
// fs.readFile('data.txt','utf-8',(err, data)=>{
//     if (err){
//         console.error(err)
//         return
// }
try{
const data =fs.readFileSync('data.txt','utf-8')
let array = data.split('\n')
let mapped = array.map(person =>{
    let new_person = person.split(',');
    return new Object({
        id: new_person[0],
        first_name: new_person[1],
        last_name: new_person[2],
        email:new_person[3],
        gender:new_person[4]
    })
});
console.log(mapped)
}catch(err){
    console.error(err)
}
console.log('Hit')
