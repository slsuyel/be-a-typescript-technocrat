{

    // type assertion  > In TypeScript, type assertion is a mechanism which tells the compiler about the type of a variable


    const kgToGm = (value: string | number): string | number | undefined => {
        if (typeof value === 'string') {
            const convertedValue = parseFloat(value) * 1000
            return `The converted value is ${convertedValue} g`
        }

        if (typeof value === 'number') {
            return value * 1000
        }

    }


    const res1 = kgToGm(1) as number

    const res2 = kgToGm('1000') as string

    console.log({ res1 }, { res2 });



    // try and catch 


    type CustomError = {
        message: string
    }

    try {

    } catch (error) {
        console.log((error as CustomError).message);
    }







    /* ------------------------ */
}