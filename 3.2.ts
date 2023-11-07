{

    // oop - -inheritence

    class Parent {
        name: string;
        age: number;
        address: string
        constructor(name: string, age: number, address: string) {
            this.name = name;
            this.age = age;
            this.address = address
        }

        getSleep(numOfHour: number) {
            console.log(`${this.name} will sleep for ${numOfHour}`);
        }
    }





    class Student extends Parent {
        constructor(name: string, age: number, address: string) {
            super(name, age, address)
        }
    }
    const student1 = new Student('Suyel', 22, 'Dhaka')

    // student1.getSleep(2)


    class Teacher extends Parent {
        designation: string
        constructor(name: string, age: number, address: string, designation: string) {
            super(name, age, address)
            this.designation = designation
        }
       
        takeClass(numOfClass: number) {
            console.log(`${this.name} will take ${numOfClass}`);
        }

    }

    const teacher = new Teacher('Mr Teacher', 42, 'Dhaka', 'Proffesor')

    //    teacher.getSleep(11)
    //    teacher.takeClass(2)








}