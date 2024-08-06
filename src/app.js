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
    number++
    renderApp();
    console.log("add one")

}
//es6
var  minusOne = () => {
    number--
    renderApp();
    console.log("minus one")
}

function renderApp (){
    var template2 = (
        <div>
            <h1>Number: {number}</h1>
            <button id = "btnPlusOne" className= {btnClassOneName} onClick ={addOne}>+1</button> 
            <button id= "btnMinusOne" className= {btnClassMinusName} onClick = {minusOne}>-1 </button>
        </div>
    )
    ReactDOM.render(template2,root);
}

function tick(){
    var element = (
        <div>
            <h2>time is : {new Date().toLocaleTimeString()}</h2>
        </div>
    );
    ReactDOM.render(element,root)
}

setInterval(tick,1000) /// surekli bir saniyede bir cagir.

//renderApp();
