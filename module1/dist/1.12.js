"use strict";
{
    //nullable types
    const searchName = (value) => {
        if (value) {
            console.log('searching');
        }
        else {
            console.log('nothing to search');
        }
    };
    // searchName(null)
    /* unknown type */
    const getSpeedInMeterPerSecond = (value) => {
        if (typeof value === 'number') {
            const convertedSpeed = (value * 1000) / 3600;
            console.log(convertedSpeed);
        }
    };
    getSpeedInMeterPerSecond(1000);
    //never type
    const throwError = (msg) => {
        throw new Error(msg);
    };
    throwError('Errrrrrrrrrrror');
}
