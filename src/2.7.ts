{

    //generic constraints with keyop operator



    type Vehicle = {
        byke: string;
        car: string;
        ship: string
    }


    type Owner = 'byke' | 'car' | 'ship';      //manually
    type Owner2 = keyof Vehicle

    const getPropeertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
        return obj[key]
    }

    const user = {
        name: 'Suyel',
        age: 22,
        address: 'dhaka'
    }

    const result = getPropeertyValue(user, 'name')

    const car = {
        model: 'Toyota 100',
        year: 2012
    }


    const result2 = getPropeertyValue(car, 'model')
   





    // const user = {
    //     name: 'Suyel',
    //     age: 22,
    //     address: 'dhaka'
    // }

    // user['name']


















}