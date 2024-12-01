declare function getMinValue(arr: number[]): number;
declare const array: number[];
declare const minValue: number;
declare function countZeroValues(matrix: number[][]): number;
declare const matrix: number[][];
declare const zeroValuesCount: number;
type StringTuple = [string, string, string];
declare function concatenateStrings(tuple: StringTuple): string;
declare const myTuple: StringTuple;
declare const concatenatedResult: string;
declare enum PrinterType {
    Inkjet = "Inkjet",
    Laser = "Laser",
    DotMatrix = "Dot Matrix",
    Thermal = "Thermal"
}
declare function printPrinterType(printer: PrinterType): void;
declare const myPrinter_temp: PrinterType;
declare class Pet {
    name: string;
    age: number;
    speak(): string;
}
declare class Dog extends Pet {
    label: string;
    age: number;
    speak(): string;
}
declare class Cat extends Pet {
    name: string;
    age: number;
    speak(): string;
}
declare function printPetInfo<T extends Pet>(pet: T): void;
declare const myDog: Dog;
declare const myCat: Cat;
interface Printer {
    type: PrinterType;
    model: string;
    manufacturer: string;
    printSpeedPPM: number;
    isColor: boolean;
}
declare const myPrinter: Printer;
