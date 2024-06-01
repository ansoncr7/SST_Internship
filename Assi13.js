const r1 =require ("readline").createInterface({
    input:process.stdin,
    output:process.stdout,
})
r1.question("enter the range\n",(a)=>{

for(i=0;i<a;i++)
    {
        if(i%2==0)
        {
            console.log(i);
        }    
    }












    r1.close();

});