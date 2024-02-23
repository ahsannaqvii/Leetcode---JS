/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canThreePartsEqualSum = function(arr) {
    let maximumLengthOfSubArray = arr.length / 3
    // return maximumLengthOfSubArray
    let totalSum = arr.reduce((prev,curr) => prev + curr, 0)

    if(totalSum % 3 !== 0) {
        return false
    }
    // Two pointer approach - run a pointer from left, and a second pointer from right
    let targetSum = totalSum / 3

    let left =0, right = arr.length -1
    let leftSum = arr[left], rightSum = arr[right]
    //Until they come to a single middle point and couldnt find a target sum
    while(left + 1 < right) {
        //If two sum are equals, then the third sum will always be equal too.
        if (leftSum === targetSum && rightSum === targetSum) {
            return true;
        }
        //First pointer - increase to the right
        if(leftSum !== targetSum) {
            leftSum += arr[++left]
        }
        //Second pointer - decrease to the left
        if(rightSum !== targetSum) {
            rightSum += arr[--right]
        }
    }
    return false
};