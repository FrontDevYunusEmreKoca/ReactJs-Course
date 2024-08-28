
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

class Student extends personES6 { // inheritance 
    constructor (name,year,email,studentNumber){
        super(name,year,email);
        this.studentNumber = studentNumber;
        
        // name ve year seyde var ana  class da oldugu icin super diyerek ortan cekebiliriz. Ama studentNumber olmadigi icin this kullanmak zorundasin
    }
    study() {
        console.log("I AM LEARNING")
    }
    greeting(text){
        let str = super.greeting(text);
        str += ` My number is ${this.studentNumber}`
        return str;
    }

}



class Teacher extends personES6 {
    constructor (name,year,email,departmants){
        super(name,year,email);
        this.departmants =departmants;
    }
    teach() {
        console.log("I AM teaching")
    }
    // greeting(text){
    //     return `${text}, My name is ${this.name}. My departmants is ${this.departmants}`;
    // }
    greeting(text){
        let str = super.greeting(text);
        str += ` My departman is ${this.departmants}`
        return str;
    }
    
}
//nesne -object 

const p =  new Student("Yunus",2019,"kocay1857@gmail.com",1226);
const p2 = new Teacher("yasar" ,2023, "yasar@gmail.com","math")
console.log(p.calculateAge())
console.log(p2.calculateAge())


console.log(p)
console.log(p2)
console.log(p.study())
console.log(p2.teach())

console.log(p.greeting("hello"))
console.log(p2.greeting("hello"))