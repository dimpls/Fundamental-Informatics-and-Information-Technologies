import { Transport } from './lab2.js';
// ========== Задание 1: Реализация классов и интерфейсов для владельца и транспортного средства ==========
var owner1 = new Transport.OwnerImpl("Ivanov", "Ivan", "Ivanovich", new Date(1985, 5, 15), Transport.OwnerDocumentType.Passport, "AB", "123456");
var owner2 = new Transport.OwnerImpl("Petrov", "Petr", "Petrovich", new Date(1990, 7, 20), Transport.OwnerDocumentType.DriverLicense, "CD", "654321");
console.log("Owner 1 Info:");
owner1.printInfo();
console.log("\nOwner 2 Info:");
owner2.printInfo();
var vehicle1 = new Transport.VehicleImpl("Toyota", "Camry", 2019, "JH4KA8270MC123456", "A123BC77", owner1);
var vehicle2 = new Transport.VehicleImpl("Honda", "Civic", 2018, "1HGCM82633A123456", "B456DE77", owner2);
console.log("\nVehicle 1 Info:");
vehicle1.printVehicleInfo();
console.log("\nVehicle 2 Info:");
vehicle2.printVehicleInfo();
// ========== Задание 2: Реализация наследования для автомобилей и мотоциклов ==========
var car1 = new Transport.CarImpl("BMW", "X5", 2021, "1HGCM82633A765432", "B123CD77", owner1, Transport.BodyType.SUV, Transport.CarClass.Premium);
var car2 = new Transport.CarImpl("Audi", "A6", 2020, "WAUZZZ4G9CN123456", "A456EF77", owner2, Transport.BodyType.Sedan, Transport.CarClass.Business);
console.log("\nCar 1 Info:");
car1.printVehicleInfo();
console.log("\nCar 2 Info:");
car2.printVehicleInfo();
var motorbike1 = new Transport.MotorbikeImpl("Yamaha", "YZF-R1", 2022, "JYARN23E0KA001234", "M123AB77", owner1, "Sport Frame", true);
var motorbike2 = new Transport.MotorbikeImpl("Honda", "CBR600RR", 2019, "JH2PC4007FM000001", "M789GH77", owner2, "Race Frame", true);
console.log("\nMotorbike 1 Info:");
motorbike1.printVehicleInfo();
console.log("\nMotorbike 2 Info:");
motorbike2.printVehicleInfo();
// Создаем хранилище для автомобилей
var carStorage = new Transport.VehicleStorageImpl();
carStorage.addVehicle(car1);
carStorage.addVehicle(car2);
// Создаем хранилище для мотоциклов
var motorbikeStorage = new Transport.VehicleStorageImpl();
motorbikeStorage.addVehicle(motorbike1);
motorbikeStorage.addVehicle(motorbike2);
// Выводим информацию об автомобилях
console.log("Cars in storage:");
carStorage.getAllVehicles().forEach(function (car) { return car.printVehicleInfo(); });
// Выводим информацию о мотоциклах
console.log("\nMotorbikes in storage:");
motorbikeStorage.getAllVehicles().forEach(function (motorbike) { return motorbike.printVehicleInfo(); });
