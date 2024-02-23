/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function(nums) {
    let rightSum = []
    let leftSum = []
    let answer = []
    rightSum.push(0)
    leftSum.push(0)
    let k = 0
    for(let i =0, j = nums.length-1;i < nums.length, j > 0 ; i++, j--) {
        if(rightSum.length === nums.length) {
            break
        }
        if(leftSum.length === nums.length) {
            break
        }
        leftSum.push(leftSum[k] + nums[j])
        rightSum.push(rightSum[i] + nums[i])
        k = k + 1

    }
    leftSum = leftSum.reverse()
    answer = leftSum.map((val,index) => Math.abs(val - rightSum[index]))
    return answer
};