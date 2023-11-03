{
    //union type > |

    type FrontendDeveloper = 'fakibazDeveloper' | 'juniorDeveloper'
    type FullStackDeveloper = 'frontendDeveloper' | 'expartDeveloper'

    type Developer = FrontendDeveloper | FullStackDeveloper



    const newDeveloper: FrontendDeveloper = 'juniorDeveloper'

    type User = {
        name: string;
        email?: string;
        gender: 'maile' | 'female';
        bloodGroup: 'A+' | 'B+' | 'A-'
    }

    const user1: User = {
        name: 'sakib',
        gender: 'maile',
        bloodGroup: 'A+'

    }


    /* intersection type */

    // Define a type for a Person
    type Person = {
        name: string;
        age: number;
    };

    // Define a type for an Employee
    type Employee = {
        employeeID: number;
        department: string;
    };

    // Create an intersection type to represent a person who is an employee
    type EmployeeAsPerson = Person & Employee;

    // An example of a person who is an employee
    const personAsEmployee: EmployeeAsPerson = {
        name: 'Alice',
        age: 30,
        employeeID: 12345,
        department: 'Sales'
    };




}