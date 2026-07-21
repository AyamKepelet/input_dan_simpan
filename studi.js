const readline = require("readline")
const fs = require("fs");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
console.log(`present students`);

    let id = 0
rl.question("your name? ", (name) =>{
    rl.question("your class? ", (classes)=>{
        rl.question("present or not ",(present) => {
    let contact = {id: ++id,name,classes,present}
    const file = fs.readFileSync("storage.json","utf-8")
    const contacts = JSON.parse(file)
    contacts.push(contact)
    fs.writeFileSync("storage.json",JSON.stringify(contacts,null,2))
    present == "Present" ? console.log("Nice Kid") : console.log("Absen");
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