
let myArray = [1, 2, 3, 4, 5];
let stepsToRotate = 4;

function rotateArray(arr, steps){
    if(arr.length === 0 || steps ===0){
        return arr;
    }

let actualSteps = steps % arr.length;

return arr.slice(arr.length - actualSteps).concat(arr.slice(0, arr.length- actualSteps))
}


console.log("Original Array:", myArray);
console.log("Array after rotation:", rotateArray(myArray, stepsToRotate));
