"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
var Car = /** @class */ (function () {
    function Car(modelName, color, year) {
        this._modelName = modelName;
        this._color = color;
        this._year = year;
    }
    Object.defineProperty(Car.prototype, "modelName", {
        get: function () {
            return this._modelName;
        },
        set: function (value) {
            this._modelName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (value) {
            this._color = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "year", {
        get: function () {
            return this._year;
        },
        set: function (value) {
            this._year = value;
        },
        enumerable: false,
        configurable: true
    });
    Car.prototype.info = function () {
        return "Model: " + this.modelName + ", Year: " + this.year + ", Color: " + this.color;
    };
    return Car;
}());
exports.Car = Car;
