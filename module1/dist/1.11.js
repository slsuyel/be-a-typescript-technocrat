"use strict";
var _a, _b;
{
    /* -------------- */
    //ternary operator || optional chaning || nullish coalescing operator
    const age = 18;
    if (age >= 18) {
        console.log('Adult');
    }
    else {
        console.log('Not adult');
    }
    const isAdult = age >= 18 ? 'adult' : 'Not adult';
    // console.log({ isAdult });
    //nullish coalescing operator
    // null / undifine dicision making
    const isAuthenticted = undefined;
    const result1 = isAuthenticted !== null && isAuthenticted !== void 0 ? isAuthenticted : 'Guest';
    const result2 = isAuthenticted ? isAuthenticted : 'Guest';
    const user = {
        name: 'Sakib',
        addresss: {
            city: 'Dhaka',
            road: '454/D',
            presentAddress: 'dhaka'
        }
    };
    const parmanentAdress = (_b = (_a = user === null || user === void 0 ? void 0 : user.addresss) === null || _a === void 0 ? void 0 : _a.parmanentAdress) !== null && _b !== void 0 ? _b : 'Parmanent nei';
    console.log(parmanentAdress);
    /* --------- */
}
