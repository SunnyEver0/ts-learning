/**
 * Created by apple on 2019/5/7.
 */

class User {
    fullName: string;
    firstName: string;
    lastName: string;
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = this.firstName + this.lastName;
    }
}

interface Person {
    firstName: string
    lastName: string
}

function greeter(person: Person) {
    return 'Hello ' + person.firstName + ' ' + person.lastName;
}

// let user = {
//     firstName: 'Caroline',
//     lastName: 'Gao'
// };

let user = new User('Caroline', 'Gao');
console.log(greeter(user));