{
    /* -------------- */

    //ternary operator || optional chaning || nullish coalescing operator

    const age: number = 18

    if (age >= 18) {
        console.log('Adult');
    }
    else {
        console.log('Not adult');
    }


    const isAdult = age >= 18 ? 'adult' : 'Not adult'
    // console.log({ isAdult });

    //nullish coalescing operator
    // null / undifine dicision making

    const isAuthenticted = undefined

    const result1 = isAuthenticted ?? 'Guest'

    const result2 = isAuthenticted ? isAuthenticted : 'Guest'

    // console.log({ result1 }, { result2 });


    
/* optional chaning */

    type User = {
        name: string;
        addresss: {
            city: string;
            road: string;
            presentAddress: string;
            parmanentAdress?: string
        }
    }



    const user: User = {
        name: 'Sakib',
        addresss: {
            city: 'Dhaka',
            road: '454/D',
            presentAddress: 'dhaka'
        }
    }

    const parmanentAdress = user?.addresss?.parmanentAdress ?? 'Parmanent nei'
    console.log(parmanentAdress);



    /* --------- */
}