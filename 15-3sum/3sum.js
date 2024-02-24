/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    if (nums.length < 3) {
        return []
    }
    Sort this using a - b because normal sort, sorts the array alphabetically
    nums.sort((a, b) => a - b);
    let answer = []
    // Will solve it using two pointers
    let rightMostVal = 0, nextValAfterCurr = 0, left = 0
    for (let currentIndex = 0; currentIndex < nums.length; currentIndex++) {
        left = currentIndex + 1
        let right = nums.length - 1
        //To avoid duplicate pairs, ignore the currNumber, if the currNum is same as the previous
        if (nums[currentIndex] == nums[currentIndex - 1]) {
            continue
        }
        while (left < right) {
            nextValAfterCurr = nums[left]
            rightMostVal = nums[right]
            let currSum = nums[currentIndex] + nextValAfterCurr + rightMostVal
            if (currSum === 0) {
                let nestedAns = []
                //If we have found the sum equals to 0, push it into an array and then forward the left ptr and negate the right ptr
                nestedAns.push(nums[currentIndex])
                nestedAns.push(nextValAfterCurr)
                nestedAns.push(rightMostVal)
                answer.push(nestedAns)
                right--
                left++
                //Since we are looking to avoid duplicate pairs so if next number from L to R is same as the previous, keep on skipping it
                while (left < right && nums[left] === nums[left - 1]) {
                    left++
                }
                //Since we are looking to avoid duplicate pairs so if  number from R to L is same as the previous, keep on skipping it
                while (left < right && nums[right] === nums[right + 1]) {
                    right--
                }
            } 
            //Since the array is sorted, the elements on the right will always be greater, so if the sum is greater, --right
            else if (currSum > 0) {
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
