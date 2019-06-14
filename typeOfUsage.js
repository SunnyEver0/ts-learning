var Greeter = /** @class */ (function () {
    function Greeter(greeting) {
        this.greeting = greeting;
    }
    Greeter.prototype.greet = function () {
        if (this.greeting) {
            console.log(this.greeting + " yoyo");
        }
        else {
            console.log(Greeter.GreeterMessage);
        }
    };
    Greeter.GreeterMessage = 'hey this is message';
    return Greeter;
}());
var greeter = new Greeter();
greeter.greet();
var GreeterMaker = Greeter;
GreeterMaker.GreeterMessage = 'new message';
var greeter2 = new GreeterMaker();
greeter2.greet();
