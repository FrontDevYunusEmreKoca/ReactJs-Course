const user = {
    name : "YunusEmre",
    email: "kocay1857@gmail.com",
    city: "Kocaeli",
    roles:
    [
        "admin",
        "customer"
    ],
    getRoles: function(){
      this.roles.forEach ((role) => {
        console.log(role)
        console.log(this.name)
      })
    }
}
user.getRoles();


const addes5 = function(){
    console.log(arguments) // kac adeet parametre gonderecegimi bilmiyorsam arguments olarak yazarim
    let total = 0 ;

    for (let i = 0; i<arguments.length ; i++ ){
        total += arguments[i];
    }
    return total;
}


console.log(addes5(5,10,15,20,25))
