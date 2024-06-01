const r1 =require ("readline").createInterface({
    input:process.stdin,
    output:process.stdout,
});
r1.question("enter the frist number:",(n) =>{
let result=0;


while(n>0){
    result+=n%10;
    n=parseInt(n/10);
}
console.log("sum:"+result);
});
    