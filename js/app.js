// Setup arrays and variables
var userage = [19, 15, 19, 15];
var is_subscribed = [true, false, false, true];


// Setup for loop that runs through each item in the array and checks to see if subscribed, then console logs the appropriate message
for (var i = 0; i < userage.length; i++) {

    if (userage[i] >= 18 && is_subscribed[i]) {
        console.log("User is 18 or older and is Subscribed");
    } else if (userage[i] < 18 && is_subscribed[i]) {
        console.log("User is under the age of 18 and is Subscribed");
    } else if (userage[i] >= 18 && !is_subscribed[i]) {
        console.log("User is 18 or older but is not Subscribed");
    } else if (userage[i] < 18 && !is_subscribed[i]) {
        console.log("User is under 18 and not subscribed");
    } else {
        console.log("Invalid User data given");
    }
}

    // function calculator(a, b, sign) {
    //     if (typeof (a) !== "number" || typeof (b) !== "number") {
    //         return "unknown value";
    //     } else {

    //         if (sign === "+") {
    //             return a + b;
    //         } else if (sign === "-") {
    //             return a - b;
    //         } else if (sign === "*") {
    //             return a * b;
    //         }
    //         else if (sign === "/") {
    //             return a / b;
    //         } else {
    //             return "unknown value";
    //         }
    //     }
    // }



    // calculator(1, 4, "+");
    // calculator(true, 2, "-");

//     function between(a, b) {
//         // your code here
//         let c = [];

//         while (true) {

//             c.push(a);
//             a = a + 1;
//             if (a === b + 1)
//                 return c
//         }
//     }





// between(1, 4);