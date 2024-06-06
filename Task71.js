function hasproperty(obj,prop){
    for(var key in obj){
        if(key===prop){
            return true;
}
}
return false;
}
//example usage

var person={
    name:"john",
    age:30,
    occupation:"engineer"
};
var res=hasproperty(person,"name1");
if(res==true)
    {
        console.log("present");

    }
    else
    {
        console.log("not present");
    }