"use strict";
var sumValue1 = {
    money: 200,
    count1: function (value) {
        this.money += value;
    }
};
var handleCount = {
    name: 'Henry',
    sumValue: sumValue1,
    friends: ['bucko', 'elysee']
};
handleCount.sumValue.count1(500);
console.log(handleCount);
