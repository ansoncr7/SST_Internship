const person={
    fristname:"john",
    lastname:"doe",
    fullname:function(){
        return this.fristname+""+this.lastname;
    }
}

const member={
    fristname: " hege ",
    lastname: " nilsen ",
}
let fullname=person.fullname.bind(member);
console.log(fullname());