//type-safe
// console.log("Typescript dosyasından merhaba");
function sayHello(name) {
    console.log("Hello ".concat(name));
}
// sayHello("Seren");
var sumFunction = function (a1, a2) {
    return a1 + a2;
};
var sumOfNumbers = sumFunction(5, 6);
// console.log(sumOfNumbers);
var Greeter = /** @class */ (function () {
    function Greeter(name) {
        this.name = name;
    }
    Greeter.prototype.sayHi = function () {
        console.log("Hello ".concat(this.name));
        this.sayWhatsUp();
    };
    Greeter.prototype.sayWhatsUp = function () {
        console.log("What's up?");
    };
    return Greeter;
}());
var greeter = new Greeter("Halit");
// greeter.sayHi();
// userService class'ı oluşturalım
// string[] dönüş tipi olarak getUserNames fonksiyonu oluşturalım
// string name alan bir ekleme methodu
// classin içinde bir alanda array ile tutalım. Ancak bu arraya dışardan erişim yasak!!
var UserService = /** @class */ (function () {
    function UserService() {
        this.users = [];
    }
    UserService.prototype.add = function (user) {
        this.users.push(user);
    };
    UserService.prototype.getUserNames = function () {
        return this.users;
    };
    ;
    return UserService;
}());
var userService = new UserService();
userService.add({ name: 'Erdem', surname: 'Ceylan', age: 27 });
console.log(userService.getUserNames());
export {};
