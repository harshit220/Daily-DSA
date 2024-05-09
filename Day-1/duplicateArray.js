 function containsDuplicate(nums) {
//     // Create an empty object to store encountered elements
//     const seen = {};

//     // Iterate through the array
//     for (const num of nums) {
//         // If the element is already in the object, return true (duplicate found)
//         if (seen[num]) {
//             return true;
//         }
//         // Otherwise, mark the element as seen by setting its value in the object to true
//         seen[num] = true;
//     }

//     // If no duplicates are found after iterating through the array, return false
//     return false;

for(let i = 0; i<nums.length; i++){
    for(let j = i+1; j<nums.length; j++){
        if(nums[i]===nums[j]){
            return true;
        }
    }
}
return false;
 }

// Example usage
const array1 = [1, 2, 3, 4, 5];
const array2 = [1, 2, 3, 3, 4, 5];

console.log("Array 1 contains duplicates:", containsDuplicate(array1));
console.log("Array 2 contains duplicates:", containsDuplicate(array2));


// you have a box of fruits and you want to find if there are any duplicate fruites 
// ex if there is an apple and you have to search in the box to find another apple 
// if you find return true else false
// same approach for mango,banana,...
