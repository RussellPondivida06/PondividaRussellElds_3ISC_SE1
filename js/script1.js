function myself(firstName, lastName, age, subject){
    return{
    firstName: firstName,
    lastName: lastName,
    age: age,
    subject: subject,
    introduce: function(){
        console.log('Hello, I am '+firstName+' '+lastName)
    }
        ,enrolled: function(){
console.log('I am enrolled in '+ +subject)
}
    }
}

let russell = myself('Russell', 'Pondivida', 21, 'ICS2609');
russell.introduce();