const myobject = {
js:"Javascript",
cpp:"C++",
rb:"ruby",
swift:"swift by apple"
}

for(const key in myobject){
console.log(`${key} :  ${myobject[key]}`);
}