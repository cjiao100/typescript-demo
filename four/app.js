"use strict";
// 函数
// 返回值类型
function returnValue() {
    return 'hello';
}
console.log(returnValue());
// void
function sayHello() {
    console.log('hello !@');
}
sayHello();
// 参数返回值
function sumValue(value1, value2) {
    return value1 + +value2;
}
console.log(sumValue(1, '6'));
// 函数类型
var myFunc;
// myFunc = sayHello;
// myFunc();
myFunc = sumValue;
console.log(myFunc(1, '6'));
