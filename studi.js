const readline = require("readline")
const fs = require("fs");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
console.log(`present students`);

rl.question("your name? ", (name) =>{
    rl.question("your class? ", (classes)=>{
        rl.question("present or not ",(present) => {
    const file = fs.readFileSync("storage.json","utf-8")
    const contacts = JSON.parse(file)
    const nextId = contacts.length > 0 ? Math.max(...contacts.map(c => c.id)) + 1 : 1
    let contact = {id: nextId,name,classes,present}
    contacts.push(contact)
    fs.writeFileSync("storage.json",JSON.stringify(contacts,null,2))
    present == "Present" || "present" ? console.log("good") : console.log("drop out aja");
    console.log(`Your Id: ${contact.id}`);
    tampilkanData()
        })
    })
})

function tampilkanData(){
    rl.question("which students you want to display, id: ",(n)=>{
        const read = fs.readFileSync("storage.json","utf-8")
        const data = JSON.parse(read)
        const findData = data.find(item => item.id == Number(n))
        if(findData){
            console.log("This is your data", findData);
        }
    rl.close()
    })
}