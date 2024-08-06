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

// var name = "Samsung S10";
// var price = 5000;
// var description = "cok iyi bir telefon";

var product = {
        name : "Samsung S10",
        price : 7700,
        description: "Cok iyi bir telefon",
        types :
        [
            "red",
            "blue",
            "orange"
        ]
       
}
function getDescription(description) {
    if (description)
    {
        return <p id="product-des">description: {description}</p> 
    }
    else 
    {
        return "no des";
    }
   

}


var template2 = (
    <div  id="product-details">
        <h2 id =" product-name">name: {product.name ? product.name: "no name"}</h2>    
        {(product.price && product.price > 0 ) &&  <p>price:{product.price} TL</p> }
        {getDescription(product.description)}
        <p>types: {product.types.length > 0 ?  "there are optains" : "no optains" }</p>
    </div>
);




//reactDom
ReactDOM.render(template2,root);