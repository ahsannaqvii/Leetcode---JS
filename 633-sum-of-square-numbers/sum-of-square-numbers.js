/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function (c) {
    let a = 0
    let b = Math.floor(Math.sqrt(c)) //Maximum possible value of given target number - c

    while (a <= b) {
        let sumOfSquareNumbers = (a * a) + (b * b)
        
        if (sumOfSquareNumbers === c) {
            return true
        } else if (sumOfSquareNumbers > c) {
            b--
        }
        else if (sumOfSquareNumbers < c) {
            a++
        }

    }
    return false

};