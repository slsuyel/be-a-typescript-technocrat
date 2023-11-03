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

//InterSection






}