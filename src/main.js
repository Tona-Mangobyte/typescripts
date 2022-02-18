"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = require("./model");
var Main = /** @class */ (function () {
    function Main() {
    }
    Main.run = function () {
        console.log('Hello world!');
        var lexus = new model_1.Car('Lexus', 'Black', 2021);
        console.log(lexus.info());
    };
    return Main;
}());
Main.run();
