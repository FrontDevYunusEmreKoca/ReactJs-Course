// JSX - JS Xml

var root = document.getElementById("root");

var template = <div>
     <h1 id= "header">Hello World</h1>
     <div>Lorem ipsum dolor sit amet.</div> 
     <ul>
        <li>Lorem, ipsum dolor.</li>
        <li>Lorem, ipsum dolor.</li>
        <li>Lorem, ipsum dolor.</li>
        <li>Lorem, ipsum dolor.</li>
     </ul>
</div>;


var number = 0;
var btnClassOneName = "btnRed";
var btnClassMinusName = "btnBlue";


//es5
function addOne () {
    console.log("add one")

}
//es6
var  minusOne = () => {
    console.log("minus one")
}



var template2 = (
    <div>
        <h1>Number: {number}</h1>
        <button id = "btnPlusOne" className= {btnClassOneName} onClick ={addOne}>+1</button> 
        <button id= "btnMinusOne" className= {btnClassMinusName} onClick = {minusOne}>-1 </button>
    </div>
)

ReactDOM.render(template2,root);