const myHero = ["Spiderman", "Ironman", "Hulk", "Thor"];
const dcHero =["Superman", "Batman", "Flash", "Arrow"];

// myHero.push(dcHero)
// console.log(myHero)
// console.log(myHero[4][1])
// const allHero = myHero.concat(dcHero)
// console.log(allHero)
const allHero = [...myHero, ...dcHero]
// console.log(allHero)
// const anOther_array = [1,5,2,[1,5,2,58],4,[1,5,5,[4,8,]]]
// const realArray = anOther_array.flat(2)
// console.log(realArray)
console.log(Array.isArray("vaibhav"))
console.log(Array.from("vaibhav"))

let s1 =189
let s2 = 4524
let s3 = 1234
console.log(Array.of(s1,s2,s3))