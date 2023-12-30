const nums  = [1,2,3,4,5,6]

// const val = nums.reduce(function(acc, curval){
//    console.log(`acc: ${acc} and curval: ${curval}`)
//     return acc+ curval

// },0)


// const mytotal = nums.reduce((acc,curval)=>acc+curval,0)


// console.log(mytotal)


const shoppingcart = [

    {
        itemname:"JS course",
        price: 2999

    },
    {
        itemname:"React",
        price: 5999
    },
    {
        itemname:"DS",
        price: 12999
    }
]

const view = shoppingcart.reduce((acc, item)=>(acc +item.price),0)

console.log(`price to pay: ${view}`)
