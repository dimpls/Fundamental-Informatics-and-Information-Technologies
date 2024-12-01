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
export var Transport;
(function (Transport) {
    var OwnerDocumentType;
    (function (OwnerDocumentType) {
        OwnerDocumentType["Passport"] = "Passport";
        OwnerDocumentType["DriverLicense"] = "Driver License";
        OwnerDocumentType["IDCard"] = "ID Card";
    })(OwnerDocumentType = Transport.OwnerDocumentType || (Transport.OwnerDocumentType = {}));
    var BodyType;
    (function (BodyType) {
        BodyType["Sedan"] = "Sedan";
        BodyType["Hatchback"] = "Hatchback";
        BodyType["SUV"] = "SUV";
        BodyType["Coupe"] = "Coupe";
    })(BodyType = Transport.BodyType || (Transport.BodyType = {}));
    var CarClass;
    (function (CarClass) {
        CarClass["Economy"] = "Economy";
        CarClass["Business"] = "Business";
        CarClass["Premium"] = "Premium";
    })(CarClass = Transport.CarClass || (Transport.CarClass = {}));
    // Класс Владелец
    var OwnerImpl = /** @class */ (function () {
        function OwnerImpl(lastName, firstName, middleName, dateOfBirth, documentType, documentSeries, documentNumber) {
            this._lastName = lastName;
            this._firstName = firstName;
            this._middleName = middleName;
            this._dateOfBirth = dateOfBirth;
            this._documentType = documentType;
            this._documentSeries = documentSeries;
            this._documentNumber = documentNumber;
        }
        Object.defineProperty(OwnerImpl.prototype, "lastName", {
            get: function () {
                return this._lastName;
            },
            set: function (value) {
                this._lastName = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(OwnerImpl.prototype, "firstName", {
            get: function () {
                return this._firstName;
            },
            set: function (value) {
                this._firstName = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(OwnerImpl.prototype, "middleName", {
            get: function () {
                return this._middleName;
            },
            set: function (value) {
                this._middleName = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(OwnerImpl.prototype, "dateOfBirth", {
            get: function () {
                return this._dateOfBirth;
            },
            set: function (value) {
                this._dateOfBirth = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(OwnerImpl.prototype, "documentType", {
            get: function () {
                return this._documentType;
            },
            set: function (value) {
                this._documentType = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(OwnerImpl.prototype, "documentSeries", {
            get: function () {
                return this._documentSeries;
            },
            set: function (value) {
                this._documentSeries = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(OwnerImpl.prototype, "documentNumber", {
            get: function () {
                return this._documentNumber;
            },
            set: function (value) {
                this._documentNumber = value;
            },
            enumerable: false,
            configurable: true
        });
        OwnerImpl.prototype.printInfo = function () {
            console.log("Owner Info:\n            Name: ".concat(this.lastName, " ").concat(this.firstName, " ").concat(this.middleName, "\n            Date of Birth: ").concat(this.dateOfBirth.toDateString(), "\n            Document: ").concat(this.documentType, " ").concat(this.documentSeries, " ").concat(this.documentNumber));
        };
        return OwnerImpl;
    }());
    Transport.OwnerImpl = OwnerImpl;
    // Класс Транспортное средство
    var VehicleImpl = /** @class */ (function () {
        function VehicleImpl(brand, model, year, vinNumber, registrationNumber, owner) {
            this._brand = brand;
            this._model = model;
            this._year = year;
            this._vinNumber = vinNumber;
            this._registrationNumber = registrationNumber;
            this._owner = owner;
        }
        Object.defineProperty(VehicleImpl.prototype, "brand", {
            get: function () {
                return this._brand;
            },
            set: function (value) {
                this._brand = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VehicleImpl.prototype, "model", {
            get: function () {
                return this._model;
            },
            set: function (value) {
                this._model = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VehicleImpl.prototype, "year", {
            get: function () {
                return this._year;
            },
            set: function (value) {
                this._year = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VehicleImpl.prototype, "vinNumber", {
            get: function () {
                return this._vinNumber;
            },
            set: function (value) {
                this._vinNumber = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VehicleImpl.prototype, "registrationNumber", {
            get: function () {
                return this._registrationNumber;
            },
            set: function (value) {
                this._registrationNumber = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VehicleImpl.prototype, "owner", {
            get: function () {
                return this._owner;
            },
            set: function (value) {
                this._owner = value;
            },
            enumerable: false,
            configurable: true
        });
        VehicleImpl.prototype.printVehicleInfo = function () {
            console.log("Vehicle Info:\n            Brand: ".concat(this.brand, "\n            Model: ").concat(this.model, "\n            Year: ").concat(this.year, "\n            VIN: ").concat(this.vinNumber, "\n            Registration: ").concat(this.registrationNumber));
        };
        return VehicleImpl;
    }());
    Transport.VehicleImpl = VehicleImpl;
    // Класс Автомобиль
    var CarImpl = /** @class */ (function (_super) {
        __extends(CarImpl, _super);
        function CarImpl(brand, model, year, vinNumber, registrationNumber, owner, bodyType, carClass) {
            var _this = _super.call(this, brand, model, year, vinNumber, registrationNumber, owner) || this;
            _this._bodyType = bodyType;
            _this._carClass = carClass;
            return _this;
        }
        Object.defineProperty(CarImpl.prototype, "bodyType", {
            get: function () {
                return this._bodyType;
            },
            set: function (value) {
                this._bodyType = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CarImpl.prototype, "carClass", {
            get: function () {
                return this._carClass;
            },
            set: function (value) {
                this._carClass = value;
            },
            enumerable: false,
            configurable: true
        });
        CarImpl.prototype.printVehicleInfo = function () {
            console.log("Car Info:\n            Brand: ".concat(this.brand, "\n            Model: ").concat(this.model, "\n            Year: ").concat(this.year, "\n            VIN: ").concat(this.vinNumber, "\n            Registration: ").concat(this.registrationNumber, "\n            Body Type: ").concat(this.bodyType, "\n            Car Class: ").concat(this.carClass));
        };
        return CarImpl;
    }(VehicleImpl));
    Transport.CarImpl = CarImpl;
    // Класс Мотоцикл
    var MotorbikeImpl = /** @class */ (function (_super) {
        __extends(MotorbikeImpl, _super);
        function MotorbikeImpl(brand, model, year, vinNumber, registrationNumber, owner, frameType, isForSport) {
            var _this = _super.call(this, brand, model, year, vinNumber, registrationNumber, owner) || this;
            _this._frameType = frameType;
            _this._isForSport = isForSport;
            return _this;
        }
        Object.defineProperty(MotorbikeImpl.prototype, "frameType", {
            get: function () {
                return this._frameType;
            },
            set: function (value) {
                this._frameType = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MotorbikeImpl.prototype, "isForSport", {
            get: function () {
                return this._isForSport;
            },
            set: function (value) {
                this._isForSport = value;
            },
            enumerable: false,
            configurable: true
        });
        MotorbikeImpl.prototype.printVehicleInfo = function () {
            console.log("Motorbike Info:\n            Brand: ".concat(this.brand, "\n            Model: ").concat(this.model, "\n            Year: ").concat(this.year, "\n            VIN: ").concat(this.vinNumber, "\n            Registration: ").concat(this.registrationNumber, "\n            Frame Type: ").concat(this.frameType, "\n            Is for Sport: ").concat(this.isForSport ? "Yes" : "No"));
        };
        return MotorbikeImpl;
    }(VehicleImpl));
    Transport.MotorbikeImpl = MotorbikeImpl;
    // Класс Хранилище
    var VehicleStorageImpl = /** @class */ (function () {
        function VehicleStorageImpl() {
            this._creationDate = new Date();
            this._vehicles = [];
        }
        Object.defineProperty(VehicleStorageImpl.prototype, "creationDate", {
            get: function () {
                return this._creationDate;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VehicleStorageImpl.prototype, "vehicles", {
            get: function () {
                return this._vehicles;
            },
            enumerable: false,
            configurable: true
        });
        VehicleStorageImpl.prototype.addVehicle = function (vehicle) {
            this._vehicles.push(vehicle);
        };
        VehicleStorageImpl.prototype.getAllVehicles = function () {
            return this._vehicles;
        };
        return VehicleStorageImpl;
    }());
    Transport.VehicleStorageImpl = VehicleStorageImpl;
})(Transport || (Transport = {}));
