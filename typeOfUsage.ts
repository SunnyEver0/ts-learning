class Greeter {
    static GreeterMessage = 'hey this is message';

    greeting: string;

    constructor(greeting?: string) {
        this.greeting = greeting;
    }

    greet(): void {
        if (this.greeting) {
            console.log(`${this.greeting} yoyo`);
        } else {
            console.log(Greeter.GreeterMessage);
        }
    }

}

let greeter: Greeter = new Greeter();
greeter.greet();

let GreeterMaker: typeof Greeter = Greeter;
GreeterMaker.GreeterMessage = 'new message';

let greeter2: Greeter = new GreeterMaker();
greeter2.greet();
