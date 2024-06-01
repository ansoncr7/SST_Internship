const n1=require("readline").createInterface({
    input:process.stdin,
    output:process.stdout,
});
n1.question("enter the frist number:",(num1) =>{
n1.question("enter the second number:",(num2) =>{
    a =parseInt(num1)
    s=parseInt(num2)
    function myFunction(x,y){
        let a;
         a=(x*y)
        console.log(a);
    }
    myFunction(a,s);
    n1.close()
})
})