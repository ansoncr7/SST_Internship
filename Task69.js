const  person={
    fullname:function(city,country){
        return this.fristname+ " " +this.lastname+ "," +city+ "," +country
    }
}

const person1={
    fristname:"anson",
    lastname:"k regi",
}
console.log( person.fullname.call(person1,["india","norway"]));