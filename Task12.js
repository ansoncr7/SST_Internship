const r1 =require ("readline").createInterface({
    input:process.stdin,
    output:process.stdout,
});
r1.question("enter the frist number\n",(num1)=>
r1.question("enter the second number\n",(num2)=>    
{
    const n1=parseInt(num1);
    const n2=parseInt(num2);
        
console.log("inital number:num1=",num1,"num2=",num2);

//comparson operators

console.log("num1 == num2:",num1 == num2);
console.log("num1 != num2:",num1 != num2);
console.log("num1 === num2:",num1 === num2);
console.log("num1 !== num2:",num1 !== num2);
console.log("num1 > num2:",num1 > num2);
console.log("num1 <num2:",num1 < num2);
console.log("num1 >= num2:",num1>=num2);
console.log("num1<= num2:",num1<=num2);
    r1.close();
}));