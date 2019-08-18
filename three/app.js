"use strict";
// 数组、元组、枚举
/* 数组 */
var names = ['henry', 'bucky'];
var numbers = [1, 2, 3];
var anyArray = ['hi', 1, false];
/* 元组 */
var colors = ['hello', 99];
/* 枚举 */
var Color;
(function (Color) {
    Color[Color["Black"] = 0] = "Black";
    Color[Color["Yellow"] = 1] = "Yellow";
    Color[Color["Red"] = 2] = "Red";
})(Color || (Color = {}));
var myColor = Color.Black;
console.log(myColor);
