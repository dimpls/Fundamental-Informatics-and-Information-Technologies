var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
function isOdd(num) {
    return num % 2 !== 0;
}
function removeOddNumbers(arr) {
    return __awaiter(this, void 0, void 0, function () {
        var i;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    i = 0;
                    _a.label = 1;
                case 1:
                    if (!(i < arr.length)) return [3 /*break*/, 5];
                    if (!isOdd(arr[i])) return [3 /*break*/, 3];
                    console.log("\u0423\u0434\u0430\u043B\u0435\u043D\u0438\u0435 \u043D\u0435\u0447\u0435\u0442\u043D\u043E\u0433\u043E \u0447\u0438\u0441\u043B\u0430: ".concat(arr[i]));
                    arr.splice(i, 1);
                    return [4 /*yield*/, delay(1000)];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    i++;
                    _a.label = 4;
                case 4: return [3 /*break*/, 1];
                case 5:
                    console.log("Массив после удаления всех нечетных чисел:", arr);
                    return [2 /*return*/];
            }
        });
    });
}
function delay(ms) {
    return new Promise(function (resolve) { return setTimeout(resolve, ms); });
}
var array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("Начальный массив:", array1);
removeOddNumbers(array1);
function createCounter() {
    var count = 0;
    return function () {
        count++;
        console.log("\u0424\u0443\u043D\u043A\u0446\u0438\u044F \u0432\u044B\u0437\u0432\u0430\u043D\u0430 ".concat(count, " \u0440\u0430\u0437(\u0430)"));
    };
}
var counter = createCounter();
counter();
counter();
counter();
function SealClass(target) {
    Object.seal(target);
    Object.seal(target.prototype);
}
function toUpperCase(target, propertyKey, descriptor) {
    var originalMethod = descriptor.value;
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var result = originalMethod.apply(this, args);
        if (typeof result === 'string') {
            return result.toUpperCase();
        }
        return result;
    };
    return descriptor;
}
var Car = /** @class */ (function () {
    function Car(model, year) {
        this.model = model;
        this.year = year;
        Object.seal(this);
    }
    Car.prototype.getInfo = function () {
        return "\u041C\u043E\u0434\u0435\u043B\u044C: ".concat(this.model, ", \u0413\u043E\u0434 \u0432\u044B\u043F\u0443\u0441\u043A\u0430: ").concat(this.year);
    };
    Car.prototype.drive = function () {
        console.log("".concat(this.model, " \u0435\u0434\u0435\u0442."));
    };
    __decorate([
        toUpperCase
    ], Car.prototype, "getInfo", null);
    Car = __decorate([
        SealClass
    ], Car);
    return Car;
}());
var myCar = new Car('Toyota', 2022);
try {
    Car.fly = function () {
        console.log('Этот класс может летать!');
    };
    console.log('Статический метод fly добавлен к классу');
}
catch (error) {
    console.error('Ошибка: не удалось добавить метод fly к классу:', error.message);
}
try {
    Car.maxSpeed = 200;
    console.log('Статическое свойство maxSpeed добавлено к классу');
}
catch (error) {
    console.error('Ошибка: не удалось добавить свойство maxSpeed к классу:', error.message);
}
try {
    Car.prototype.fly = function () {
        console.log('Этот автомобиль может летать!');
    };
    console.log('Метод fly добавлен');
}
catch (error) {
    console.error('Ошибка: не удалось добавить метод fly в прототип:', error.message);
}
try {
    Car.prototype.maxSpeed = 200;
    console.log('Свойство maxSpeed добавлено в прототип');
}
catch (error) {
    console.error('Ошибка: не удалось добавить свойство maxSpeed в прототип:', error.message);
}
myCar.drive();
console.log(myCar.getInfo());
try {
    myCar.color = 'red';
    console.log('Свойство color успешно добавлено к экземпляру');
}
catch (error) {
    console.error('Ошибка: не удалось добавить свойство color к экземпляру:', error.message);
}
try {
    myCar.honk = function () {
        console.log("".concat(this.model, " \u0441\u0438\u0433\u043D\u0430\u043B\u0438\u0442!"));
    };
    console.log('Метод honk успешно добавлен к экземпляру');
}
catch (error) {
    console.error('Ошибка: не удалось добавить метод honk к экземпляру:', error.message);
}
