const readline=require("readline").createInterface({
    input:process.stdin,
    output:process.stdout,
});
readline.question("enter a number:\n", (input)=>{
 let number=parseFloat(input);

// post increment

 console.log("number++", number++);
console.log("after post increment");
console.log(number);

// pre increment

 console.log("Initial number:",number);
 console.log("++number", ++number);
 console.log("after per increment");
console.log(number);
 readline.close()
})


