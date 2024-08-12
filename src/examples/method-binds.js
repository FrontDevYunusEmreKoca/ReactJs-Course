const user = {
    name:"Yunus Emre",
    getUserName(){
        return this.name;
    }
}

const getName = user.getUserName;
console.log(getName())

console.log(user.name)
console.log(user.getUserName())

