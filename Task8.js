const r1 =require ("readline").createInterface({
    input:process.stdin,
    output:process.stdout,
});
r1.question("who are you?\n",(name)=>
r1.question("what is your age\n",(name2)=>    
{
    console.log("hey there "+name+"!");
    console.log("my age is"+name2+"!");
    r1.close();
}));