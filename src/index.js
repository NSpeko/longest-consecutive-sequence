module.exports = function longestConsecutiveLength(array) {
  // your solution here
    let lastNo = Infinity;
    let maxSequence = 0;
    let currSequence = 0;
    console.log(array.length);
    for (let i = 0; i < array.length; i++) {
        if (array[i] === lastNo + 1) {
            currSequence++;
            maxSequence = Math.max(maxSequence,currSequence);
        }else currSequence = 1;
        lastNo = array[i];
    }
    return Math.max(maxSequence, currSequence);

}
