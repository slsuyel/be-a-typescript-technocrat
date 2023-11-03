{

    /* ------------ */

    //type alisas

    type Student = {
        name: string;
        age: number;
        gender: string;
        contactNo?: string;
        address: string;
    }

    const student1: Student = {
        name: 'Alice',
        age: 16,
        gender: 'male',
        contactNo: '01754545454',
        address: 'Dhaka'
    };
    const student2: Student = {
        name: 'Mir hasan',
        age: 40,
        gender: 'male',
        address: 'Dhaka'
    };
    const student3: Student = {
        name: 'Rabbi',
        age: 32,
        gender: 'male',
        contactNo: '0178787878',
        address: 'Barishal'
    }



    type UserName = string

    const userName: UserName = 'Sakib'


    type Add = (x: number, y: number) => number
    const add: Add = (num1, num2) => num1 + num2













    /* ------------ */
}