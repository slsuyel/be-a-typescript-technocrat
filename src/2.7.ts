{

    //generic constraints with keyop operator



    type Vehicle = {
        byke: string;
        car: string;
        ship: string
    }


    type Owner = 'byke' | 'car' | 'ship';      //manually
    type Owner2 = keyof Vehicle






}