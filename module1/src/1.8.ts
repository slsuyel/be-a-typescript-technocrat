{
    // destructing

    const user = {
        id: 454,
        name: {
            fristName: "Sakib ",
            middleName: 'Al',
            lastName: 'hasan'
        },
        contact: '01745454545',
        address: 'dhaka'
    }


    const { id, name: middleName } = user

    //Array destructing

    const myFriends = ['tamim', 'sakib', 'nakib', 'rakib']

    const [, , bestFriend,...rest] = myFriends







}