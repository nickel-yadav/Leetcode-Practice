// Brutforce solution

// Iterates over the entire array and runs a nested loop that
// looks for possible combinations to achieve the target

// Time Complexity: O(n^2)

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (i=0; i<nums.length - 1; i++) {
        for (j= i+1; j<nums.length; j++) {
            if ( nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    } 
};


// Optimized solution

// Creates a hashmap that stores each element in the array as the key 
// for a hashmap and the corresponding index as the value. The difference 
// of the element and the target is the the compliment which if found in
// the hashmap would provide the associated index of the compliment. 

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var OptimizedTwoSum = function(nums, target) {
    let map = new Map()
   for( let i=0; i<nums.length; i++) {
       let diff = target - nums[i]; 
       if (map.has(diff)) {
           return [i, map.get(diff)]
       }
       map.set(nums[i], i)
   }
};