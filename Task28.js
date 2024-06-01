const r1 =require ("readline").createInterface({
    input:process.stdin,
    output:process.stdout,
})
var name
var age
r1.question("enter your name:",(name)=>{
r1.question("enter your age:",(age)=>{

function display()
{
    console.log("your name is " +name+"  your age is"+age)
}
display ();
})
})