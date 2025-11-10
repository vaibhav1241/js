// const myNum = [1,2,3,4,5,6,7,8,9,10]

// const newNum = myNum.filter((num)=> {
//     return num>4
// })
// console.log(newNum)

const book = [
    
    {title:"book1", genre:"fiction", publish: 1981, edition : 2004},
    {title:"book2", genre:"non-fiction", publish: 1983, edition : 2005},
    {title:"book3", genre:"history", publish: 1984, edition : 2006},
    {title:"book4", genre:"science", publish: 1985, edition : 2007},
    {title:"book5", genre:"fiction", publish: 1982, edition : 2008}
];
let userBooks = book.filter((bk)=> bk.genre==='fiction' )
 userBooks= book.filter((bk)=>  bk.publish>=1981 && bk.publish<=1984)
console.log(userBooks)

