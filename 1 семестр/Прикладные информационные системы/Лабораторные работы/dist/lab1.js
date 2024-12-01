var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Задание 1
function getMinValue(arr) {
    if (arr.length === 0) {
        throw new Error("Массив пустой");
    }
    var minValue = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < minValue) {
            minValue = arr[i];
        }
    }
    return minValue;
}
var array = [3.5, -1.2, 7.4, 0.5, 2.9];
var minValue = getMinValue(array);
console.log("The minimum value in the array:", minValue);
//Задание 2
function countZeroValues(matrix) {
    var zeroCount = 0;
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0) {
                zeroCount++;
            }
        }
    }
    return zeroCount;
}
var matrix = [
    [1, 0, 3],
    [0, 5, 6],
    [7, 0, 0]
];
var zeroValuesCount = countZeroValues(matrix);
console.log("The number of zero values in the matrix:", zeroValuesCount);
function concatenateStrings(tuple) {
    return tuple.join('');
}
var myTuple = ["Hello", "World", "TypeScript"];
var concatenatedResult = concatenateStrings(myTuple);
console.log("Concatenated result:", concatenatedResult);
//Задание 4
var PrinterType;
(function (PrinterType) {
    PrinterType["Inkjet"] = "Inkjet";
    PrinterType["Laser"] = "Laser";
    PrinterType["DotMatrix"] = "Dot Matrix";
    PrinterType["Thermal"] = "Thermal";
})(PrinterType || (PrinterType = {}));
function printPrinterType(printer) {
    console.log("Printer type selected:", printer);
}
var myPrinter_temp = PrinterType.Laser;
printPrinterType(myPrinter_temp);
//Задание 5
var Pet = /** @class */ (function () {
    function Pet() {
        this.name = 'Some pet';
        this.age = -1;
    }
    Pet.prototype.speak = function () {
        return "No speak. I am fish!";
    };
    return Pet;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = "AngryHunter";
        _this.age = 8;
        return _this;
    }
    Dog.prototype.speak = function () {
        return "Yaw-Gaw!";
    };
    return Dog;
}(Pet));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "Barsik";
        _this.age = 2;
        return _this;
    }
    Cat.prototype.speak = function () {
        return "Miyau!";
    };
    return Cat;
}(Pet));
function printPetInfo(pet) {
    console.log("Name: ".concat(pet.name));
    console.log("Age: ".concat(pet.age));
    console.log("Speak: ".concat(pet.speak()));
    if (pet instanceof Dog) {
        console.log("Label: ".concat(pet.label));
    }
}
var myDog = new Dog();
var myCat = new Cat();
printPetInfo(myDog);
printPetInfo(myCat);
var myPrinter = {
    type: PrinterType.Laser,
    model: "LaserJet Pro M404",
    manufacturer: "HP",
    printSpeedPPM: 40,
    isColor: false
};
console.log(JSON.stringify(myPrinter, null, 2));
