/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    if (nums.length < 3) {
        return []
    }
    // [[-1,-1,2],[-1,0,1]]
    nums.sort((a, b) => a - b);
    console.log(nums)
    let answer = []
    // Will solve it using two pointers
    let rightMostVal = 0, nextValAfterCurr = 0, left = 0
    for (let currentIndex = 0; currentIndex < nums.length; currentIndex++) {
        left = currentIndex + 1
        let right = nums.length - 1

        if (nums[currentIndex] == nums[currentIndex - 1]) {
            continue
        }
        while (left < right) {
            nextValAfterCurr = nums[left]
            rightMostVal = nums[right]
            let currSum = nums[currentIndex] + nextValAfterCurr + rightMostVal
            if (currSum === 0) {
                let nestedAns = []
                nestedAns.push(nums[currentIndex])
                nestedAns.push(nextValAfterCurr)
                nestedAns.push(rightMostVal)
                answer.push(nestedAns)
                right--
                left++
                while (left < right && nums[left] === nums[left - 1]) {
                    console.log(left,right)
                    console.log(nums[left], nums[left -1])
                    left++
                }
                while (left < right && nums[right] === nums[right + 1]) {
                    right--
                }
            } else if (currSum > 0) {
                right--
            } else if (currSum < 0) {
                left++
            }
        }

    }
    return answer
    //op: [[-5,1,4],[-5,1,4],[-3,-1,4],[-3,0,3],[-2,-1,3],[-2,1,1],[-1,0,1],[-1,0,1],[0,0,0]]
    //[[-5,1,4],[-3,-1,4],[-3,0,3],[-2,-1,3],[-2,1,1],[-1,0,1],[0,0,0]]
};
