export namespace Transport {

    export enum OwnerDocumentType {
        Passport = "Passport",
        DriverLicense = "Driver License",
        IDCard = "ID Card"
    }

    export enum BodyType {
        Sedan = "Sedan",
        Hatchback = "Hatchback",
        SUV = "SUV",
        Coupe = "Coupe"
    }

    export enum CarClass {
        Economy = "Economy",
        Business = "Business",
        Premium = "Premium"
    }

    // Интерфейс Владелец
    export interface Owner {
        lastName: string;
        firstName: string;
        middleName: string;
        dateOfBirth: Date;
        documentType: OwnerDocumentType;
        documentSeries: string;
        documentNumber: string;
    
        printInfo(): void;
    }

    // Класс Владелец
    export class OwnerImpl implements Owner {
        private _lastName: string;
        private _firstName: string;
        private _middleName: string;
        private _dateOfBirth: Date;
        private _documentType: OwnerDocumentType;
        private _documentSeries: string;
        private _documentNumber: string;
    
        constructor(
            lastName: string,
            firstName: string,
            middleName: string,
            dateOfBirth: Date,
            documentType: OwnerDocumentType,
            documentSeries: string,
            documentNumber: string
        ) {
            this._lastName = lastName;
            this._firstName = firstName;
            this._middleName = middleName;
            this._dateOfBirth = dateOfBirth;
            this._documentType = documentType;
            this._documentSeries = documentSeries;
            this._documentNumber = documentNumber;
        }
    
        get lastName(): string {
            return this._lastName;
        }
    
        set lastName(value: string) {
            this._lastName = value;
        }
    
        get firstName(): string {
            return this._firstName;
        }
    
        set firstName(value: string) {
            this._firstName = value;
        }
    
        get middleName(): string {
            return this._middleName;
        }
    
        set middleName(value: string) {
            this._middleName = value;
        }
    
        get dateOfBirth(): Date {
            return this._dateOfBirth;
        }
    
        set dateOfBirth(value: Date) {
            this._dateOfBirth = value;
        }
    
        get documentType(): OwnerDocumentType {
            return this._documentType;
        }
    
        set documentType(value: OwnerDocumentType) {
            this._documentType = value;
        }
    
        get documentSeries(): string {
            return this._documentSeries;
        }
    
        set documentSeries(value: string) {
            this._documentSeries = value;
        }
    
        get documentNumber(): string {
            return this._documentNumber;
        }
    
        set documentNumber(value: string) {
            this._documentNumber = value;
        }
    
        printInfo(): void {
            console.log(`Owner Info:
            Name: ${this.lastName} ${this.firstName} ${this.middleName}
            Date of Birth: ${this.dateOfBirth.toDateString()}
            Document: ${this.documentType} ${this.documentSeries} ${this.documentNumber}`);
        }
    }

    // Интерфейс Транспортное средство
    export interface Vehicle {
        brand: string;
        model: string;
        year: number;
        vinNumber: string;
        registrationNumber: string;
        owner: Owner;
    
        printVehicleInfo(): void;
    }

    // Класс Транспортное средство
    export class VehicleImpl implements Vehicle {
        private _brand: string;
        private _model: string;
        private _year: number;
        private _vinNumber: string;
        private _registrationNumber: string;
        private _owner: Owner;
    
        constructor(
            brand: string,
            model: string,
            year: number,
            vinNumber: string,
            registrationNumber: string,
            owner: Owner
        ) {
            this._brand = brand;
            this._model = model;
            this._year = year;
            this._vinNumber = vinNumber;
            this._registrationNumber = registrationNumber;
            this._owner = owner;
        }
    
        get brand(): string {
            return this._brand;
        }
    
        set brand(value: string) {
            this._brand = value;
        }
    
        get model(): string {
            return this._model;
        }
    
        set model(value: string) {
            this._model = value;
        }
    
        get year(): number {
            return this._year;
        }
    
        set year(value: number) {
            this._year = value;
        }
    
        get vinNumber(): string {
            return this._vinNumber;
        }
    
