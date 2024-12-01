"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lab2_1 = require("./lab2");
const owner1 = new lab2_1.Transport.OwnerImpl("Ivanov", "Ivan", "Ivanovich", new Date(1985, 5, 15), lab2_1.Transport.OwnerDocumentType.Passport, "AB", "123456");
const owner2 = new lab2_1.Transport.OwnerImpl("Petrov", "Petr", "Petrovich", new Date(1990, 7, 20), lab2_1.Transport.OwnerDocumentType.DriverLicense, "CD", "654321");
// Создаем два автомобиля
const car1 = new lab2_1.Transport.CarImpl("BMW", "X5", 2021, "1HGCM82633A765432", "B123CD77", owner1, lab2_1.Transport.BodyType.SUV, lab2_1.Transport.CarClass.Premium);
const car2 = new lab2_1.Transport.CarImpl("Audi", "A6", 2020, "WAUZZZ4G9CN123456", "A456EF77", owner2, lab2_1.Transport.BodyType.Sedan, lab2_1.Transport.CarClass.Business);
// Создаем два мотоцикла
const motorbike1 = new lab2_1.Transport.MotorbikeImpl("Yamaha", "YZF-R1", 2022, "JYARN23E0KA001234", "M123AB77", owner1, "Sport Frame", true);
const motorbike2 = new lab2_1.Transport.MotorbikeImpl("Honda", "CBR600RR", 2019, "JH2PC4007FM000001", "M789GH77", owner2, "Race Frame", true);
// Создаем хранилище для автомобилей
const carStorage = new lab2_1.Transport.VehicleStorageImpl();
carStorage.addVehicle(car1);
carStorage.addVehicle(car2);
console.log("Cars in storage:");
carStorage.getAllVehicles().forEach(c => c.printVehicleInfo());
// Создаем хранилище для мотоциклов
const motorbikeStorage = new lab2_1.Transport.VehicleStorageImpl();
motorbikeStorage.addVehicle(motorbike1);
motorbikeStorage.addVehicle(motorbike2);
console.log("Motorbikes in storage:");
motorbikeStorage.getAllVehicles().forEach(m => m.printVehicleInfo());
