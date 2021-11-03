var age = 17;
var is_subscribed = false;


if(age >= 18 && is_subscribed === true) {
    console.log("User is above the age of 18 and is Subscribed");
} else if(age < 18 && is_subscribed === true) {
    console.log("User is under the age of 18 and is Subscribed");
} else if(age >= 18 && is_subscribed != true) {
    console.log("User is over 18 but is not Subscribed");
} else if(age < 18 && is_subscribed != true) {
    console.log("User is under 18 and not subscribed");
} else {
    console.log ("Invalid User data given");
}