"use strict";
// class 类(属性，方法)
var Person = /** @class */ (function () {
    function Person(name, gender, username) {
        this.username = username;
        this.age = 27;
        this.name = name;
        this.gender = gender;
        this.username = username;
    }
    Person.prototype.printAge = function (age) {
        this.age = age;
        console.log(this.age);
    };
    Person.prototype.setGender = function (gender) {
        this.gender = gender;
        console.log(this.gender);
    };
    return Person;
}());
var person = new Person('cjw', '男', 'cjiao');
console.log(person);
person.printAge(30);
person.setGender('女');
