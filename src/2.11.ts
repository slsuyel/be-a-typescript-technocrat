{

    //utility type

    //pick 
    type Person = {
        name: String;
        age: number;
        email?: string;
        contactNo: string
    }

    type NameAge = Pick<Person, 'name' | 'age'>


    //omit
    type ContactInfo = Omit<Person, "name" | "age">


    //Required
    type PersonRequired = Required<Person>

    //Pertial
    type PersonPartial = Partial<Person>

    //ReadOnly

    type PersonReadOnly = Readonly<Person>

    const person1: Person = {
        name: 'Suyel',
        age: 20,
        contactNo: '072356565'
    }

    //record type
    // type Myobj = {
    //     a: string;
    //     b: string;
    // }

    type Myobj = Record<string, string>

    const obj1: Myobj = {
        a: 'a',
        b: 'b',
        c: 'c',
        d: 'd'
    }












}