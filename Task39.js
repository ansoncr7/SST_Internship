const n1=require("readline").createInterface({
    input:process.stdin,
    output:process.stdout,
})
n1.question("Enter the radius",(nu1)=>{
       
       const n=parseInt(nu1)
       function area(n){
        var ans
        ans=Math.PI*Math.pow(n,2);
        return ans;

       }
       var result =area(n)
       console.log(result);
    })