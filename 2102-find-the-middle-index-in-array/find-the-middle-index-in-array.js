/**
 * @param {number[]} nums
 * @return {number}
 */
var findMiddleIndex = function (nums) {
    // -1 2 3 4 8
    //-1 1 4
    // Calculate the entire sum of array 
    const sum = nums.reduce((acc, curr) => acc + curr, 0)
    let leftSum = 0

    for (let index = 0; index < nums.length; index++) {
        if (sum -  nums[index] - leftSum  === leftSum) {
            return index
        }
        leftSum += nums[index]
    }
    return -1
};