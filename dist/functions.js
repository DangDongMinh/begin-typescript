"use strict";

function stringFunc() {
    return "Chuoi bat ky";
}
function numberFunc() {
    return 123456;
}
function stringArrFunc() {
    return ["Mot", "Hai", "Ba"];
}
function numberArrFunc() {
    return [1, 2, 3];
}
function anyFunc() {
    return {
        childObj: {
            grandChilObj: {}
        }
    };
}
function hello(name, age) {
    return "Xin chao " + name + " co phai ong " + age + " tuoi khong?";
}
console.log(hello("Minh", 50));
//cach khac
var helloOther = function helloOther(name, age) {
    return "Xin chao " + name + ", co phai ong " + age + " tuoi khong?";
};
console.log(helloOther("Danh", 23));
//Ham co gia tri mac dinh
function cong(x, y) {
    if (x === void 0) {
        x = 25;
    }
    if (y === void 0) {
        y = 75;
    }
    return x + y;
}
console.log(cong());
//Ham co doi so tuy chon
function tuyChon(x, y) {
    if (y) {
        return y;
    }
    return x;
}
console.log(tuyChon("Hello"));
console.log(tuyChon("Hello", 9999));