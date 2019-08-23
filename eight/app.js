"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
// 子类
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, gender, username) {
        return _super.call(this, name, gender, username) || this;
    }
    return Student;
}(Person));
var stu = new Student('cj', '男', 'cjw');
console.log(stu);
