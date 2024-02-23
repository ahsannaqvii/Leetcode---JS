/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let map = {}
    for (let i = 0; i < nums.length; i++) {
        // Simply subtract each nums element by the target and store it in a hashmap 
        // and put the current number in key and index as value
        let remainingDiff = target - nums[i]
        //  map[remainingDiff] === 0 - Add this check so that if does not become falsy
        if(map[remainingDiff] || map[remainingDiff] === 0) {
            return [map[remainingDiff], i]
        }
        map[nums[i]] = i
    }

};