/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    // Will again solve it using two pointer approach 
    let left = 0, right = numbers.length - 1
    let leftSum = numbers[left], rightSum = numbers[right]
    while (left < right) {
        if (leftSum + rightSum == target) {
            return [left + 1, right + 1]
        }
        // If sum is greater than target, assign the right -1 value to rightSum 
        else if (leftSum + rightSum > target) {
            rightSum = numbers[--right]
        }
        else if (leftSum + rightSum < target) {
            leftSum = numbers[++left]
        }

    }
    // return false
};