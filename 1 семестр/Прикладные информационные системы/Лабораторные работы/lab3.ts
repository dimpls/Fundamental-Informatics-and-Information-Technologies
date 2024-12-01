function isOdd(num: number): boolean {
    return num % 2 !== 0;
}

async function removeOddNumbers(arr: number[]): Promise<void> {
    for (let i = 0; i < arr.length; ) {
        if (isOdd(arr[i])) {
            console.log(`Удаление нечетного числа: ${arr[i]}`);
            arr.splice(i, 1); 
            await delay(1000); 
        } else {
            i++;
        }
    }
    console.log("Массив после удаления всех нечетных чисел:", arr);
}

function delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("Начальный массив:", array1);
removeOddNumbers(array1);

function createCounter() {
    let count = 0;

    return function() {
        count++;
        console.log(`Функция вызвана ${count} раз(а)`);
    };
}

const counter = createCounter();

counter();
counter();
counter();

function SealClass(target: Function) {
    Object.seal(target);
    Object.seal(target.prototype);
}

function toUpperCase(
    target: Object, 
    propertyKey: string, 
    descriptor: PropertyDescriptor
) {
    const originalMethod = descriptor.value;

    descriptor.value = function(...args: any[]) {
        const result = originalMethod.apply(this, args);
        if (typeof result === 'string') {
            return result.toUpperCase();
        }
        return result;
    };

    return descriptor;
}

@SealClass
class Car {
    public model: string;
    public year: number;

    constructor(model: string, year: number) {
        this.model = model;
        this.year = year;

        Object.seal(this);
    }

    @toUpperCase
    public getInfo(): string {
        return `Модель: ${this.model}, Год выпуска: ${this.year}`;
    }

    public drive(): void {
        console.log(`${this.model} едет.`);
    }
}

const myCar = new Car('Toyota', 2022);

try {
    (Car as any).fly = function() {
        console.log('Этот класс может летать!');
    };
    console.log('Статический метод fly добавлен к классу');
} catch (error) {
    console.error('Ошибка: не удалось добавить метод fly к классу:', error.message);
}

try {
    (Car as any).maxSpeed = 200;
    console.log('Статическое свойство maxSpeed добавлено к классу');
} catch (error) {
    console.error('Ошибка: не удалось добавить свойство maxSpeed к классу:', error.message);
}

try {
    (Car.prototype as any).fly = function() {
        console.log('Этот автомобиль может летать!');
    };
    console.log('Метод fly добавлен');
} catch (error) {
    console.error('Ошибка: не удалось добавить метод fly в прототип:', error.message);
}

try {
    (Car.prototype as any).maxSpeed = 200;
    console.log('Свойство maxSpeed добавлено в прототип');
} catch (error) {
    console.error('Ошибка: не удалось добавить свойство maxSpeed в прототип:', error.message);
}

myCar.drive(); 

console.log(myCar.getInfo());

try {
    (myCar as any).color = 'red'; 
    console.log('Свойство color успешно добавлено к экземпляру');
} catch (error) {
    console.error('Ошибка: не удалось добавить свойство color к экземпляру:', error.message);
}

try {
    (myCar as any).honk = function() {
        console.log(`${this.model} сигналит!`);
    };
    console.log('Метод honk успешно добавлен к экземпляру');
} catch (error) {
    console.error('Ошибка: не удалось добавить метод honk к экземпляру:', error.message);
}