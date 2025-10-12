//sinngleton

// object literal
const mySym = Symbol("key1")

const jsuser ={
    name:"vaibhav",
    [mySym]:"mykey1",
    age:24,
    hobby:"guitar",
    isMarried:false
}
console.log(jsuser)
console.log(jsuser["age"])
console.log(typeof jsuser[mySym])
// Object.freeze(jsuser)

jsuser.age = 26
console.log(jsuser["age"])

jsuser.greeting = function(){
    console.log("hello jsuser")
}
jsuser.greeting2 = function(){
    console.log(`hello i am ${this.name}`)
}
console.log(jsuser.greeting())
console.log(jsuser.greeting2())