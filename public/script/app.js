"use strict";

// JSX - JS Xml

var root = document.getElementById("root");
var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
  id: "header"
}, "Hello World"), /*#__PURE__*/React.createElement("div", null, "Lorem ipsum dolor sit amet."), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Lorem, ipsum dolor."), /*#__PURE__*/React.createElement("li", null, "Lorem, ipsum dolor."), /*#__PURE__*/React.createElement("li", null, "Lorem, ipsum dolor."), /*#__PURE__*/React.createElement("li", null, "Lorem, ipsum dolor.")));

// var name = "Samsung S10";
// var price = 5000;
// var description = "cok iyi bir telefon";

var product = {
  name: "Samsung S10",
  price: 7700,
  description: "Cok iyi bir telefon",
  types: ["red", "blue", "orange"]
};
function getDescription(description) {
  if (description) {
    return /*#__PURE__*/React.createElement("p", {
      id: "product-des"
    }, "description: ", description);
  } else {
    return "no des";
  }
}
var template2 = /*#__PURE__*/React.createElement("div", {
  id: "product-details"
}, /*#__PURE__*/React.createElement("h2", {
  id: " product-name"
}, "name: ", product.name ? product.name : "no name"), product.price && product.price > 0 && /*#__PURE__*/React.createElement("p", null, "price:", product.price, " TL"), getDescription(product.description), /*#__PURE__*/React.createElement("p", null, "types: ", product.types.length > 0 ? "there are optains" : "no optains"));

//reactDom
ReactDOM.render(template2, root);
