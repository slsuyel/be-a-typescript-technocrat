{
    //type guards\\

    //typeof ==> type guard

    type AlphaNumaric = string | number

    const add = (param1: AlphaNumaric, param2: AlphaNumaric): AlphaNumaric => {
        if (typeof param1 === 'number' && typeof param2 === 'number') {
            return param1 + param2
        } else {
            return param1.toString() + param2.toString()
        }
    }
    const res = add(22, '22')
    // console.log(res);


    // in guard

    type NormalUser = {
        name: string;
    }

    type AdminUser = {
        name: string;
        role: 'admin'
    }

    const getUser = (user: NormalUser | AdminUser) => {
        if ('role' in user) {
            console.log('Hello, Admin User');
        } else {
            console.log('Hello, normal user');
        }
    }

    const normalUser: NormalUser = {
        name: 'Normal'
    }

    const adminUser: AdminUser = {
        name: 'Mr Admin',
        role: 'admin'
    }


    // getUser(adminUser)
































}