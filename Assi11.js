const r1 =require ("readline").createInterface({
    input:process.stdin,
    output:process.stdout,
})
r1.question("enter the 1 st side\n",(a)=>
r1.question("enter the 2 st side\n",(b)=>
{
  n=parseInt(a,b)

  area=a*b/2

  console.log("area of trinagle"+area);
  r1.close()
}));