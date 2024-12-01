export declare namespace Transport {
    enum OwnerDocumentType {
        Passport = "Passport",
        DriverLicense = "Driver License",
        IDCard = "ID Card"
    }
    enum BodyType {
        Sedan = "Sedan",
        Hatchback = "Hatchback",
        SUV = "SUV",
        Coupe = "Coupe"
    }
    enum CarClass {
        Economy = "Economy",
        Business = "Business",
        Premium = "Premium"
    }
    interface Owner {
        lastName: string;
        firstName: string;
        middleName: string;
        dateOfBirth: Date;
        documentType: OwnerDocumentType;
        documentSeries: string;
        documentNumber: string;
        printInfo(): void;
    }
    class OwnerImpl implements Owner {
        private _lastName;
        private _firstName;
        private _middleName;
        private _dateOfBirth;
        private _documentType;
        private _documentSeries;
        private _documentNumber;
        constructor(lastName: string, firstName: string, middleName: string, dateOfBirth: Date, documentType: OwnerDocumentType, documentSeries: string, documentNumber: string);
        get lastName(): string;
        set lastName(value: string);
        get firstName(): string;
        set firstName(value: string);
        get middleName(): string;
        set middleName(value: string);
        get dateOfBirth(): Date;
        set dateOfBirth(value: Date);
        get documentType(): OwnerDocumentType;
        set documentType(value: OwnerDocumentType);
        get documentSeries(): string;
        set documentSeries(value: string);
        get documentNumber(): string;
        set documentNumber(value: string);
        printInfo(): void;
    }
    interface Vehicle {
        brand: string;
        model: string;
        year: number;
        vinNumber: string;
        registrationNumber: string;
        owner: Owner;
        printVehicleInfo(): void;
    }
    class VehicleImpl implements Vehicle {
        private _brand;
        private _model;
        private _year;
        private _vinNumber;
        private _registrationNumber;
        private _owner;
        constructor(brand: string, model: string, year: number, vinNumber: string, registrationNumber: string, owner: Owner);
        get brand(): string;
        set brand(value: string);
        get model(): string;
        set model(value: string);
        get year(): number;
        set year(value: number);
        get vinNumber(): string;
        set vinNumber(value: string);
        get registrationNumber(): string;
        set registrationNumber(value: string);
        get owner(): Owner;
        set owner(value: Owner);
        printVehicleInfo(): void;
    }
    interface Car extends Vehicle {
        bodyType: BodyType;
        carClass: CarClass;
    }
    class CarImpl extends VehicleImpl implements Car {
        private _bodyType;
        private _carClass;
        constructor(brand: string, model: string, year: number, vinNumber: string, registrationNumber: string, owner: Owner, bodyType: BodyType, carClass: CarClass);
        get bodyType(): BodyType;
        set bodyType(value: BodyType);
        get carClass(): CarClass;
        set carClass(value: CarClass);
        printVehicleInfo(): void;
    }
    interface Motorbike extends Vehicle {
        frameType: string;
        isForSport: boolean;
    }
    class MotorbikeImpl extends VehicleImpl implements Motorbike {
        private _frameType;
        private _isForSport;
        constructor(brand: string, model: string, year: number, vinNumber: string, registrationNumber: string, owner: Owner, frameType: string, isForSport: boolean);
        get frameType(): string;
        set frameType(value: string);
        get isForSport(): boolean;
        set isForSport(value: boolean);
        printVehicleInfo(): void;
    }
    interface VehicleStorage<T extends Vehicle> {
        creationDate: Date;
        vehicles: T[];
        getAllVehicles(): T[];
    }
    class VehicleStorageImpl<T extends Vehicle> implements VehicleStorage<T> {
        private _creationDate;
        private _vehicles;
        constructor();
        get creationDate(): Date;
        get vehicles(): T[];
        addVehicle(vehicle: T): void;
        getAllVehicles(): T[];
    }
}
