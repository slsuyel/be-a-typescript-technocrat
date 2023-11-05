{
    //generic type

    type GenericArray<T> = Array<T>



    //   const rollNumber : number[] = [1,2,1,5,4]
    // const rollNumber: Array<number> = [1, 2, 1, 5, 4]
    const rollNumber: GenericArray<number> = [1, 2, 1, 5, 4]



    // const mentors: string[] = ['sd haq', "asda ", 'asdasd']
    // const mentors: Array<string> = ['sd haq', "asda ", 'asdasd']
    const mentors: GenericArray<string> = ['sd haq', "asda ", 'asdasd']




    // const boolArray: boolean[] = [true, false, true]
    // const boolArray: Array<boolean> = [true, false, true]
    const boolArray: GenericArray<boolean> = [true, false, true]



    const user: GenericArray<{ name: string; age: number; }> = [

        {
            name: 'Sakib',
            age: 44
        },
        {
            name: 'Sazzad',
            age: 54
        },
        // {
        //     name: 'Sakib Hsan',
        //     age: '45'    // wrong methood
        // },

    ]


    // generic tuple

    type GenericTuple<X, Y> = [X, Y]

    // const manus: [string, string] = ['Mr X', 'Mr y']
    const manus: GenericTuple<string, string> = ['Mr X', 'Mr y']

    const userWithId: GenericTuple<number, { name: string, email: string }> = [121, { name: 'name', email: 'a@a.com' }]





}