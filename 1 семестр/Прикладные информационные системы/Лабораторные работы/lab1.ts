//Задание 1
function getMinValue(arr: number[]): number {
    if (arr.length === 0) {
        throw new Error("Массив пустой");
    }

    let minValue = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < minValue) {
            minValue = arr[i]; 
        }
    }

    return minValue;
}

const array: number[] = [3.5, -1.2, 7.4, 0.5, 2.9];
const minValue = getMinValue(array);

console.log("The minimum value in the array:", minValue);

//Задание 2
function countZeroValues(matrix: number[][]): number {
    let zeroCount = 0;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0) {
                zeroCount++; 
            }
        }
    }

    return zeroCount;
}

const matrix: number[][] = [
    [1, 0, 3],
    [0, 5, 6],
    [7, 0, 0]
];

const zeroValuesCount = countZeroValues(matrix);

console.log("The number of zero values in the matrix:", zeroValuesCount);

//Задание 3
type StringTuple = [string, string, string];

function concatenateStrings(tuple: StringTuple): string {
    return tuple.join('');
}

const myTuple: StringTuple = ["Hello", "World", "TypeScript"];
const concatenatedResult = concatenateStrings(myTuple);

console.log("Concatenated result:", concatenatedResult);

//Задание 4
enum PrinterType {
    Inkjet = "Inkjet",   
    Laser = "Laser",     
    DotMatrix = "Dot Matrix",
    Thermal = "Thermal"  
}

function printPrinterType(printer: PrinterType): void {
    console.log("Printer type selected:", printer);
}

const myPrinter_temp: PrinterType = PrinterType.Laser;
printPrinterType(myPrinter_temp);

//Задание 5
class Pet {
    name: string = 'Some pet';
    age: number = -1;

    speak() {
        return "No speak. I am fish!";
    }
}

class Dog extends Pet {
    label: string = "AngryHunter";
    age: number = 8;

    speak() {
        return "Yaw-Gaw!";
    }
}

class Cat extends Pet {
    name: string = "Barsik";
    age: number = 2;

    speak() {
        return "Miyau!";
    }
}

function printPetInfo<T extends Pet>(pet: T): void {
    console.log(`Name: ${pet.name}`);
    console.log(`Age: ${pet.age}`);
    console.log(`Speak: ${pet.speak()}`);

    if (pet instanceof Dog) {
        console.log(`Label: ${pet.label}`);
    }
}

const myDog = new Dog();
const myCat = new Cat();

printPetInfo(myDog); 
printPetInfo(myCat); 

//Задание 6
interface Printer {
    type: PrinterType; 
    model: string;    
    manufacturer: string; 
    printSpeedPPM: number; 
    isColor: boolean;  
}

const myPrinter: Printer = {
    type: PrinterType.Laser,   
    model: "LaserJet Pro M404", 
    manufacturer: "HP",
    printSpeedPPM: 40,          
    isColor: false              
};

console.log(JSON.stringify(myPrinter, null, 2));