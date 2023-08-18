const add=(a,b)=>{
    return a+b;
};
console.log(add(5,2));



const student= {
    name:'Riya',
    age:23,
    greet: () => {
        console.log('hi ,I am ' + this.name);
    }
};

student.greet();