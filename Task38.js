const n1=require("readline").createInterface({
    input:process.stdin,
    output:process.stdout,
})
n1.question("enter the square of number",(nu1)=>{
       
           a =parseInt(nu1)
function myFunction(x){
var check
check=a*a
return check
}
var result=myFunction("check")
console.log(result);
n1.close();
})