// class es5

var person = function() {

}


//es6 class constructor

class personES6 {
    constructor (name = "Guest" ,year = 2024 , email = "asdsadasddad@gmail.com") {
       this.name = name;
       this.year = year;
       this.email = email;
    }
    calculateAge(){
      return new Date().getFullYear()  - this.year;
        
    }
    greeting(text){
        return `${text}, My name is ${this.name}`;
    }
   

}

//nesne -object 

const p =  new personES6("Yunus",2019,"kocay1857@gmail.com");
const p2 = new personES6()
console.log(p.calculateAge())
console.log(p2.calculateAge())


console.log(p)
console.log(p2)

console.log(p.greeting("hello"))
console.log(p2.greeting("hello"))