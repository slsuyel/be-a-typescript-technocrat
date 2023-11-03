"use strict";
{
    // Spred operator
    // rest operator
    const greetFriends = (...friends) => {
        friends.forEach((friend) => console.log(friend));
    };
    greetFriends('sadas', "sakin", "tamu");
}
