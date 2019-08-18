"use strict";
// object && type
/* 对象 */
var dataObj = {
    name: 'Henry',
    age: 31
};
// 复杂对象类型
var complex = {
    data: [1, 2, 3, 4, 5],
    myFunc: function (item) {
        return this.data;
    }
};
console.log(complex.myFunc(20));
var complex2 = {
    data: [1, 2, 3, 4, 5],
    myFunc: function (item) {
        return this.data;
    }
};
console.log(complex.myFunc(20));
