"use strict";

function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _superPropGet(t, e, r, o) { var p = _get(_getPrototypeOf(1 & o ? t.prototype : t), e, r); return 2 & o ? function (t) { return p.apply(r, t); } : p; }
function _get() { return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) { var p = _superPropBase(e, t); if (p) { var n = Object.getOwnPropertyDescriptor(p, t); return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value; } }, _get.apply(null, arguments); }
function _superPropBase(t, o) { for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t));); return t; }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
//es6 class constructor
var personES6 = /*#__PURE__*/function () {
  function personES6() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Guest";
    var year = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2024;
    var email = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "asdsadasddad@gmail.com";
    _classCallCheck(this, personES6);
    this.name = name;
    this.year = year;
    this.email = email;
  }
  return _createClass(personES6, [{
    key: "calculateAge",
    value: function calculateAge() {
      return new Date().getFullYear() - this.year;
    }
  }, {
    key: "greeting",
    value: function greeting(text) {
      return "".concat(text, ", My name is ").concat(this.name);
    }
  }]);
}();
var Student = /*#__PURE__*/function (_personES) {
  // inheritance 
  function Student(name, year, email, studentNumber) {
    var _this;
    _classCallCheck(this, Student);
    _this = _callSuper(this, Student, [name, year, email]);
    _this.studentNumber = studentNumber;

    // name ve year seyde var ana  class da oldugu icin super diyerek ortan cekebiliriz. Ama studentNumber olmadigi icin this kullanmak zorundasin
    return _this;
  }
  _inherits(Student, _personES);
  return _createClass(Student, [{
    key: "study",
    value: function study() {
      console.log("I AM LEARNING");
    }
  }, {
    key: "greeting",
    value: function greeting(text) {
      var str = _superPropGet(Student, "greeting", this, 3)([text]);
      str += " My number is ".concat(this.studentNumber);
      return str;
    }
  }]);
}(personES6);
var Teacher = /*#__PURE__*/function (_personES2) {
  function Teacher(name, year, email, departmants) {
    var _this2;
    _classCallCheck(this, Teacher);
    _this2 = _callSuper(this, Teacher, [name, year, email]);
    _this2.departmants = departmants;
    return _this2;
  }
  _inherits(Teacher, _personES2);
  return _createClass(Teacher, [{
    key: "teach",
    value: function teach() {
      console.log("I AM teaching");
    }
    // greeting(text){
    //     return `${text}, My name is ${this.name}. My departmants is ${this.departmants}`;
    // }
  }, {
    key: "greeting",
    value: function greeting(text) {
      var str = _superPropGet(Teacher, "greeting", this, 3)([text]);
      str += " My departman is ".concat(this.departmants);
      return str;
    }
  }]);
}(personES6); //nesne -object 
var p = new Student("Yunus", 2019, "kocay1857@gmail.com", 1226);
var p2 = new Teacher("yasar", 2023, "yasar@gmail.com", "math");
console.log(p.calculateAge());
console.log(p2.calculateAge());
console.log(p);
console.log(p2);
console.log(p.study());
console.log(p2.teach());
console.log(p.greeting("hello"));
console.log(p2.greeting("hello"));
