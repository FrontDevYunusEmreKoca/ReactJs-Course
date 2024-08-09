"use strict";

var user = {
  name: "YunusEmre",
  email: "kocay1857@gmail.com",
  city: "Kocaeli",
  roles: ["admin", "customer"],
  getRoles: function getRoles() {
    var _this = this;
    this.roles.forEach(function (role) {
      console.log(role);
      console.log(_this.name);
    });
  }
};
user.getRoles();
var addes5 = function addes5() {
  console.log(arguments); // kac adeet parametre gonderecegimi bilmiyorsam arguments olarak yazarim
  var total = 0;
  for (var i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
};
console.log(addes5(5, 10, 15, 20, 25));
