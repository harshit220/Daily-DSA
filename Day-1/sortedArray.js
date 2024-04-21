//Remove Duplicates from Sorted Array

let sortedArray = [1, 2, 2, 3, 4, 5, 5, 6, 7, 8, 9, 9, 10, 11, 12, 12, 13, 14, 15, 15, 15, 16, 17];
let bag = [];

for(let i = 0; i < sortedArray.length; i++){
    if(sortedArray[i] !== sortedArray[i+1]){
        bag.push(sortedArray[i]);
    }

    // console.log(sortedArray[i], sortedArray[i+1]);
}
console.log(bag);