// var age = 17;
// var is_subscribed = false;


function Userinfo(age, is_subscribed) {

if(age >= 18 && is_subscribed === true) {
    console.log("User is 18 or older and is Subscribed");
} else if(age < 18 && is_subscribed === true) {
    console.log("User is under the age of 18 and is Subscribed");
} else if(age >= 18 && is_subscribed != true) {
    console.log("User is 18 or older but is not Subscribed");
} else if(age < 18 && is_subscribed != true) {
    console.log("User is under 18 and not subscribed");
} else {
    console.log ("Invalid User data given");
}

}

Userinfo( 19, true);

Userinfo (15, false);