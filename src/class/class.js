var Person = (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.run = function () {
        console.log("Toi dang chay");
    };
    Person.prototype.walk = function () {
        console.log("Toi dang di bo");
    };
    Person.prototype.say = function () {
        return "xin chao " + this.name + " co phai ong " + this.age + " tuoi khong ? ";
    };
    return Person;
}());
var person = new Person("Minh", 23);
person.run();
person.walk();
console.log(person.say());
