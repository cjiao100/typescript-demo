"use strict";
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "hello " + this.greeting;
    };
    return Greeter;
}());
var greeter = new Greeter('world!');
var button = document.createElement('button');
button.textContent = 'Say Hello';
button.onclick = function () {
    alert(greeter.greet());
};
document.body.appendChild(button);
