const r1 =require ("readline").createInterface({
    input:process.stdin,
    output:process.stdout,
});
r1.question("enter the frist number\n",()=>
r1.question("enter the second number\n",(b)=>    
{
    const num1=parseInt(a);
    const num2=parseInt(b);
        
console.log("inital number:num1=",num1,"num2=",num2);

// logical operator

console.log("logical operator:");
// const p=true;
// const q=false;
console.log("num1 && num2",num1&& num2);
console.log("num1|| num2",num1||num2);
console.log("!num1",!num1);
r1.close()
}));