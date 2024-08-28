"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
// const header = function (){
//     return <h1>hello React</h1>
// }
// const template = <header />
// ReactDOM.render(template,document.getElementById('root'))
var TodoApp = /*#__PURE__*/function (_React$Component) {
  // ana component bu diger header todolist ve action componentleri bunun icine eklenir
  function TodoApp(props) {
    var _this;
    _classCallCheck(this, TodoApp);
    _this = _callSuper(this, TodoApp, [props]);
    _this.clearItems = _this.clearItems.bind(_this);
    _this.addItems = _this.addItems.bind(_this);
    _this.deleteItem = _this.deleteItem.bind(_this);
    _this.state = {
      items: ["item1", "item2", "item3"]
    };
    return _this;
  }
  _inherits(TodoApp, _React$Component);
  return _createClass(TodoApp, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log("KOMPONENT OLUSTURULDU");
      var json = localStorage.getItem("items");
      var items = JSON.parse(json);
      if (items) {
        this.setState({
          items: items
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevState.items.length != this.state.items.length) {
        var json = JSON.stringify(this.state.items); //Json Stringe ceviri localStroge icin
        localStorage.setItem("items", json);
      }
      alert("KOMPONENT GÜNCELLENDİ");
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      alert("KOMPONENT SILINDI");
    }
  }, {
    key: "deleteItem",
    value: function deleteItem(item) {
      console.log(item);
      this.setState(function (prevState) {
        var arr = prevState.items.filter(function (i) {
          return item != i;
        }); // silmek istemedigimiz elemanlari geriye dondurmus olduk
        return {
          items: arr
        };
      });
    }
  }, {
    key: "clearItems",
    value: function clearItems() {
      // console.log("asdsadsads")
      this.setState({
        items: []
      });
    }
  }, {
    key: "addItems",
    value: function addItems(item) {
      if (!item) {
        return "eklemek istediginiz elemani girin";
      } else if (this.state.items.indexOf(item) > -1)
        // 0 ise ayni eleman var demektir
        {
          return "ayni elemani ekleyemezsiniz";
        }
      this.setState(function (prevState) {
        return {
          items: prevState.items.concat(item)
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var app = {
        title: "To Do APP",
        description: "lorem ipsum dolor"
      };
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Header, {
        title: app.title,
        description: app.description
      }), /*#__PURE__*/React.createElement(TodoList, {
        items: this.state.items,
        deleteItem: this.deleteItem,
        clearItems: this.clearItems
      }), /*#__PURE__*/React.createElement(Action, {
        addItems: this.addItems
      }));
    }
  }]);
}(React.Component);
;

// function Header (props){ // aslinda class yerine ayni mantik olarak gecer ES5
//     return (
//         <div>
//               <h1>{props.title}</h1>
//               <div>{props.description}</div> 
//         </div>
//      );
// }

//react hook
var Header = function Header(props) {
  //ES6 function components
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, props.title), /*#__PURE__*/React.createElement("div", null, props.description));
};
var TodoList = function TodoList(props) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("ul", null, props.items.map(function (item, index) {
    return /*#__PURE__*/React.createElement(TodoItem, {
      deleteItem: props.deleteItem,
      key: index,
      item: item
    });
  })), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("button", {
    onClick: props.clearItems
  }, "Clear Items")));
};
var TodoItem = function TodoItem(props) {
  return /*#__PURE__*/React.createElement("li", null, props.item, "  ", /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return props.deleteItem(props.item);
    }
  }, " X "));
};
var Action = /*#__PURE__*/function (_React$Component2) {
  function Action(props) {
    var _this2;
    _classCallCheck(this, Action);
    _this2 = _callSuper(this, Action, [props]);
    _this2.onFormSubmit = _this2.onFormSubmit.bind(_this2);
    _this2.state = {
      error: ""
    };
    return _this2;
  }
  _inherits(Action, _React$Component2);
  return _createClass(Action, [{
    key: "onFormSubmit",
    value: function onFormSubmit(e) {
      e.preventDefault();
      var item = e.target.elements.txtItem.value.trim();
      var error = this.props.addItems(item);
      console.log(error);
      this.setState({
        error: error
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, this.state.error && /*#__PURE__*/React.createElement("p", null, this.state.error), /*#__PURE__*/React.createElement("form", {
        onSubmit: this.onFormSubmit
      }, /*#__PURE__*/React.createElement("input", {
        type: "text",
        name: "txtItem"
      }), /*#__PURE__*/React.createElement("button", {
        type: "submit"
      }, "Add Item")));
    }
  }]);
}(React.Component);
;
var root = ReactDOM.createRoot(document.getElementById('root'));
root.render( /*#__PURE__*/React.createElement(TodoApp, null));
