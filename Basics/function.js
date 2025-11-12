

function sayMyName(){
    console.log("V")
    console.log("A")
    console.log("I")
    console.log("B")
    console.log("H")
    console.log("A")
    console.log("V")


}
// sayMyName()

// function addTwoNumbers(num1,num2){
//     console.log(num1+num2)
// }
function addTwoNumbers(num1,num2){
    // let result = num1+num2
    // return result`
    return num1+num2
}
const result = addTwoNumbers(5,6)
// console.log(result) //undefined

function loginUserMessage(username){
    if(!username){
        console.log("Please enter a valid username")
        return

    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("vaibhav"))
// console.log(loginUserMessage())

function calculateCartPrice(...prices){
    return prices

}
// console.log(calculateCartPrice(200,400,300))


const user = {
    username:"vaibhav",
    price:400,
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`)
}
handleObject(user)

const myNewArray = [1,2,3,4,5]

function returnFirstValue(anyArray){
    return anyArray[1]
}
console.log(returnFirstValue(myNewArray))



