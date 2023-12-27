


// const mynumber = nums.map((num)=>  {return num + 40})


// console.log(mynumber);
const nums = [1,2,3,4,5,6,7,8,9,10]

const mapnums = nums
.map((num)=> num * 10 )
.map((num)=> num + 1)
.filter((num)=> num >= 51)

console.log(mapnums);