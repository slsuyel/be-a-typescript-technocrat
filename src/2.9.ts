{

    //conditional type

    type Seikh = {
        bikye: string;
        car: string;
        ship: string
    }

    // car ace kina, bike ace kina, ship ace kina,tractar ace kina

    type CheckVehicle<T> = T extends 'bike' | 'car' | 'ship' ? true : false
    type HasBike = CheckVehicle<'bike'> // retun true
    type HasBus = CheckVehicle<'bus'> // retun false










}