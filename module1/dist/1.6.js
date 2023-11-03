"use strict";
/* function.ts */
function add(num1, num2) {
    return num1 + num2;
}
const res = add(2, 2);
const addArrow = (num1, num2) => num1 + num2;
//object>function>methood
const poorUser = {
    name: 'Suyel',
    balance: 0,
    addBalance(balance) {
        return `My balance is ${this.balance + balance}`;
    }
};
const arr = [5, 4, 5, 4, 5];
const newArr = arr.map((ele) => ele * ele);
