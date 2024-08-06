"use strict";

// JSX - JS Xml

var root = document.getElementById("root");
var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
  id: "header"
}, "Hello World"), /*#__PURE__*/React.createElement("div", null, "Lorem ipsum dolor sit amet."), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Lorem, ipsum dolor."), /*#__PURE__*/React.createElement("li", null, "Lorem, ipsum dolor."), /*#__PURE__*/React.createElement("li", null, "Lorem, ipsum dolor."), /*#__PURE__*/React.createElement("li", null, "Lorem, ipsum dolor.")));
var number = 0;
var btnClassOneName = "btnRed";
var btnClassMinusName = "btnBlue";

//es5
function addOne() {
  console.log("add one");
}
//es6
var minusOne = function minusOne() {
  console.log("minus one");
};
var template2 = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Number: ", number), /*#__PURE__*/React.createElement("button", {
  id: "btnPlusOne",
  className: btnClassOneName,
  onClick: addOne
}, "+1"), /*#__PURE__*/React.createElement("button", {
  id: "btnMinusOne",
  className: btnClassMinusName,
  onClick: minusOne
}, "-1 "));
ReactDOM.render(template2, root);
