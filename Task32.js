const n1=require("readline").createInterface({
    input:process.stdin,
    output:process.stdout,
});
n1.question("enter the area:",(num1) =>{
 n1.question("enter the area:",(num2) =>{

    a =parseInt(num1)
    b =parseInt(num2)
    function myFunction(a,b){
        let c;
         c=(a*b)
        console.log(c);
    }
    myFunction(a,b);
    n1.close()
})
})