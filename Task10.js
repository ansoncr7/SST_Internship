 const n1=require("readline").createInterface({
    input:process.stdin,
    output:process.stdout,
})
n1.question("enter the frist number:",(a) =>{
n1.question("enter the second number:",(b) =>{

    const sum=parseInt(a)+parseInt(b)
    var sub=a-b;
    var mult=a*b;
    var divi=a/b;
    var mod=a%b;
    console.log("the sum of two numbers="+sum);
    console.log("sub the numbers="+sub);
    console.log("multipliction of bthe number"+mult);
    console.log("divi the number"+divi);
    console.log("mod the number"+mod);
    n1.close()
})
})

    