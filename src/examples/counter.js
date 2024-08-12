class Counter extends React.Component {
    constructor (props){
        super(props)


        this.addOne = this.addOne.bind(this);
        this.minusOne = this.minusOne.bind(this);
        this.reset = this.reset.bind(this);

        this.state = {
            number : 0
        }


    }

    addOne(){
        this.setState ({
            number: this.state.number + 1 // bu daha kullanisli
        }); 
        console.log("+1")
    }

    minusOne(){
        this.setState ((prevState) => {
            return { 
                number:prevState.number -1  // yukardaku addOne ile ayni kullanim aslinda
            }
        })
        console.log("-1")
    }

    reset (){
        this.setState({
            number:0
        })
    }

    render(){
        return (
        <div>
            <h1>Number:{this.state.number}</h1>
            <button onClick ={this.addOne}>+1</button> 
            <button onClick = {this.minusOne}>-1 </button>
            <button onClick = {this.reset}>Resetle </button>
        </div>
        )
    }
}

ReactDOM.render(<Counter />, document.getElementById("root"))


// var number = 0;
// var btnClassOneName = "btnRed";
// var btnClassMinusName = "btnBlue";


// //es5
// function addOne () {
//     number++
//     renderApp();
//     console.log("add one")

// }
// //es6
// var  minusOne = () => {
//     number--
//     renderApp();
//     console.log("minus one")
// }

// function renderApp (){
//     var template2 = (
//         <div>
//             <h1>Number: {number}</h1>
//             <button id = "btnPlusOne" className= {btnClassOneName} onClick ={addOne}>+1</button> 
//             <button id= "btnMinusOne" className= {btnClassMinusName} onClick = {minusOne}>-1 </button>
//         </div>
//     )
  
// }

// function tick(){
//     var element = (
//         <div>
//             <h2>time is : {new Date().toLocaleTimeString()}</h2>
//         </div>
//     );
//     ReactDOM.render(element,root)
// }

// setInterval(tick,1000) /// surekli bir saniyede bir cagir.

// //renderApp();

