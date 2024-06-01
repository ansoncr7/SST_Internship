const r1 =require ("readline").createInterface({
    input:process.stdin,
    output:process.stdout,
})
r1.question("enter the temperature in celsius\n",(cel)=>

{
  celsius =parseInt(cel);

  farhenheit=(celsius*9/5)+32;

  console.log("temperature in celsius"+farhenheit);
  r1.close()
});