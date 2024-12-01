declare function isOdd(num: number): boolean;
declare function removeOddNumbers(arr: number[]): Promise<void>;
declare function delay(ms: number): Promise<void>;
declare const array1: number[];
declare function createCounter(): () => void;
declare const counter: () => void;
declare function SealClass(target: Function): void;
declare function toUpperCase(target: Object, propertyKey: string, descriptor: PropertyDescriptor): PropertyDescriptor;
declare class Car {
    model: string;
    year: number;
    constructor(model: string, year: number);
    getInfo(): string;
    drive(): void;
}
declare const myCar: Car;