        set vinNumber(value: string) {
            this._vinNumber = value;
        }
    
        get registrationNumber(): string {
            return this._registrationNumber;
        }
    
        set registrationNumber(value: string) {
            this._registrationNumber = value;
        }
    
        get owner(): Owner {
            return this._owner;
        }
    
        set owner(value: Owner) {
            this._owner = value;
        }
    
        printVehicleInfo(): void {
            console.log(`Vehicle Info:
            Brand: ${this.brand}
            Model: ${this.model}
            Year: ${this.year}
            VIN: ${this.vinNumber}
            Registration: ${this.registrationNumber}`);
        }
    }

    // Интерфейс Автомобиль
    export interface Car extends Vehicle {
        bodyType: BodyType;
        carClass: CarClass;
    }

    // Класс Автомобиль
    export class CarImpl extends VehicleImpl implements Car {
        private _bodyType: BodyType;
        private _carClass: CarClass;
    
        constructor(
            brand: string,
            model: string,
            year: number,
            vinNumber: string,
            registrationNumber: string,
            owner: Owner,
            bodyType: BodyType,
            carClass: CarClass
        ) {
            super(brand, model, year, vinNumber, registrationNumber, owner);
            this._bodyType = bodyType;
            this._carClass = carClass;
        }
    
        get bodyType(): BodyType {
            return this._bodyType;
        }
    
        set bodyType(value: BodyType) {
            this._bodyType = value;
        }
    
        get carClass(): CarClass {
            return this._carClass;
        }
    
        set carClass(value: CarClass) {
            this._carClass = value;
        }
    
        printVehicleInfo(): void {
            console.log(`Car Info:
            Brand: ${this.brand}
            Model: ${this.model}
            Year: ${this.year}
            VIN: ${this.vinNumber}
            Registration: ${this.registrationNumber}
            Body Type: ${this.bodyType}
            Car Class: ${this.carClass}`);
        }
    }

    // Интерфейс Мотоцикл
    export interface Motorbike extends Vehicle {
        frameType: string;
        isForSport: boolean;
    }

    // Класс Мотоцикл
    export class MotorbikeImpl extends VehicleImpl implements Motorbike {
        private _frameType: string;
        private _isForSport: boolean;
    
        constructor(
            brand: string,
            model: string,
            year: number,
            vinNumber: string,
            registrationNumber: string,
            owner: Owner,
            frameType: string,
            isForSport: boolean
        ) {
            super(brand, model, year, vinNumber, registrationNumber, owner);
            this._frameType = frameType;
            this._isForSport = isForSport;
        }
    
        get frameType(): string {
            return this._frameType;
        }
    
        set frameType(value: string) {
            this._frameType = value;
        }
    
        get isForSport(): boolean {
            return this._isForSport;
        }
    
        set isForSport(value: boolean) {
            this._isForSport = value;
        }
    
        printVehicleInfo(): void {
            console.log(`Motorbike Info:
            Brand: ${this.brand}
            Model: ${this.model}
            Year: ${this.year}
            VIN: ${this.vinNumber}
            Registration: ${this.registrationNumber}
            Frame Type: ${this.frameType}
            Is for Sport: ${this.isForSport ? "Yes" : "No"}`);
        }
    }

    // Интерфейс Хранилище
    export interface VehicleStorage<T extends Vehicle> {
        creationDate: Date;
        vehicles: T[];
    
        getAllVehicles(): T[];
    }

    // Класс Хранилище
    export class VehicleStorageImpl<T extends Vehicle> implements VehicleStorage<T> {
        private _creationDate: Date;
        private _vehicles: T[];
    
        constructor() {
            this._creationDate = new Date();
            this._vehicles = [];
        }
    
        get creationDate(): Date {
            return this._creationDate;
        }
    
        get vehicles(): T[] {
            return this._vehicles;
        }
    
        addVehicle(vehicle: T): void {
            this._vehicles.push(vehicle);
        }
    
        getAllVehicles(): T[] {
            return this._vehicles;
        }
    }
}