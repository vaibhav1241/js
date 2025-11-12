// const myNum = [1,2,3,4,5,6,7,8,9,10]

// const newNum = myNum.filter((num)=> {
//     return num>4
// })
// console.log(newNum)

// const book = [
    
//     {title:"book1", genre:"fiction", publish: 1981, edition : 2004},
//     {title:"book2", genre:"non-fiction", publish: 1983, edition : 2005},
//     {title:"book3", genre:"history", publish: 1984, edition : 2006},
//     {title:"book4", genre:"science", publish: 1985, edition : 2007},
//     {title:"book5", genre:"fiction", publish: 1982, edition : 2008}
// ];
// let userBooks = book.filter((bk)=> bk.genre==='fiction' )
//  userBooks= book.filter((bk)=>  bk.publish>=1981 && bk.publish<=1984)
// console.log(userBooks)

// const myNum = [1,2,3,4,5,6,7,8,9,10]

// // const newNum = myNum.map((num)=>{return num+10})

// const newNum = myNum.map((num)=> num*10)
// .map((num)=> num+1)
// .filter((num)=>num>=40)


// console.log(newNum)


const myNum = [1,2,3,4]

// const myTotal = myNum.reduce(function(acc,curval){
//     console.log(`acc: ${acc} and curval ${curval}`)
//     return acc + curval
// },0)

// const myTotal= myNum.reduce((acc,curval)=> acc+curval,0)
// console.log(myTotal)

const shoppingCart = [{
    itemNmae : "js course",
    price : 999
},
{
    itemNmae : "python course",
    price : 999
},
{
    itemNmae : "data science course",
    price : 999
}
]

const priceToPay = shoppingCart.reduce((acc,item)=> acc + item.price,0)
console.log(priceToPay)