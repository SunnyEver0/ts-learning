/**
 * Created by apple on 2019/5/7.
 */
var User = /** @class */ (function () {
    function User(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = this.firstName + this.lastName;
    }
    return User;
}());
function greeter(person) {
    return 'Hello ' + person.firstName + '' + person.lastName;
}
// let user = {
//     firstName: 'Caroline',
//     lastName: 'Gao'
// };
var user = new User('Caroline', 'Gao');
console.log(greeter(user));
