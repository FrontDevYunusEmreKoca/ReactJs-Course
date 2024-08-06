// JSX - JS Xml

var root = document.getElementById("root");


var app = {
    title :"To Do APP",
    description: "lorem ipsum dolor",
    items : 
    [
        "item1",
        "item2",
        "item3"
    ]

};

function onFormSubmit (event){
    event.preventDefault(); // yeni bir tane event olusturdugumuzda sayfa yenilenmesin istiyorum
    var item = event.target.elements.txtItem.value;
    
    if (item){
        app.items.push(item);
        event.target.elements.txtItem.value = "";
        render();
    }
   
    console.log("form submitted");
}

function clearItems (){
    app.items = [ ];
    render();
}

function render(){
    var template = (
        <div>
            <h1 id= "header">{app.title}</h1>
            <div>{app.description}.</div> 
            <ul>
                <li>Lorem, ipsum dolor.</li>
                <li>Lorem, ipsum dolor.</li>
                <li>Lorem, ipsum dolor.</li>
                <li>Lorem, ipsum dolor.</li>
            </ul>
            <p>
                <button onClick ={clearItems} >Clear Items</button>
            </p>
            <p>{app.items.length}</p>
            <form onSubmit = {onFormSubmit}>
                <input type="text" name = "txtItem"/>
                <button type = "submit">Add Item</button>
            </form>
        </div>
);

ReactDOM.render(template,root);

}

render();


