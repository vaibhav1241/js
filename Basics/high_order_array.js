// // for of loop

//  const arr = [1,2,3,4,5,7]
//  for (const num of arr) {
//     //console.log(num)
//  }
//  const greeting = "hello world !"
//  for (const  greet of greeting) {
//     //console.log(`Each char is ${greet}`)
    
//  }

 // MAP

//  const map = new Map();

//  map.set('IN', "INDIA")
//  map.set('USA',"United State of America")

//  console.log(map);

//  for (const [key,value] of map) {
//    // console.log(key,":-" , value)
//  }

//  const myObject = {
//     "game1":"NFS",
//     "game2":"spiderman"
//  }
//  for (const [key,value] of myObject) {
//     console.log(key,":-",value)
//  }

// const myObject = {
//     js:"javascript",
//     cpp:"c++",
//     rb:"ruby",
//     swift:"swift by apple"
// }
// for (const key in myObject) {
//    console.log(`${key} shortcut is for ${myObject[key]}`)
    
    
// }

// const programming = ["js","rb","py","java","cpp"]

// for (const key in programming) {
    
//     console.log(programming[key])
    
// }

const coding = ["js","cpp","python","java"]

// coding.forEach( function (val){
//     console.log(val)
// } )

// coding.forEach((item)=>{
// console.log(item)
// })

// function printMe(item){
//     console.log(item)
// }

// coding.forEach(printMe)

// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr)
// })

const myCoding = [
{
    languageName:"javascript",
    languageFIleName:"js"
},
{
    languageName:"java",
    languageFIleName:"java"
},
{
    languageName:"python",
    languageFIleName:"py"
}
]

myCoding.forEach((item,arr)=>{
console.log(item.languageFIleName)
})