{

    // mapped type

    const arrayOfNumbers: number[] = [1, 2, 3, 4, 5]

    const arrOfString: string[] = arrayOfNumbers.map((n) => n.toString())

    // console.log(arrOfString);

    type AreaNumber = {
        height: number;
        width: number
    }

    /*  */
    //lookup type
    type Height = AreaNumber['height']
    /*  */



    type AreaString<T> = {
        [key in keyof T]: T[key]
    };

    const area1: AreaString<{ height: string; width: number }> = {
        height: '100',
        width: 50
    };


}