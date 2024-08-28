// ES5  

var helloEs5 = function(){
    console.log("hello from es5")
}
helloEs5();
// function helloEs55 (){
//     console.log("hello from es5")
// }
// // helloEs55();


//ES6 

let helloES6 = () => {
    console.log("hello from es6")
}
helloES6();


//es5
let multiplyES5 = function (x,y) {
    return x * y; 
}
console.log (multiplyES5(3,5));


//es6
let multiplyES6 = (x,y) => {
    return x*y;
}
console.log (multiplyES6(10,10));


//es5
let getproductES5 = function(id,name) {
    return {
        id:id,
        name : name
    }
}
console.log(getproductES5(3,"telephone"));

//es6
let getproductES6 = (id,name) => {
    return {
        id:id,
        name:name
    }
}
console.log(getproductES6(2,"pc"))

const phones = [
    {name: "iphone 9 " , price : 5000},
    {name: "iphone 10 " , price : 6000},
    {name: "iphone 11 " , price : 7000},
    {name: "iphone 12 " , price : 8000},
    {name: "iphone 13 " , price : 9000},
    {name: "iphone 14" , price : 10000}
]


//es5
let priceEs5 = phones.map(function(phone){ // map her zmaan geriye  bir cikti vermek icin kullanilir
    return phone.price;
})
console.log(priceEs5);


//es6
let priceES6 =  phones.map(phone =>phone.price);
console.log(priceES6)

//es5
let filterES5 =  phones.filter(function(phone){
    return phone.price >= 7000;
})
console.log(filterES5);

//es6
let filterES6 = phones.filter(phone => phone.price >= 7000)
console.log(filterES6);