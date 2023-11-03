/* function.ts */
function add(num1: number, num2: number): number {
    return num1 + num2
}
const res = add(2, 2)


const addArrow = (num1: number, num2: number): number => num1 + num2

//object>function>methood

const poorUser = {
    name: 'Suyel',
    balance: 0,
    addBalance(balance: number): string {
        return `My balance is ${this.balance + balance}`
    }
}