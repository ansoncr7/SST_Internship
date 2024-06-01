const r1 =require ("readline").createInterface({
    input:process.stdin,
    output:process.stdout,
})
var name
r1.question("enter the date of brith:",(dob)=>{
    const today =new Date();
    const age=today.getFullYear()-dob

    console.log(age);


})
