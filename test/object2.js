// const tinderUser = new Object();
const tinderUser = {}
tinderUser.Id = '123abc'
tinderUser.name = "vaibhav"
tinderUser.isLoggedIn = false
// console.log(tinderUser)
const regulerUser = {
    email : "vaibhavgond@gmail.com",
    fullname :{
        firstname:"vaibhav",
        lastname:"gond"
    }
}
// console.log(regulerUser.fullname)

const Object1 ={1:"name", 2: "vaibhav", 3:"gond"}
const Object2 ={4:"vaibhav", 5:"gond"}
// const obj3 ={Object1,Object2}
// const obj3 = Object.assign( {},Object1, Object2)
const obj3 = {...Object1, ...Object2}
// console.log(obj3)
console.log(tinderUser)
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))
console.log(tinderUser.hasOwnProperty("isLogged"))