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

var template2 = (<div  id="product-details">
    <h2 id =" product-name">Samsung S9</h2>
    <p id="product-price" >price: 3000 TL</p>
    <p  id="product-des" >description: iyi bir telefon</p>
</div>);




//reactDom
ReactDOM.render(template2,root);