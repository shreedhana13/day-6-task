//qns no 1
class Movie {
    [x: string]: string;
    constructor(title, studio, rating = "PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    static getPG(movieArray) {
        return movieArray.filter(movie => movie.rating === "PG");
    }
}

const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");

//qns no 2

class Circle {
    private radius: number = 1.0;
    private color: string = "red";

    constructor();
    constructor(radius: number);
    constructor(radius: number, color: string);

    constructor(radius: number = 1.0, color: string = "red") {
        this.radius = radius;
        this.color = color;
    }

    getRadius(): number {
        return this.radius;
    }

    setRadius(radius: number): void {
        this.radius = radius;
    }

    getColor(): string {
        return this.color;
    }

    setColor(color: string): void {
        this.color = color;
    }

    toString(): string {
        return `Circle [radius=${this.radius}, color=${this.color}]`;
    }

    getArea(): number {
        return Math.PI * this.radius * this.radius;
    }

    getCircumference(): number {
        return 2 * Math.PI * this.radius;
    }
}

export default Circle;

//qns no 3

class Person {
    firstName: string;
    lastName: string;
    age: number;
    email: string;

    constructor(firstName: string, lastName: string, age: number, email: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }
}

// Create an instance of the Person class
const shreedhana = new Person("Shreedhana", "Kathiravan", 25, "shreedhanakathiravan@gmail.com");

// Accessing the details
console.log(`First Name: ${shreedhana.firstName}`);
console.log(`Last Name: ${shreedhana.lastName}`);
console.log(`Age: ${shreedhana.age}`);
console.log(`Email: ${shreedhana.email}`);

//qns no 4
class UberPriceCalculator {
    baseFare: number;
    pricePerKilometer: number;

    constructor(baseFare: number, pricePerKilometer: number) {
        this.baseFare = baseFare;
        this.pricePerKilometer = pricePerKilometer;
    }

    calculatePrice(distanceInKilometers: number): number {
        if (distanceInKilometers < 0) {
            throw new Error("Distance cannot be negative.");
        }

        return this.baseFare + this.pricePerKilometer * distanceInKilometers;
    }
}



