const r1 =require ("readline").createInterface({
    input:process.stdin,
    output:process.stdout,
});
r1.question("enter the number\n",(num1)=> {
r1.question("enter the second number\n",(num2) =>  
{
    const a=parseInt(num1);
    const b=parseInt(num2);

if(a%2==0&&b%==0)

    {
        console.log("is a even number");
    }
else
{
    console.log("is a odd number");
}   r1.close() 

});
});