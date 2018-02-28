module.exports = function longestConsecutiveLength(array) {
  // your solution here
    let result=[];
    array=array.sort((num1,num2)=>{return num1-num2;});
    result[0]=0;
    for(let i=1;i<array.length;i++)result[i]=array[i]===array[i-1]+1?result[i-1]+1:1;
    console.log(Math.max.apply({},result));
    return Math.max.apply({},result);

}
