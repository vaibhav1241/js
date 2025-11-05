//if
// <,>,<=,>=,==,!=,===,!==
// const temp=30
// if(temp<=40){
//     console.log("temp is less than 40");
// }
// else{
//     console.log("temp is greater than 40")
// }

// const score = 200
// if(score>100){
//     const power="fly"
//     console.log(`User power ${power}`)
// }
//  console.log(`User power ${power}`)

// const balance = 2000

// if(balance<500){
//     console.log("Balance is less than 500")
// }else if(balance<750){
//     console.log("Balance is less than 750")
// }else if(balance<1000){
//     console.log("Balance is less than 1000")
// }else{
//     console.log("Balance is less than 1500")
// }

const userLoggedIn = true
const debitCard = true
const loggedFromGoogle = false
const loggedFromGmail = true

if(userLoggedIn && debitCard){
    console.log("Allow to buy course")
}
if(loggedFromGoogle || loggedFromGmail){
    console.log("User logged in");
}
